import { GoogleGenAI, Modality } from "@google/genai";
import { ArtStyle, AspectRatio, BackgroundOption, UploadedFile } from '../types';

// Robust API key retrieval that works in both node (bundler) and browser environments if polyfilled
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
  ? process.env.API_KEY 
  : ''; // Fallback or let it fail naturally if not provided, but prevents ReferenceError

const ai = new GoogleGenAI({ apiKey });

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove Data URL prefix (e.g. "data:image/jpeg;base64,")
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

const getStylePrompt = (style: ArtStyle, isColor: boolean): string => {
  switch (style) {
    case ArtStyle.CHARCOAL:
      return `Professional charcoal portrait drawing, museum-quality art:
- Exquisite charcoal sketch technique with masterful tonal gradation
- Rich blacks and subtle grays creating depth and dimension
- Fine, precise strokes showing expert draftsmanship
- Classical portrait drawing tradition with contemporary refinement
- Soft, natural shading emphasizing character and emotion
- Clean composition with artistic balance
- Timeless elegance suitable for memorial display
${isColor ? '' : '- Pure black and white, monochromatic excellence'}`;
    
    case ArtStyle.WATERCOLOR:
      return `Professional watercolor portrait painting, fine art quality:
- Luminous watercolor technique with masterful color control
- Delicate washes and transparent layers creating ethereal beauty
- Soft edges with selective detail for emotional impact
- Fluid brushwork showing expert watercolor mastery
${isColor ? '- Warm, harmonious color palette with natural skin tones' : '- Sophisticated monochrome watercolor in sepia and gray tones'}
- Gallery-worthy composition with artistic sensitivity
- Gentle, respectful interpretation perfect for remembrance`;

    case ArtStyle.REALISTIC_OIL:
      return `Professional oil painting portrait, old master quality:
- Rich, luminous oil painting technique with visible brushwork
- Masterful use of light and shadow (chiaroscuro)
${isColor ? '- Deep, vibrant colors with expert color harmony' : '- Dramatic monochrome in the style of Rembrandt'}
- Classical portrait painting composition and pose
- Textured surface showing expert craftsmanship
- Renaissance or Baroque inspired artistic excellence
- Dignified, timeless portrayal suitable for permanent display`;

    case ArtStyle.MODERN_LINE:
      return `Professional line art portrait, contemporary illustration:
- Clean, confident continuous line drawing
- Modern minimalist aesthetic with expressive detail
- Precise, elegant linework showing expert control
- Balanced composition with thoughtful negative space
- Contemporary fine art illustration style
- Sophisticated simplicity suitable for elegant display
${isColor ? '- Subtle color accents with refined palette' : '- Pure black lines on white'}`;

    case ArtStyle.BW_PHOTO:
      return `Professional portrait photograph, fine art photography:
- High-quality monochrome portrait in classic photographic tradition
- Perfect tonal range from deep blacks to bright highlights
- Sharp, clear details with artistic softness where appropriate
- Professional studio lighting creating dimensional depth
- Classic portrait photography composition
- Timeless black and white aesthetic
- Museum-quality photographic print appearance
- Elegant, respectful interpretation for memorial purposes`;
    
    default:
      return `High-quality artistic portrait in ${style} style.`;
  }
};

const getBackgroundPrompt = (option: BackgroundOption): string => {
  switch (option) {
    case BackgroundOption.BLURRED:
      return "Background: Softly blurred, elegant bokeh creating depth and focus on the subjects.";
    case BackgroundOption.SOLID_GRAY:
      return "Background: Smooth, professional neutral gray studio backdrop.";
    case BackgroundOption.WHITE:
      return "Background: Clean, isolated white background, focusing purely on the portrait.";
    case BackgroundOption.ETHEREAL:
      return "Background: Ethereal, soft, cloud-like textures suitable for a memorial.";
    default:
      return "Background: Complimentary professional studio setting.";
  }
};

const getLightingPrompt = (brightness: number): string => {
  if (brightness > 60) return "bright, well-lit with gentle angelic highlights";
  if (brightness < 40) return "subtle, moody lighting with rich, dramatic shadows";
  return "balanced, natural studio lighting";
};

const getContrastPrompt = (contrast: number): string => {
  if (contrast > 60) return "high contrast with dramatic tonal range";
  if (contrast < 40) return "soft, low contrast with gentle transitions";
  return "moderate contrast with natural depth";
};

export const generateMemorialPortrait = async (
  mainPhoto: UploadedFile | null,
  addedPhotos: UploadedFile[],
  style: ArtStyle,
  ratio: AspectRatio,
  background: BackgroundOption,
  isColor: boolean,
  brightness: number,
  contrast: number
): Promise<string> => {
  try {
    const parts: any[] = [];

    // 1. Add Main Photo
    if (mainPhoto) {
      const mainBase64 = await fileToBase64(mainPhoto.file);
      parts.push({
        inlineData: {
          data: mainBase64,
          mimeType: mainPhoto.file.type,
        },
      });
    }

    // 2. Add Additional Photos
    for (const p of addedPhotos) {
      const addedBase64 = await fileToBase64(p.file);
      parts.push({
        inlineData: {
          data: addedBase64,
          mimeType: p.file.type,
        },
      });
    }

    // 3. Construct Prompt
    const stylePrompt = getStylePrompt(style, isColor);
    const backgroundPrompt = getBackgroundPrompt(background);
    const lightingPrompt = getLightingPrompt(brightness);
    const contrastPrompt = getContrastPrompt(contrast);
    const photoCount = (mainPhoto ? 1 : 0) + addedPhotos.length;

    const prompt = `
**TASK: Create a Masterpiece Memorial Portrait**

**Artistic Direction:**
${stylePrompt}

**Environment:**
${backgroundPrompt}
Lighting: ${lightingPrompt}
Contrast: ${contrastPrompt}

**Composition & Posing Instructions (CRITICAL):**
You are provided with ${photoCount} reference image(s). 
- **Re-imagine the Composition:** Do NOT simply paste the subjects next to each other. You are an artist creating a cohesive group portrait from scratch.
- **Creative Freedom:** You have full authority to **adjust the pose, orientation, and body language** of the subjects to create the most natural and heartwarming arrangement.
- **Natural Interaction:** Subjects should appear to be physically together in the same space. 
  - If there is a person and a pet, the pet might be sitting on the lap or resting comfortably next to the person.
  - If there are multiple people, position them standing close, shoulder-to-shoulder, or one sitting and one standing, to imply a close bond.
- **Perspective:** Unify the eye levels and perspective so the geometry of the scene is perfect.
- **Structure:** Create a balanced, aesthetically pleasing "pyramid" or "rule of thirds" composition suitable for a framed gallery portrait.

**Essential Requirements:**
1. **Facial Integrity:** The most important rule is to maintain **photorealistic facial resemblance** to the source photos. The identities must be unmistakable.
2. **Unified Style:** All subjects must look like they were painted/drawn in the same session, with consistent lighting and texture.
3. **Emotional Tone:** The portrait should feel dignified, peaceful, and respectful.
4. **Aspect Ratio:** ${ratio}

This is a meaningful memorial gift. Prioritize beauty, harmony, and artistic excellence over rigid adherence to the original photo's perspective. Make them look good together.

Technical specifications: Ultra high resolution, professional quality, expert craftsmanship.
    `;

    console.log("Generated Prompt:", prompt);

    parts.push({ text: prompt });

    // 4. Call Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: parts,
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    // 5. Extract Image
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
        const parts = candidates[0].content.parts;
        for (const part of parts) {
            if (part.inlineData) {
                const base64ImageBytes = part.inlineData.data;
                const mimeType = part.inlineData.mimeType || 'image/png';
                return `data:${mimeType};base64,${base64ImageBytes}`;
            }
        }
    }

    throw new Error("No image generated.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
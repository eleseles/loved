
import React, { useState } from 'react';
import ToolHeader from '../components/ToolHeader';
import ImageUploader from '../components/ImageUploader';
import SEO from '../components/SEO';
import { UploadedFile, ArtStyle, AspectRatio, BackgroundOption, GenerationState } from '../types';
import { DownloadIcon, RefreshIcon, ShareIcon, XIcon, CopyIcon, FacebookIcon, TwitterIcon, WhatsAppIcon, CheckIcon } from '../components/Icons';
import { generateMemorialPortrait } from '../services/geminiService';

const ToolPage: React.FC = () => {
  // Input State
  const [mainPhoto, setMainPhoto] = useState<UploadedFile[]>([]);
  const [addedPhotos, setAddedPhotos] = useState<UploadedFile[]>([]);
  
  // Config State
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle>(ArtStyle.CHARCOAL);
  const [isColor, setIsColor] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.SQUARE);
  const [background, setBackground] = useState<BackgroundOption>(BackgroundOption.SOLID_GRAY);
  const [brightness, setBrightness] = useState<number>(50);
  const [contrast, setContrast] = useState<number>(50);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Generation State
  const [genState, setGenState] = useState<GenerationState>({
    isGenerating: false,
    resultImage: null,
    error: null
  });

  const handleMainPhotoChange = (files: UploadedFile[]) => {
    // Enforce single file for main photo
    if (files.length > 0) setMainPhoto([files[files.length - 1]]);
    else setMainPhoto([]);
  };

  const handleGenerate = async () => {
    if (mainPhoto.length === 0) {
      alert("Please upload a main photo.");
      return;
    }

    setGenState({ isGenerating: true, resultImage: null, error: null });

    try {
      const result = await generateMemorialPortrait(
        mainPhoto[0],
        addedPhotos,
        selectedStyle,
        aspectRatio,
        background,
        isColor,
        brightness,
        contrast
      );
      setGenState({ isGenerating: false, resultImage: result, error: null });
    } catch (err) {
      setGenState({ 
        isGenerating: false, 
        resultImage: null, 
        error: "Failed to generate image. Please try again or select different photos." 
      });
    }
  };

  const handleDownload = () => {
    if (genState.resultImage) {
      const link = document.createElement('a');
      link.href = genState.resultImage;
      link.download = `memorial-portrait-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShare = () => {
    // Simulate generating a unique link
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const link = `https://lovedonephoto.com/share/${uniqueId}`;
    setShareLink(link);
    setIsShareModalOpen(true);
    setIsCopied(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-20 bg-white">
      <SEO 
        title="Create Portrait"
        description="Upload your photos and use our AI tool to merge loved ones into a single artistic portrait."
        canonical="/create"
      />
      <ToolHeader />

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT PANEL: CONTROLS (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Photo Uploads */}
            <section className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-serif font-semibold mb-4 text-zinc-900">1. Upload Photos</h2>
              
              <ImageUploader 
                label="Main Photo (Base)" 
                subLabel="Best for groups or the primary setting."
                files={mainPhoto}
                onFilesChange={handleMainPhotoChange}
                multiple={false}
              />
              
              <ImageUploader 
                label="Add Person(s)" 
                subLabel="Upload clear photos of people to add."
                files={addedPhotos}
                onFilesChange={setAddedPhotos}
                multiple={true}
              />
              <p className="text-xs text-zinc-400 mt-2 font-light">
                * Ensure each added photo clearly shows the face.
              </p>
            </section>

            {/* 2. Style & Options */}
            <section className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm space-y-6">
              <h2 className="text-lg font-serif font-semibold mb-4 text-zinc-900">2. Customize Art</h2>
              
              {/* Art Style */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Artistic Style</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.values(ArtStyle).map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`text-left px-4 py-3 rounded-lg text-sm transition-all ${
                        selectedStyle === style 
                          ? 'bg-zinc-900 text-white font-medium shadow-md' 
                          : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Toggle */}
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                <span className="text-sm text-zinc-700">Color Mode</span>
                <div className="flex bg-white p-1 rounded-lg border border-zinc-200 shadow-sm">
                  <button 
                    onClick={() => setIsColor(false)}
                    className={`px-3 py-1 text-xs rounded-md transition-all ${!isColor ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
                  >
                    B&W
                  </button>
                  <button 
                    onClick={() => setIsColor(true)}
                    className={`px-3 py-1 text-xs rounded-md transition-all ${isColor ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
                  >
                    Color
                  </button>
                </div>
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Size & Ratio</label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.values(AspectRatio).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`py-2 text-xs rounded border transition-all ${
                        aspectRatio === ratio 
                          ? 'bg-zinc-900 text-white border-zinc-900' 
                          : 'text-zinc-600 bg-white border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background */}
              <div>
                 <label className="block text-sm font-medium text-zinc-700 mb-2">Background</label>
                 <select 
                  value={background}
                  onChange={(e) => setBackground(e.target.value as BackgroundOption)}
                  className="w-full bg-white border border-zinc-300 text-zinc-900 text-sm rounded-lg p-2.5 focus:ring-zinc-500 focus:border-zinc-500"
                 >
                   {Object.values(BackgroundOption).map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
              </div>

              {/* Sliders: Brightness & Contrast */}
              <div className="space-y-4">
                {/* Brightness Slider */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-zinc-700">Brightness</label>
                    <span className="text-xs text-zinc-500">{brightness}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={brightness} 
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900" 
                  />
                </div>
                
                {/* Contrast Slider */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-zinc-700">Contrast</label>
                    <span className="text-xs text-zinc-500">{contrast}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={contrast} 
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900" 
                  />
                </div>
              </div>

            </section>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={genState.isGenerating}
              className={`w-full py-4 text-center rounded-xl font-serif text-lg tracking-wider transition-all ${
                genState.isGenerating 
                  ? 'bg-zinc-200 text-zinc-500 cursor-wait' 
                  : 'bg-zinc-900 text-white hover:bg-black hover:shadow-lg hover:shadow-zinc-400 font-bold'
              }`}
            >
              {genState.isGenerating ? 'Crafting Portrait...' : 'Generate Portrait'}
            </button>

          </div>

          {/* RIGHT PANEL: PREVIEW (8 Columns) */}
          <div className="lg:col-span-8">
             <div className="bg-zinc-50 border border-zinc-200 rounded-xl h-[600px] lg:h-[800px] relative flex flex-col items-center justify-center overflow-hidden p-4 shadow-inner">
                
                {/* Placeholder or Result */}
                {!genState.resultImage && !genState.isGenerating && !genState.error && (
                  <div className="text-center p-8 max-w-md">
                    <div className="w-20 h-20 bg-white border border-zinc-200 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm">
                       <span className="text-4xl">✨</span>
                    </div>
                    <h3 className="text-xl font-serif text-zinc-800 mb-2">Ready to Create Art</h3>
                    <p className="text-zinc-500 font-light">
                      Upload your photos on the left and select a style to see the magic happen here.
                    </p>
                  </div>
                )}

                {/* Loading State */}
                {genState.isGenerating && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-20 backdrop-blur-sm">
                      <div className="w-16 h-16 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin mb-4"></div>
                      <p className="text-zinc-800 font-serif tracking-wider animate-pulse">Creating your masterpiece...</p>
                      <p className="text-zinc-500 text-sm mt-2">This may take a few moments</p>
                   </div>
                )}

                {/* Error State */}
                {genState.error && (
                  <div className="text-center max-w-md">
                    <p className="text-red-500 mb-4 font-medium">{genState.error}</p>
                    <button 
                      onClick={() => setGenState(prev => ({ ...prev, error: null }))}
                      className="text-sm underline text-zinc-500 hover:text-zinc-800"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                {/* Result Image */}
                {genState.resultImage && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={genState.resultImage} 
                      alt="Generated Memorial Portrait" 
                      className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                       <button 
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-black transition-colors shadow-lg"
                       >
                         <DownloadIcon className="w-5 h-5" />
                         Download High Res
                       </button>
                       <button 
                        onClick={handleShare}
                        className="flex items-center gap-2 px-4 py-3 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-colors shadow-lg border border-zinc-200"
                       >
                         <ShareIcon className="w-5 h-5" />
                         Share
                       </button>
                       <button 
                        onClick={handleGenerate}
                        className="flex items-center gap-2 px-4 py-3 bg-white text-zinc-900 backdrop-blur-md rounded-full font-medium hover:bg-zinc-50 transition-colors shadow-lg border border-zinc-200"
                       >
                         <RefreshIcon className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                )}
             </div>
             
             {/* Post-generation info */}
             {genState.resultImage && (
               <div className="mt-6 p-6 bg-white border border-zinc-200 rounded-lg">
                 <h4 className="font-serif text-zinc-900 text-sm uppercase tracking-widest mb-2">About this Result</h4>
                 <p className="text-zinc-600 text-sm">
                   This portrait was generated using the Gemini 2.5 Flash Image model. The AI has blended your photos based on the {selectedStyle} style. 
                   If you would like to refine the faces, try uploading clearer photos or adjusting the brightness and contrast.
                 </p>
               </div>
             )}
          </div>

        </div>
      </main>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in-up">
            <button 
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-2">Share Masterpiece</h3>
            <p className="text-zinc-500 text-sm mb-6">Share your creation with friends and family.</p>
            
            {/* Social Buttons */}
            <div className="flex justify-center gap-6 mb-8">
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <span className="text-xs text-zinc-500 font-medium">Facebook</span>
              </button>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <TwitterIcon className="w-6 h-6" />
                </div>
                <span className="text-xs text-zinc-500 font-medium">Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <span className="text-xs text-zinc-500 font-medium">WhatsApp</span>
              </button>
            </div>

            {/* Copy Link */}
            <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 flex items-center gap-3">
              <input 
                type="text" 
                readOnly 
                value={shareLink} 
                className="bg-transparent border-none focus:ring-0 text-zinc-600 text-sm flex-grow font-mono"
              />
              <button 
                onClick={handleCopyLink}
                className={`p-2 rounded-lg transition-colors ${isCopied ? 'bg-green-100 text-green-700' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100'}`}
              >
                {isCopied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolPage;

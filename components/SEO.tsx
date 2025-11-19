
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, image }) => {
  const siteName = "Memorial Art Studio";
  const fullTitle = `${title} | ${siteName}`;
  const domain = "https://lovedonephoto.com";
  const url = canonical ? `${domain}${canonical}` : domain;
  
  // Determine image URL (handle absolute or relative paths)
  const ogImage = image 
    ? (image.startsWith('http') ? image : `${domain}${image}`) 
    : `${domain}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Keywords for SEO */}
      <meta name="keywords" content="add deceased loved one to photo, memorial portrait, AI portrait generator, charcoal portrait from photo, watercolor memorial, combine photos of loved ones" />
    </Helmet>
  );
};

export default SEO;

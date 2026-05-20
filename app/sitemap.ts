import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.seaturtlevillaroatan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/west-bay-roatan`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/roatan-family-vacation`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/roatan-pickleball-padel-vacation`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
  ];
}

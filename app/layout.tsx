import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://seaturtlevillaroatan.com'),
  title: 'Sea Turtle Villa Roatan | Luxury Villa at Ocean One Villas',
  description: 'A modern tropical villa in Roatan with rooftop hot tub, resort amenities at Paradise Beach Resort, beach access, 3D tour, padel, pickleball and direct booking.',
  openGraph: {
    title: 'Sea Turtle Villa Roatan',
    description: 'Private villa comfort with resort-style amenities in Roatan.',
    url: 'https://seaturtlevillaroatan.com',
    siteName: 'Sea Turtle Villa Roatan',
    images: ['/images/villa/rooftop-night.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

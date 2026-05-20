import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seaturtlevillaroatan.com'),
  title: {
    default: 'Sea Turtle Villa Roatan | Luxury West Bay Villa Rental',
    template: '%s | Sea Turtle Villa Roatan',
  },
  description: 'Sea Turtle Villa is a modern Caribbean villa in West Bay, Roatan with Paradise Beach resort amenities, private Ocean One pool, rooftop hot tub, Starlink WiFi, walkable beach access, padel, pickleball and direct booking.',
  keywords: [
    'Sea Turtle Villa Roatan',
    'Roatan villa rental',
    'West Bay Roatan villa',
    'luxury villa Roatan',
    'family villa Roatan',
    'Ocean One Villa 3',
    'Paradise Beach Roatan villa',
    'Roatan vacation rental with pool',
    'West Bay vacation rental',
    'Roatan pickleball vacation',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Sea Turtle Villa Roatan | Luxury West Bay Villa Rental',
    description: 'Private villa comfort with Paradise Beach resort amenities, rooftop hot tub, Starlink WiFi, private Ocean One pool, and walkable West Bay access in Roatan.',
    url: 'https://www.seaturtlevillaroatan.com',
    siteName: 'Sea Turtle Villa Roatan',
    images: [
      {
        url: '/images/villa/villa-exterior-arrival.jpg',
        width: 1200,
        height: 630,
        alt: 'Sea Turtle Villa exterior arrival in West Bay Roatan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sea Turtle Villa Roatan | Luxury West Bay Villa Rental',
    description: 'A modern Caribbean villa in West Bay, Roatan with resort amenities, rooftop hot tub, private pool, Starlink WiFi, and walkable beach access.',
    images: ['/images/villa/villa-exterior-arrival.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

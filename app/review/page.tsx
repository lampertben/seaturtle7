import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  title: 'Share Your Stay',
  description: 'Share feedback about your Sea Turtle Villa stay in West Bay, Roatan.',
  alternates: {
    canonical: '/review',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ReviewPage() {
  return <ReviewClient />;
}

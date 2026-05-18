'use client';

import { motion } from 'framer-motion';
import { Anchor, BedDouble, CalendarDays, Camera, CheckCircle2, Dumbbell, ExternalLink, Heart, MapPin, MessageCircle, Palmtree, ShieldCheck, Sparkles, Star, Sun, Waves } from 'lucide-react';

const bookingUrl = 'https://oceanoneroatan.com/rentals/seaturtle-villa';
const contactUrl = 'https://oceanoneroatan.com/contact';
const tourUrl = 'https://www.virtuo-reality.com/F14dxmuYqG/44600883p&285.07h&86.42t';
const googleReviewsUrl = 'https://share.google/0hxN4hYRZ0UWF6eCw';
const paradiseUrl = 'https://www.paradisehotels.com/';
const instagramUrl = 'https://www.instagram.com/seaturtlevillaroatan?igsh=MWE5d2hjd3NjYWczaQ==';

const villaPhotos = [
  ['Resort pool courtyard', '/images/villa/pool-courtyard-alt.jpg'],
  ['Sea Turtle Villa exterior', '/images/villa/villa-exterior-wide.jpg'],
  ['Open kitchen', '/images/villa/kitchen-wide.jpg'],
  ['Living & play space', '/images/villa/double-queen-bedroom.jpg'],
  ['King bedroom', '/images/villa/king-bedroom-alt.jpg'],
  ['Double queen bedroom', '/images/villa/king-bedroom.jpg'],
  ['Double bedroom mural room', '/images/villa/double-bed-mural.jpg'],
  ['Rooftop lounge', '/images/villa/rooftop-day.jpg'],
];

const highlights = [
  ['Private villa + resort access', Palmtree],
  ['Rooftop hot tub & hammocks', Sparkles],
  ['Steps from West Bay beach life', Waves],
  ['Padel & pickleball next door', Sun],
  ['Fast WiFi + Starlink', ShieldCheck],
  ['Family-ready sleeping layout', BedDouble],
];

const reviews = [
  { quote: 'Sea Turtle Villa proved to be a wonderful home base. The sea is only steps away, and I’ll definitely be back!', by: 'Nicholas R.', meta: 'Crested Butte, Colorado' },
  { quote: 'The villa was spacious and comfortable. We look forward to returning on our next visit to Roatan!', by: 'Kraft-Meyer Family', meta: 'Michigan, USA' },
  { quote: 'We loved Sea Turtle Villa! What an awesome place — the beach, the sanctuary, the restaurants, the walks, and the days.', by: 'Bob & Patty Scholten', meta: 'March 2025' },
  { quote: 'We loved our time at Ocean One and in Roatan. Thanks so much.', by: 'The Ballantynes', meta: 'Guest book note' },
  { quote: 'Beautiful time shared with family. The apartment is unbeatable, comfortable, and beautiful. Lovely beaches and a beautiful pool.', by: 'Wilson Guillén Family', meta: 'Tegucigalpa, Honduras' },
  { quote: 'We were able to relax. We laughed, danced, and ate — a time was had by us all.', by: 'Guest book note', meta: 'Birthday stay' },
  { quote: 'It was lovely spending time with family here. Highlights: morning walks, snorkeling at the reef, jet skiing, and lazy afternoons by the pool.', by: 'Natalie & Jon', meta: 'Boulder, Colorado' },
  { quote: 'This is the best villa! What a nice villa — located close enough to the beach. I’ll be back!', by: 'Alison & Mike', meta: 'Colorado, USA' },
  { quote: 'Your villa is so beautiful and amazing. We love Roatan and hope to come back again one day.', by: 'Christina & Ryan Bowen', meta: 'June 2025' },
  { quote: 'The location is absolutely perfect. The hammocks were perfect — I think I sat in one every day we were here.', by: 'Jason, Christy & Maddy', meta: 'Pittsburgh, PA' },
  { quote: 'We had the best time here in Roatan and in Turtle Villa — swimming, snorkeling, resting, wildlife, seafood, and the best beach ever.', by: 'The Knypies', meta: 'September 2025' },
  { quote: 'Wonderful family reunion in Roatan. The house is comfortable, has all the amenities a family needs, even for babies. 10 out of 10.', by: 'Castillo Family', meta: 'December 2025' },
];

const reviewImages = ['img_3057.jpg','img_3058.jpg','img_3059.jpg','img_3060.jpg','img_3061.jpg','img_3062.jpg','img_3063.jpg','img_3064.jpg','img_3065.jpg','img_3066.jpg','img_3067.jpg','img_3068.jpg','img_3069.jpg'];

function ButtonLink({ href, children, variant='primary' }: { href: string; children: React.ReactNode; variant?: 'primary'|'secondary'|'light' }) {
  return <a className={`btn ${variant}`} href={href} target="_blank" rel="noreferrer">{children}<ExternalLink size={16}/></a>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span>Sea Turtle</span><small>Villa Roatan</small></a>
        <div className="nav-links">
          <a href="#villa">Villa</a><a href="#tour">3D Tour</a><a href="#amenities">Amenities</a><a href="#reviews">Reviews</a><a href={instagramUrl} target="_blank" rel="noreferrer" className="nav-social"><Camera size={16}/> Instagram</a><a href="#book">Book</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <img src="/images/villa/rooftop-night.jpg" alt="Rooftop hot tub and hammock at Sea Turtle Villa Roatan" />
        <div className="overlay" />
        <motion.div className="hero-copy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <p className="eyebrow light-text">Ocean One Villa 3 · Roatan, Honduras</p>
          <h1>Private villa comfort. Resort-style Caribbean escape.</h1>
          <p>Sea Turtle Villa is a tropical-modern Roatan retreat with a rooftop hot tub, resort amenities at Paradise Beach Resort, padel and pickleball next door, and the space families and friends need to fully settle into island life.</p>
          <div className="hero-actions"><ButtonLink href={bookingUrl}>Book Direct</ButtonLink><ButtonLink href={tourUrl} variant="light">Take the 3D Tour</ButtonLink></div>
        </motion.div>
      </section>

      <section className="intro">
        <div><p className="eyebrow">The Sea Turtle Villa Difference</p><h2>Modern island living, wrapped in the ease of a resort.</h2></div>
        <p>Stay in a spacious private villa while enjoying access to the amenities and energy of Paradise Beach Resort. It is the rare Roatan experience that blends privacy, walkability, family comfort, and resort convenience in one polished setting.</p>
      </section>

      <section className="highlight-grid">
        {highlights.map(([label, Icon]: any) => <div className="highlight" key={label}><Icon size={24}/><span>{label}</span></div>)}
      </section>


      <section className="instagram-preview">
        <div className="instagram-copy">
          <p className="eyebrow">Follow Along</p>
          <h2>Island moments from Sea Turtle Villa.</h2>
          <p>Follow the new Sea Turtle Villa Roatan Instagram for fresh villa photos, Roatan highlights, resort moments, guest memories, and future reels from the beach, rooftop, pool, padel, and pickleball courts.</p>
          <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={18}/> @seaturtlevillaroatan</a>
        </div>
        <div className="instagram-grid">
          <img src="/images/villa/rooftop-night.jpg" alt="Rooftop hot tub and hammock at night" />
          <img src="/images/villa/pool-courtyard-alt.jpg" alt="Ocean One resort pool courtyard" />
          <img src="/images/amenities/courts-10.jpg" alt="Roatan pickleball and padel courts" />
          <img src="/images/villa/kitchen-wide.jpg" alt="Sea Turtle Villa kitchen" />
        </div>
      </section>

      <section id="villa" className="split">
        <div className="image-stack"><img src="/images/villa/pool-courtyard-alt.jpg" alt="Ocean One Villas resort pool courtyard"/><img src="/images/villa/kitchen-wide.jpg" alt="Modern kitchen at Sea Turtle Villa"/></div>
        <div className="copy-card"><SectionHeader eyebrow="The Villa" title="Designed for families, friends, and relaxed luxury." text="A bright open-plan kitchen and living space, multiple sleeping zones, four full bathrooms, rooftop lounge space, and thoughtful family-ready details make Sea Turtle Villa feel easy from the moment you arrive." />
          <ul className="check-list"><li><CheckCircle2/> King bedroom with pack n plays</li><li><CheckCircle2/> Bedroom with two queen beds</li><li><CheckCircle2/> Small bedroom with double bed</li><li><CheckCircle2/> Queen sofa bed + trundle option</li><li><CheckCircle2/> 4 full bathrooms, including 3 en-suite</li><li><CheckCircle2/> Rooftop hot tub, hammocks, grill/patio space</li></ul>
        </div>
      </section>

      <section id="tour" className="tour-section">
        <SectionHeader eyebrow="Interactive Walkthrough" title="Explore the villa before you book." text="The Virtuo 3D tour helps guests see the layout, flow, finishes, and sleeping spaces before committing — a major trust-builder for international travel." />
        <div className="tour-frame"><iframe src={tourUrl} title="Sea Turtle Villa 3D Tour" allowFullScreen /></div>
      </section>

      <section id="amenities" className="amenities">
        <SectionHeader eyebrow="Included Resort Access" title="Private villa, Paradise Beach Resort amenities." text="Sea Turtle Villa is part of Ocean One Villas, connected with Paradise Beach Resort. Guests enjoy the comfort of a private home base with resort amenities close by." />
        <div className="amenity-cards">
          <article><Waves/><h3>Beach & Resort</h3><p>Beach access, resort atmosphere, pools, dining, towel access and Paradise Beach Hotel amenities during your stay.</p><ButtonLink href={paradiseUrl} variant="secondary">Paradise Beach Hotel</ButtonLink></article>
          <article><Dumbbell/><h3>Padel & Pickleball</h3><p>Brand-new Roatan Padel Club and Roatan Pickleball Club courts are next door — a unique active-travel amenity for families and groups.</p></article>
          <article><MapPin/><h3>West Bay Convenience</h3><p>Walkable access to beach days, restaurants, snorkeling, local shops, resort services, and classic Roatan vacation experiences.</p></article>
        </div>
        <div className="courts-grid"><img src="/images/amenities/courts-01.jpg" alt="Roatan padel court"/><img src="/images/amenities/courts-03.jpg" alt="Roatan pickleball and padel courts"/><img src="/images/amenities/courts-05.jpg" alt="Roatan Padel Club lounge"/><img src="/images/amenities/courts-07.jpg" alt="Roatan pickleball courts at Paradise Beach Resort"/><img src="/images/amenities/courts-10.jpg" alt="Pickleball courts near Sea Turtle Villa"/><img src="/images/amenities/courts-12.jpg" alt="Roatan Pickleball Club courts"/></div>
      </section>

      <section className="gallery">
        <SectionHeader eyebrow="Gallery" title="A villa made for slow mornings, rooftop evenings, and island days." />
        <div className="photo-grid">{villaPhotos.map(([alt, src]) => <figure key={src}><img src={src} alt={alt}/><figcaption>{alt}</figcaption></figure>)}</div>
      </section>

      <section id="reviews" className="reviews">
        <SectionHeader eyebrow="Guest Memories" title="Real notes from families who stayed here." text="The guest book tells the story best: easy family time, beach days, snorkeling, hammocks, comfort, and guests already planning to return." />
        <div className="review-grid">{reviews.map(r => <blockquote key={r.quote}><Star/><p>“{r.quote}”</p><footer>{r.by}<span>{r.meta}</span></footer></blockquote>)}</div>
        <div className="guestbook-strip">{reviewImages.map(img => <img key={img} src={`/images/reviews/${img}`} alt="Handwritten guest book review from Sea Turtle Villa" />)}</div>
        <div className="center"><ButtonLink href={googleReviewsUrl} variant="secondary">Read Ocean One Villas Google Reviews</ButtonLink></div>
      </section>

      <section className="experiences">
        <SectionHeader eyebrow="Roatan Experiences" title="Beach, reef, resort, and active island days." />
        <div className="experience-list"><span><Anchor/> Snorkeling & diving</span><span><Sun/> Rooftop hot tub evenings</span><span><Camera/> 3D tour confidence</span><span><Heart/> Family reunions & repeat stays</span><span><MessageCircle/> Direct booking support</span><span><CalendarDays/> Longer-stay friendly</span></div>
      </section>

      <section id="book" className="booking">
        <p className="eyebrow light-text">Book Sea Turtle Villa</p>
        <h2>Your Roatan escape starts here.</h2>
        <p>Book through Ocean One and ask for <strong>Sea Turtle Villa / Ocean One Villa 3</strong>. Direct booking is the best path for personal service and future repeat-guest offers.</p>
        <div className="hero-actions"><ButtonLink href={bookingUrl}>Check Availability</ButtonLink><ButtonLink href={contactUrl} variant="light">Contact Ocean One</ButtonLink><ButtonLink href={instagramUrl} variant="light">Follow on Instagram</ButtonLink></div>
      </section>

      <footer><div><strong>Sea Turtle Villa Roatan</strong><p>Ocean One Villa 3 · Roatan, Honduras</p></div><div><a href={bookingUrl}>Book</a><a href={tourUrl}>3D Tour</a><a href={googleReviewsUrl}>Reviews</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div></footer>
    </main>
  );
}

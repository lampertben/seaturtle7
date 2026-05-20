'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Anchor, BedDouble, CalendarDays, Camera, CheckCircle2, Dumbbell, ExternalLink, Heart, Mail, MapPin, MessageCircle, Palmtree, ShieldCheck, Sparkles, Star, Sun, Waves, Wifi, Car, Snowflake, LockKeyhole, Plug, Utensils, HelpCircle } from 'lucide-react';

const bookingUrl = 'https://oceanoneroatan.com/rentals/seaturtle-villa';
const contactUrl = 'https://oceanoneroatan.com/contact';
const tourUrl = 'https://www.virtuo-reality.com/F14dxmuYqG/44600883p&285.07h&86.42t';
const googleReviewsUrl = 'https://share.google/0hxN4hYRZ0UWF6eCw';
const paradiseUrl = 'https://www.paradisehotels.com/';
const instagramUrl = 'https://www.instagram.com/seaturtlevillaroatan?igsh=MWE5d2hjd3NjYWczaQ==';
const ownerEmail = 'seaturtlevillaroatan@gmail.com';
const formspreeUrl = 'https://formspree.io/f/mredgwoa';

const villaPhotos = [
  ['Resort pool courtyard', '/images/villa/pool-courtyard-alt.jpg'],
  ['Sea Turtle Villa exterior', '/images/villa/villa-exterior-sun.jpg'],
  ['Open kitchen', '/images/villa/kitchen-wide.jpg'],
  ['Living & play space', '/images/villa/living-play-space.jpg'],
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
  ['Starlink WiFi 100+ Mbps', Wifi],
  ['Family-ready sleeping layout', BedDouble],
];

const trustFeatures = [
  ['Multi-zone A/C', Snowflake, 'Cool, comfortable sleeping and living spaces throughout the villa.'],
  ['Starlink WiFi', Wifi, 'Typically 100+ Mbps — ideal for remote work, streaming, and family devices.'],
  ['Gated parking', Car, 'Dedicated parking directly in front of Sea Turtle Villa, inside the gated area.'],
  ['24/7 security', LockKeyhole, 'Roatan has 24/7 Bulldog security, and safety has not been a guest complaint.'],
  ['American outlets', Plug, 'Plenty of American-style outlets throughout the villa.'],
  ['Washer/Dryer', CheckCircle2, 'Convenient in-villa laundry for longer stays and family trips.'],
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

type FAQItem = { category: string; q: string; a: string; image?: string; imageAlt?: string };

const faqs: FAQItem[] = [
  { category: 'Why Guests Choose Sea Turtle Villa', q: 'What makes Sea Turtle Villa different from other Roatan vacation rentals?', a: 'Sea Turtle Villa combines the comfort and privacy of a standalone villa with access to Paradise Beach Resort amenities, creating a rare “private villa + resort access” experience in one of the most walkable areas of West Bay. Guests love the balance of beach access, pools, restaurants, active lifestyle amenities, rooftop relaxation, and family-friendly comfort.' },
  { category: 'Walkable West Bay Lifestyle', q: 'What can guests walk to from the villa?', a: 'One of Sea Turtle Villa’s biggest advantages is its highly walkable location. Guests can walk to West Bay Beach, restaurants, beach bars, snorkeling access points, grocery options, Paradise Beach amenities, Roatan Pickleball Club, Roatan Padel Club, Infinity Bay, and the Roatan Athletic Club gym.' },
  { category: 'Active Island Living', q: 'Is Sea Turtle Villa a good fit for active travelers?', a: 'Yes. Sea Turtle Villa is ideal for guests who want more than just a beach stay. Guests can enjoy nearby pickleball and padel courts, snorkeling, diving, beach walks, gym access at the Roatan Athletic Club at Infinity Bay, rooftop hot tub evenings, and easy walkability throughout West Bay.' },
  { category: 'Travel Planning', q: 'How does airport transportation work?', a: 'Many guests choose to arrange airport transportation with our recommended local driver, Christian. He typically meets guests just outside customs and provides a simple, stress-free ride directly to Sea Turtle Villa, helping make arrival in Roatan feel easy from the beginning of the trip.' },
  { category: 'Villa Comfort', q: 'How many guests can Sea Turtle Villa sleep?', a: 'The villa includes one king bedroom with two pack n plays, one bedroom with two queen beds, one smaller bedroom with a double bed, and a queen-size sofa bed. There are four full bathrooms, including three en-suite bathrooms plus one hallway bathroom.' },
  { category: 'Villa Comfort', q: 'Is there air conditioning?', a: 'Yes. Sea Turtle Villa has multi-zoned A/C so guests can keep the main living areas and bedrooms comfortable throughout their stay.' },
  { category: 'Villa Comfort', q: 'How fast is the WiFi?', a: 'The villa uses Starlink WiFi and typically sees 100+ Mbps speeds, making it a strong fit for streaming, remote work, video calls, and families with multiple devices.' },
  { category: 'Villa Comfort', q: 'Is there a washer and dryer?', a: 'Yes. The villa has a washer and dryer, which is especially helpful for longer stays, beach days, and family travel.' },
  { category: 'Villa Comfort', q: 'Are the outlets American-style?', a: 'Yes. There are lots of American-style power outlets throughout the villa.' },
  { category: 'Location & Access', q: 'Is there dedicated parking?', a: 'Yes. Sea Turtle Villa has dedicated parking directly in front of the villa, located inside the gated Ocean One area.' },
  { category: 'Location & Access', q: 'Is the area safe?', a: 'Roatan has 24/7 Bulldog security, and Sea Turtle Villa is inside a gated area. We have not received a single guest complaint about safety.' },
  { category: 'Location & Access', q: 'Are there grocery stores nearby?', a: 'Yes. There is a grocery option right outside the front door across the street, with additional grocery and convenience options nearby.' },
  { category: 'Resort Amenities', q: 'Do guests get Paradise Beach Resort amenities?', a: 'Yes. Sea Turtle Villa is part of Ocean One Villas, connected with Paradise Beach Hotel, and guests receive Paradise Beach amenities as part of their stay. Amenities include beach access, pools and tropical gardens, restaurants, bars, live music, massage room, rooftop gym, terrace pool, dive center, tours, and activities.' },
  { category: 'Resort Amenities', q: 'Is there private beach access?', a: 'Yes. Guests have roped-off/private beach access. Wear your wristband for access to Paradise Beach amenities and beach areas.' },
  { category: 'Resort Amenities', q: 'What pools can guests use?', a: 'Guests have access to the private Ocean One pool plus the Paradise Beach Resort pool areas.' },
  { category: 'Resort Amenities', q: 'Are padel and pickleball available nearby?', a: 'Yes. Roatan Padel Club and Roatan Pickleball Club are right next door at Paradise Beach Resort, with two new padel courts and two new pickleball courts. Access details, reservations, and fees should be confirmed locally.' },
  { category: 'Travel Planning', q: 'Can airport transportation be arranged?', a: 'Yes. Airport transfer can be arranged with Christian by WhatsApp at +504 9840-1482. The guide notes around $40 one way before tip for four or fewer people, with cash preferred and PayPal also an option.' },
  { category: 'Travel Planning', q: 'Are restaurants nearby?', a: 'Yes. There are many restaurants nearby in the West Bay area, including resort dining and walkable beach restaurants. We plan to add a curated restaurant map and guide as the website evolves.' },
  { category: 'Travel Planning', q: 'Is snorkeling good nearby?', a: 'Yes. West Bay is widely known as one of Roatan’s best snorkeling areas, with reef access from shore and colorful marine life close to the beach. It is one of the major reasons guests love this part of the island.' },
  { category: 'Things To Do', q: 'What is a recommended nearby hike?', a: 'One favorite nearby option is an adventurous ~3-mile walking route that starts at the orange marker — the front door of Sea Turtle Villa — and ends at the blue marker. The steepest part is the first 0.3 miles. It is a great way to enjoy both sides of this lovely island in one adventurous hour of walking.', image: '/images/villa/recommended-hike.png', imageAlt: 'Marked 3-mile recommended hike near Sea Turtle Villa in Roatan' },
  { category: 'Booking', q: 'What is the minimum stay?', a: 'Minimum stay may be as low as one night during low season. During peak season, especially December through April, minimum stays may be higher.' },
  { category: 'Booking', q: 'What is the cancellation policy for direct bookings?', a: 'For direct bookings at Sea Turtle Villa, payments are generally flexible and can be applied toward a future stay if plans change. If you cancel after payment, your reservation amount may be kept as credit toward a future stay within 12 months of the original reservation date. For cancellations made within 14 days of arrival during low or mid season, or within 45 days of arrival during high season, the cost of one night will be charged; any remaining balance can still be used as future-stay credit within 12 months at the applicable seasonal rate. No-shows are charged the full reservation amount regardless of season. For questions or special circumstances, please contact us directly at seaturtlevillaroatan@gmail.com.' },
  { category: 'Booking', q: 'What is the check-in process?', a: 'The check-in process is being finalized for the website. Guests generally check in through the Paradise Beach / Ocean One office and receive wristbands for resort amenities.' },
];

function TurtleMark({ small=false }: { small?: boolean }) {
  return (
    <span className={small ? 'turtle-mark small' : 'turtle-mark'} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path d="M32 10c10 0 18 8 18 18 0 13-10 23-18 23S14 41 14 28c0-10 8-18 18-18Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M32 10v41M17 25h30M20 38h24M23 15c-7-6-13-5-17 1 5 1 9 5 11 10M41 15c7-6 13-5 17 1-5 1-9 5-11 10M14 35c-7 1-11 6-11 12 7 0 12-3 15-9M50 35c7 1 11 6 11 12-7 0-12-3-15-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M28 7c1-4 7-4 8 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function ButtonLink({ href, children, variant='primary' }: { href: string; children: ReactNode; variant?: 'primary'|'secondary'|'light' }) {
  return <a className={`btn ${variant}`} href={href} target="_blank" rel="noreferrer">{children}<ExternalLink size={16}/></a>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function BookingInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'fallback'>('idle');
  const [mailtoHref, setMailtoHref] = useState(`mailto:${ownerEmail}`);

  const buildEmailBody = (data: Record<string, string>) => {
    return [
      'Sea Turtle Villa Direct Booking Inquiry',
      '',
      `Name: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Phone: ${data.phone || ''}`,
      `Arrival: ${data.arrival || ''}`,
      `Departure: ${data.departure || ''}`,
      `Guests: ${data.guests || ''}`,
      `Trip type: ${data.trip_type || ''}`,
      '',
      'Message:',
      data.message || '',
      '',
      'Source: seaturtlevillaroatan.com inquiry form',
    ].join('\n');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    const body = buildEmailBody(data);
    const mailto = `mailto:${ownerEmail}?subject=${encodeURIComponent('Sea Turtle Villa Direct Booking Inquiry')}&body=${encodeURIComponent(body)}`;
    setMailtoHref(mailto);

    try {
      const payload = new FormData();
      payload.append('subject', 'Sea Turtle Villa Direct Booking Inquiry');
      payload.append('Property', 'Sea Turtle Villa / Ocean One Villa 3');
      payload.append('Name', data.name || '');
      payload.append('Email', data.email || '');
      payload.append('Phone / WhatsApp', data.phone || '');
      payload.append('Arrival', data.arrival || '');
      payload.append('Departure', data.departure || '');
      payload.append('Guests', data.guests || '');
      payload.append('Trip type', data.trip_type || '');
      payload.append('Message', data.message || '');
      payload.append('Source', 'seaturtlevillaroatan.com inquiry form');

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (!response.ok) throw new Error('Formspree request failed');
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('fallback');
    }
  };

  return (
    <section id="inquiry" className="inquiry-section">
      <div className="inquiry-copy">
        <p className="eyebrow">Direct Booking Inquiry</p>
        <h2>Questions before you book? Send a direct inquiry.</h2>
        <p>Ask about dates, family setup, transportation, resort access, longer stays, or anything else that would help you feel confident before booking Sea Turtle Villa.</p>
        <div className="inquiry-points">
          <span><Mail size={16}/> Goes to Ben directly</span>
          <span><CalendarDays size={16}/> Best for availability questions</span>
          <span><MessageCircle size={16}/> Helpful before booking with Ocean One</span>
        </div>
      </div>
      <form className="inquiry-card" onSubmit={handleSubmit}>
        <label>Full name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
        <label>Phone / WhatsApp optional<input name="phone" placeholder="Optional" /></label>
        <div className="form-row"><label>Arrival<input type="date" name="arrival" /></label><label>Departure<input type="date" name="departure" /></label></div>
        <div className="form-row"><label>Guests<input type="number" min="1" name="guests" placeholder="4" /></label><label>Trip type<select name="trip_type" defaultValue="Direct booking"><option>Direct booking</option><option>Family vacation</option><option>Longer stay</option><option>Availability question</option><option>Other</option></select></label></div>
        <label>Message<textarea name="message" rows={5} placeholder="Tell us your dates, questions, or what kind of stay you are planning..." /></label>
        <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Inquiry'} <Mail size={16}/></button>
        {status === 'success' && <p className="form-success">Thank you — your inquiry was sent. Ben will follow up by email.</p>}
        {status === 'fallback' && <p className="form-warning">The inquiry form did not complete the send. Please <a href={mailtoHref}>send this inquiry by email</a> or email {ownerEmail} directly.</p>}
        <p className="form-note">This form sends directly to {ownerEmail}. Guests can also email this address directly anytime.</p>
      </form>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand brand-lockup" href="#top"><TurtleMark small/><span>Sea Turtle</span><small>Villa Roatan</small></a>
        <div className="nav-links">
          <a href="#villa">Villa</a><a href="#tour">3D Tour</a><a href="#amenities">Amenities</a><a href="#faq">FAQ</a><a href="#reviews">Reviews</a><a href={instagramUrl} target="_blank" rel="noreferrer" className="nav-social"><Camera size={16}/> Instagram</a><a href="#inquiry">Inquiry</a><a href="#book">Book</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <img className="hero-image" src="/images/villa/villa-exterior-wide.jpg" alt="Sea Turtle Villa exterior with palm trees in Roatan" />
        <div className="overlay" />
        <motion.div className="hero-copy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <p className="eyebrow light-text">Ocean One Villa 3 · Roatan, Honduras</p>
          <h1>Walkable West Bay villa with resort-style Caribbean ease.</h1>
          <p>Private villa comfort, Paradise Beach amenities, rooftop relaxation, and the best of West Bay within easy reach.</p>
          <div className="hero-actions"><ButtonLink href={bookingUrl}>Check Availability</ButtonLink><a className="btn light" href="#inquiry">Send Inquiry</a><ButtonLink href={tourUrl} variant="light">Take the 3D Tour</ButtonLink></div>
        </motion.div>
      </section>

      <section className="gallery elevated-gallery">
        <SectionHeader eyebrow="Visual Tour" title="A first look at island living, Sea Turtle Villa style." text="From rooftop evenings and poolside mornings to bright family spaces and walkable West Bay days, the gallery brings the stay into focus early in the experience." />
        <div className="photo-grid story-photo-grid">{villaPhotos.map(([alt, src], index) => <figure className={index < 2 ? 'featured-photo' : ''} key={src}><img src={src} alt={alt}/><figcaption>{alt}</figcaption></figure>)}</div>
      </section>

      <section className="intro brand-watermark">
        <TurtleMark />
        <div><p className="eyebrow">The Sea Turtle Villa Difference</p><h2>Modern island living, wrapped in the ease of a resort.</h2></div>
        <p>Stay in a spacious private villa while enjoying access to the amenities and energy of Paradise Beach Resort. It is the rare Roatan experience that blends privacy, walkability, family comfort, and resort convenience in one polished setting.</p>
      </section>

      <section className="highlight-grid">
        {highlights.map(([label, Icon]: any) => <div className="highlight" key={label}><Icon size={24}/><span>{label}</span></div>)}
      </section>

      <section className="trust-strip">
        <SectionHeader eyebrow="Travel Confidence" title="The practical comforts guests ask about most." text="Sea Turtle Villa is built for easy international travel: fast WiFi, dedicated parking, gated access, resort amenities, and family-ready convenience." />
        <div className="trust-grid">{trustFeatures.map(([title, Icon, text]: any) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
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
        <div className="image-stack"><img src="/images/villa/living-kitchen.jpg" alt="Wide main-floor living and kitchen space at Sea Turtle Villa"/><img src="/images/villa/living-room.jpg" alt="Comfortable main-floor living room at Sea Turtle Villa"/><img src="/images/villa/kitchen-wide.jpg" alt="Modern kitchen at Sea Turtle Villa"/></div>
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
          <article><Waves/><h3>Beach & Resort</h3><p>Roped-off/private beach access, resort pools, tropical gardens, restaurants, bars, live music, terrace pool, spa/massage room, rooftop gym, dive center, tours, and activities.</p><ButtonLink href={paradiseUrl} variant="secondary">Paradise Beach Hotel</ButtonLink></article>
          <article><Dumbbell/><h3>Padel & Pickleball</h3><p>Brand-new Roatan Padel Club and Roatan Pickleball Club courts are next door — a unique active-travel amenity for families and groups.</p></article>
          <article><MapPin/><h3>West Bay Convenience</h3><p>Walkable access to beach days, restaurants, snorkeling, local shops, groceries, resort services, and classic Roatan vacation experiences.</p></article>
        </div>
        <div className="courts-grid"><img src="/images/amenities/courts-01.jpg" alt="Roatan padel court"/><img src="/images/amenities/courts-03.jpg" alt="Roatan pickleball and padel courts"/><img src="/images/amenities/courts-05.jpg" alt="Roatan Padel Club lounge"/><img src="/images/amenities/courts-07.jpg" alt="Roatan pickleball courts at Paradise Beach Resort"/><img src="/images/amenities/courts-10.jpg" alt="Pickleball courts near Sea Turtle Villa"/><img src="/images/amenities/courts-12.jpg" alt="Roatan Pickleball Club courts"/></div>
      </section>

      <section className="snorkel-section">
        <div>
          <p className="eyebrow">Reef & Island Days</p>
          <h2>West Bay is one of Roatan’s signature snorkeling areas.</h2>
          <p>Guests love being close to the beach, reef, restaurants, pools, and resort energy. West Bay is widely recognized for shore-access snorkeling, calm-water entry points, and colorful reef experiences close to the sand.</p>
          <div className="snorkel-links"><a href="https://www.snorkeling-report.com/destination/snorkeling-honduras/" target="_blank" rel="noreferrer">Snorkeling Report guide <ExternalLink size={14}/></a><a href="https://www.islandhouseroatan.com/things-to-do/roatan-snorkeling/" target="_blank" rel="noreferrer">Roatan snorkeling guide <ExternalLink size={14}/></a></div>
        </div>
        <img src="/images/villa/pool-courtyard-alt.jpg" alt="Pool courtyard near West Bay beach life" />
      </section>

      <section id="faq" className="faq-section">
        <SectionHeader eyebrow="FAQ" title="Helpful answers before your Roatan stay." text="A growing collection of answers for families, first-time Roatan travelers, remote workers, and guests comparing villa and resort-style stays." />
        <div className="faq-grid">{faqs.map(item => <details key={item.q}><summary><span>{item.category}</span>{item.q}</summary><p>{item.a}</p>{item.image ? <img className="faq-image" src={item.image} alt={item.imageAlt || item.q} /> : null}</details>)}</div>
        <p className="faq-note"><HelpCircle size={18}/> Questions about direct booking, dates, or special circumstances? Email seaturtlevillaroatan@gmail.com anytime.</p>
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

      <BookingInquiryForm />

      <section id="book" className="booking">
        <p className="eyebrow light-text">Book Sea Turtle Villa</p>
        <h2>Your Roatan escape starts here.</h2>
        <p>Book through Ocean One and ask for <strong>Sea Turtle Villa / Ocean One Villa 3</strong>. You can also send a direct inquiry to Ben for questions before booking.</p>
        <div className="hero-actions"><ButtonLink href={bookingUrl}>Check Availability</ButtonLink><a className="btn light" href="#inquiry">Send Inquiry</a><ButtonLink href={contactUrl} variant="light">Contact Ocean One</ButtonLink></div>
      </section>

      <footer><div><div className="footer-brand"><TurtleMark small/><strong>Sea Turtle Villa Roatan</strong></div><p>Ocean One Villa 3 · Roatan, Honduras</p></div><div><a href={bookingUrl}>Book</a><a href={tourUrl}>3D Tour</a><a href={googleReviewsUrl}>Reviews</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div></footer>
    </main>
  );
}

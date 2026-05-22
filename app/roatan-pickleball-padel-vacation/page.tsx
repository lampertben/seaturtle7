export const metadata = {
  title: 'Roatan Pickleball & Padel Vacation | Sea Turtle Villa',
  description: 'Stay near brand-new pickleball and padel courts in West Bay, Roatan. Sea Turtle Villa is roughly 300 yards from courts with lights, lessons, pro shop, reservations, and tournament energy.',
  alternates: { canonical: '/roatan-pickleball-padel-vacation' },
};

const courtDetails = [
  'Two brand-new pickleball courts',
  'Two brand-new padel courts',
  'Roughly 300 yards from the villa front door',
  'Lights for night play',
  'Reservations through the Playbypoint app',
  'Pros available for lessons',
  'Pro shop and hangout area',
  'Tournament and social-play energy',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>
      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">Pickleball & Padel in Roatan</p>
          <h1>Play courtside in paradise, then walk home to your villa.</h1>
          <p className="lead">Sea Turtle Villa is uniquely positioned for active travelers: brand-new pickleball and padel courts sit roughly 300 yards from the front door, giving guests a rare West Bay “Stay & Play” island experience.</p>
        </div>
        <img src="/images/amenities/courts-10.jpg" alt="Pickleball courts near Sea Turtle Villa in Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Active Island Living</p>
          <h2>A different kind of Roatan vacation.</h2>
          <p>This is not just a beach-and-pool stay. Guests can start the day with coffee at the villa, walk to a court reservation, cool off at the pool, head to the beach, and finish the evening with rooftop hot tub time.</p>
          <p>The courts bring together the best parts of an active vacation: movement, community, friendly competition, and a reason to enjoy West Bay beyond the sand.</p>
        </div>
        <div className="seo-callout">
          <h3>Court experience</h3>
          <ul>{courtDetails.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/amenities/courts-03.jpg" alt="Roatan padel and pickleball courts" />
        <img src="/images/amenities/courts-05.jpg" alt="Roatan court pro shop and hangout area" />
        <img src="/images/amenities/courts-07.jpg" alt="Pickleball courts with lights near West Bay Roatan" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Easy to fit into the day</h3><p>Because the courts are so close, guests do not need to turn play into a major outing. It can be a morning session, evening match, or quick family activity.</p></article>
        <article><h3>Good for beginners and players</h3><p>With pros available for lessons and a polished club environment, the experience can work for curious first-timers, casual players, and more serious padel or pickleball travelers.</p></article>
        <article><h3>Stay & Play potential</h3><p>Stay tuned for future Stay & Play packages and specials when booking Sea Turtle Villa for Roatan pickleball and padel trips.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/paradise-beach-divers.jpg" alt="Paradise Beach Divers near Sea Turtle Villa for active island days" />
        <div>
          <p className="eyebrow">After You Play</p>
          <h2>Recover the island way.</h2>
          <p>After a match, Sea Turtle Villa makes it easy to reset: private Ocean One pool, Paradise Beach resort amenities, rooftop hammocks, hot tub evenings, Starlink WiFi, walkable West Bay restaurants, nearby spa services, and fitness options at Infinity Bay.</p>
          <p>Follow the local club scene on Instagram for tournaments, lessons, court updates, and Roatan padel and pickleball momentum.</p>
          <a className="btn secondary" href="https://www.instagram.com/padelroatan/" target="_blank" rel="noreferrer">Follow Roatan Padel Club</a>
        </div>
      </section>


      <section className="seo-split">
        <div>
          <p className="eyebrow">Train, Play, Recover</p>
          <h2>Stay active without making it complicated.</h2>
          <p>One of the things we love most about West Bay is how easy it is to stay active. Guests can play pickleball or padel, work out at the nearby Infinity Bay Athletic Club, snorkel directly from West Bay Beach, enjoy a spa treatment, and finish the day relaxing poolside at Sea Turtle Villa.</p>
        </div>
        <img className="seo-side-image" src="/images/local/serenity-day-spa.jpg" alt="Serenity Day Spa near Sea Turtle Villa for recovery and relaxation" />
      </section>

      <section className="seo-cta">
        <h2>Planning a Roatan pickleball or padel trip?</h2>
        <p>Ask us about court proximity, family travel, group stays, and future Stay & Play options at Sea Turtle Villa.</p>
        <a className="btn primary" href="/#inquiry">Ask About Stay & Play</a>
      </section>
    </main>
  );
}

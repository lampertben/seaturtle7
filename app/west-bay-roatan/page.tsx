import GuideExplore from '../GuideExplore';

export const metadata = {
  title: 'West Bay Roatan Guide | Sea Turtle Villa',
  description: 'A practical guide to staying in West Bay, Roatan near Sea Turtle Villa: beach access, dining, markets, West Bay Mall, pharmacy, medical care, spa, fitness, diving, water taxis, and walkability.',
  alternates: { canonical: '/west-bay-roatan' },
};

const acrossStreet = [
  'West Bay Mall',
  'Fresco Market and neighborhood markets',
  'Kristi’s Island Kitchen',
  'MediPlus Pharmacy nearby',
  'Roatan Clinic International Care Unit',
  'Serenity Day Spa',
];

const nearby = [
  'West Bay Beach',
  'Paradise Beach resort area',
  'Paradise Beach Divers',
  'Water taxis to West End',
  'Infinity Bay Athletic Club',
  'Kao Kamasa Spa at Kimpton Grand Roatán',
  'Pickleball and padel courts',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>

      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">West Bay Roatan Guide</p>
          <h1>Everything within reach.</h1>
          <p className="lead">West Bay is the easiest place to stay in Roatan when you want beach, dining, shopping, wellness, water taxis, and everyday convenience without building your whole trip around a rental car.</p>
        </div>
        <img src="/images/villa/west-bay-arrival-guide.jpg" alt="Sea Turtle Villa exterior arrival in West Bay Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">The West Bay Feel</p>
          <h2>Stay and Play in West Bay. Move and Groove in West End.</h2>
          <p>West Bay has the beach, resort energy, walkability, snorkeling, and active lifestyle guests come to Roatan for. West End is close by when you want more music, nightlife, shops, and restaurant energy.</p>
          <p>The best part is how simple the day can feel: beach in the morning, market across the street, water taxi in the afternoon, dinner nearby, and pool or rooftop time back at the villa.</p>
        </div>
        <div className="seo-callout">
          <h3>Why guests love the location</h3>
          <ul>
            <li>About one block from West Bay Beach</li>
            <li>Conveniences directly across the street</li>
            <li>Water taxis, diving, dining, wellness, and fitness nearby</li>
            <li>Most guests do not need a rental car for everyday plans</li>
          </ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/beach-access-path.jpg" alt="Walkable path toward West Bay Beach from the villa area" />
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Crystal clear water at West Bay Beach" />
        <img src="/images/local/west-bay-beach-boats.jpg" alt="Boats and West Bay beach activity near Sea Turtle Villa" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Beach access</h3><p>Walk to one of Roatan’s most famous beaches for swimming, snorkeling, beach bars, resort energy, and sunset strolls.</p></article>
        <article><h3>Water taxis</h3><p>Hop between West Bay and West End without needing to drive, park, or plan the day around transportation.</p></article>
        <article><h3>Paradise Beach area</h3><p>The Paradise Beach entrance is an easy local landmark and helps guests quickly understand the walkable resort corridor.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/fresco-market.jpg" alt="Fresco Market near Sea Turtle Villa for quick groceries and essentials" />
        <div>
          <p className="eyebrow">Across the Street Convenience</p>
          <h2>Markets, essentials, dining, pharmacy, medical care, and spa services nearby.</h2>
          <p>Sea Turtle Villa sits across from a practical West Bay convenience hub. Guests can walk over for snacks, beverages, fresh items, toiletries, pharmacy needs, quick meals, and everyday vacation essentials.</p>
          <div className="guide-link-row">
            <a className="btn secondary" href="https://www.facebook.com/frescomarketroatan/" target="_blank" rel="noreferrer">Fresco Market</a>
            <a className="btn secondary" href="https://www.facebook.com/west.baymall/" target="_blank" rel="noreferrer">West Bay Mall</a>
          </div>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/kristis-island-kitchen.jpg" alt="Kristi's Island Kitchen near Sea Turtle Villa" />
        <img src="/images/local/serenity-day-spa.jpg" alt="Serenity Day Spa near Sea Turtle Villa" />
        <img src="/images/local/paradise-beach-divers.jpg" alt="Paradise Beach Divers near West Bay Beach" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Dining nearby</h3><p>Kristi’s Island Kitchen is one of the easy nearby options for a casual meal without making the night complicated.</p></article>
        <article><h3>Spa nearby</h3><p>Serenity Day Spa is close by for massages, body treatments, manicures, pedicures, and relaxed vacation recovery.</p></article>
        <article><h3>Diving & snorkeling</h3><p>Paradise Beach Divers is nearby for underwater adventures, certifications, and dive planning in one of the Caribbean’s best reef destinations.</p></article>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Groceries & Arrival</p>
          <h2>Stop at Eldon’s first, then use West Bay for quick needs.</h2>
          <p>For a full grocery run, we recommend stopping at Eldon’s Supermarket with Christian on the drive from the airport. It is the easiest way to stock the villa with groceries, drinks, breakfast items, and family supplies before you arrive.</p>
          <p>During the stay, West Bay Mall, Fresco Market, and nearby markets are ideal for quick items rather than full weekly shopping.</p>
          <a className="btn secondary" href="https://www.facebook.com/eldonssupermarkets/" target="_blank" rel="noreferrer">View Eldon’s Supermarket</a>
        </div>
        <div className="seo-callout">
          <h3>Across the street or nearby</h3>
          <ul>{acrossStreet.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/paradise-beach-hotel-entrance.jpg" alt="Paradise Beach hotel entrance near Sea Turtle Villa" />
        <div>
          <p className="eyebrow">Fitness, Wellness & Active Days</p>
          <h2>Beach, gym, spa, diving, pickleball, and padel all fit into the same trip.</h2>
          <p>Guests who like to stay active can work out at Infinity Bay Athletic Club, play nearby pickleball or padel, snorkel from West Bay Beach, schedule a spa treatment, or book a dive outing nearby.</p>
          <div className="guide-link-row">
            <a className="btn secondary" href="https://www.infinitybay.com/explore/roatan-athletic-club" target="_blank" rel="noreferrer">Infinity Bay Athletic Club</a>
            <a className="btn secondary" href="https://wblodgeroatan.com/serenity-day-spa/" target="_blank" rel="noreferrer">Serenity Day Spa</a>
            <a className="btn secondary" href="https://www.grandroatanresortandspa.com/us/en/kao-kamasa-spa/" target="_blank" rel="noreferrer">Kao Kamasa Spa</a>
          </div>
        </div>
      </section>

      <section className="seo-grid-3">
        {nearby.map((item) => <article key={item}><h3>{item}</h3><p>Another reason West Bay feels simple, walkable, and easy to enjoy from Sea Turtle Villa.</p></article>)}
      </section>

      <GuideExplore current="/west-bay-roatan" heading="Ready to plan the rest of the trip?" text="Pair the West Bay guide with family travel, flights, points-and-miles ideas, and the villa overview to see how the whole stay comes together." />
    </main>
  );
}

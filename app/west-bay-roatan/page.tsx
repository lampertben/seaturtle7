export const metadata = {
  title: 'West Bay Roatan Guide | Sea Turtle Villa',
  description: 'A guest-friendly guide to staying in West Bay, Roatan near Sea Turtle Villa: walkability, beach access, groceries, water taxis, snorkeling, restaurants, and the West Bay lifestyle.',
  alternates: { canonical: '/west-bay-roatan' },
};

const highlights = [
  'One block from West Bay Beach',
  'Grocery convenience across the street',
  'Walkable restaurants, beach bars, snorkeling, and resort amenities',
  'Water taxi access to West End',
  'Padel, pickleball, fitness, and hiking close by',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>
      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">West Bay Roatan Guide</p>
          <h1>Stay and Play in West Bay. Move and Groove in West End.</h1>
          <p className="lead">West Bay has the beach, resort energy, walkability, active lifestyle, and easy daily rhythm guests come to Roatan for — with Sea Turtle Villa tucked close enough to everything while still feeling private and comfortable.</p>
        </div>
        <img src="/images/villa/night-pool-aerial.jpg" alt="Illuminated pool at Sea Turtle Villa in West Bay Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">The West Bay Feel</p>
          <h2>A hidden-gem Caribbean lifestyle without the heavy glitz.</h2>
          <p>West Bay feels polished, tropical, and special — but still relaxed. It has the beach and resort lifestyle people want from Roatan without feeling like a crowded U.S. coastal town or an overbuilt Caribbean destination.</p>
          <p>For many guests, the surprise is how easy the days feel. You can walk to the beach, grab groceries across the street, play by the pool, head to dinner, take a water taxi, or settle into a rooftop hot tub evening without needing a car-centered vacation.</p>
        </div>
        <div className="seo-callout">
          <h3>What guests love most</h3>
          <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band">
        <img src="/images/villa/night-pool-close.jpg" alt="Illuminated pool courtyard in West Bay Roatan" />
        <img src="/images/villa/night-rooftop-hammocks.jpg" alt="Rooftop hammocks and hot tub after sunset" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Beach days are easy</h3><p>Being about one block from the beach gives families and groups the best of both worlds: close enough for easy beach adventures, but set back enough to feel calm at home.</p></article>
        <article><h3>Daily logistics are simple</h3><p>A new grocery store sits literally across the street, making it easy to pick up fresh food, snacks, drinks, and forgotten essentials throughout the stay.</p></article>
        <article><h3>No car required for most guests</h3><p>Many guests can enjoy West Bay by foot and use water taxis or local drivers when they want to explore beyond the immediate area.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/villa/recommended-hike.png" alt="Mapped nearby hiking route from Sea Turtle Villa" />
        <div>
          <p className="eyebrow">Local Rhythm</p>
          <h2>Beach, pool, hike, water taxi, repeat.</h2>
          <p>West Bay is where guests stay for the best beach, resort access, pool time, fitness, pickleball, padel, and easy days. West End is nearby when you want more music, restaurants, shops, and nightlife energy.</p>
          <p className="quote-line">“Stay and Play in West Bay. Move and Groove in West End.”</p>
        </div>
      </section>

      <section className="seo-cta">
        <h2>Want help planning your West Bay stay?</h2>
        <p>Sea Turtle Villa is built around a walkable, low-friction Roatan experience. Reach out with questions about beaches, groceries, airport transfer, water taxis, or the best way to structure your trip.</p>
        <a className="btn primary" href="/#inquiry">Send an Inquiry</a>
      </section>
    </main>
  );
}

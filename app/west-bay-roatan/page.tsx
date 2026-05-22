export const metadata = {
  title: 'West Bay Roatan Guide | Sea Turtle Villa',
  description: 'A guest-friendly guide to staying in West Bay, Roatan near Sea Turtle Villa: walkability, beach access, markets, West Bay Mall, medical care, water taxis, snorkeling, restaurants, and the West Bay lifestyle.',
  alternates: { canonical: '/west-bay-roatan' },
};

const highlights = [
  'One block from West Bay Beach',
  'West Bay Mall, Fresco Market, pharmacy services, dining, and everyday conveniences across the street',
  'Walkable restaurants, beach bars, snorkeling, and resort amenities',
  'Water taxi access to West End',
  'Padel, pickleball, fitness, spa services, diving, and hiking close by',
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
        <img src="/images/villa/west-bay-arrival-guide.jpg" alt="Sea Turtle Villa exterior arrival in West Bay Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">The West Bay Feel</p>
          <h2>A hidden-gem Caribbean lifestyle without the heavy glitz.</h2>
          <p>West Bay feels polished, tropical, and special — but still relaxed. It has the beach and resort lifestyle people want from Roatan without feeling like a crowded U.S. coastal town or an overbuilt Caribbean destination.</p>
          <p>For many guests, the surprise is how easy the days feel. You can walk to the beach, pick up everyday essentials across the street at West Bay Mall and nearby markets, play by the pool, head to dinner, take a water taxi, or settle into a rooftop hot tub evening without needing a car-centered vacation.</p>
        </div>
        <div className="seo-callout">
          <h3>What guests love most</h3>
          <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/beach-access-path.jpg" alt="Walkable path toward West Bay Beach from the villa area" />
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Crystal-clear water at West Bay Beach" />
        <img src="/images/local/west-bay-palm-loungers.jpg" alt="Palm-lined West Bay Beach with lounge chairs" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Beach days are easy</h3><p>Being about one block from the beach gives families and groups the best of both worlds: close enough for easy beach adventures, but set back enough to feel calm at home.</p></article>
        <article><h3>Daily logistics are simple</h3><p>West Bay Mall, Fresco Market, multiple grocery-style markets, pharmacy services, dining options, and everyday conveniences are directly across the street or nearby for snacks, drinks, fresh foods, toiletries, breakfast items, and forgotten essentials.</p></article>
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

      <section className="seo-split">
        <div>
          <p className="eyebrow">Everyday Convenience</p>
          <h2>Across the street for quick needs, Eldon’s for the full grocery run.</h2>
          <p>For a large grocery shop, we recommend stopping at Eldon’s Supermarket with Christian on the way from the airport. During the stay, West Bay Mall, Fresco Market, and nearby grocery-style markets make it easy to grab drinks, snacks, fresh items, toiletries, and vacation essentials without turning every errand into a car trip.</p>
          <p>West Bay Mall also includes Roatan Clinic International Care Unit, and MediPlus Pharmacy is nearby in West Bay, adding meaningful peace of mind for families, grandparents, and active travelers.</p>
        </div>
        <img className="seo-side-image" src="/images/local/fresco-market.jpg" alt="Fresco Market near Sea Turtle Villa" />
      </section>

      
      <section className="seo-image-band three">
        <img src="/images/local/kristis-island-kitchen.jpg" alt="Kristi’s Island Kitchen near West Bay Mall" />
        <img src="/images/local/serenity-day-spa.jpg" alt="Serenity Day Spa in West Bay" />
        <img src="/images/local/paradise-beach-divers.jpg" alt="Paradise Beach Divers entrance in West Bay" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Walkable dining</h3><p>Local favorites like Kristi’s Island Kitchen sit right across the street near West Bay Mall, while beach restaurants and resort dining are just a short walk away.</p></article>
        <article><h3>Spa and wellness nearby</h3><p>Serenity Day Spa is close by, and Kao Kamasa Spa at the Kimpton Grand Roatán Resort & Spa is less than half a mile away for massage, facials, and wellness treatments.</p></article>
        <article><h3>Diving and beach adventures</h3><p>Paradise Beach Divers, snorkeling access, water taxis, and the resort beach area are all part of the walkable West Bay experience.</p></article>
      </section>

      <section className="seo-cta">
        <h2>Want help planning your West Bay stay?</h2>
        <p>Sea Turtle Villa is built around a walkable, low-friction Roatan experience. Reach out with questions about beaches, markets, West Bay Mall, airport transfer, the Eldon’s grocery stop, water taxis, or the best way to structure your trip.</p>
        <a className="btn primary" href="/#inquiry">Send an Inquiry</a>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Roatan Family Vacation Villa | Sea Turtle Villa',
  description: 'A deeply family-friendly Roatan villa in West Bay with pack-n-plays, white noise machines, railings, carpeted stairs, main-floor bedroom, toddler-friendly pool, grocery convenience, and walkable beach access.',
  alternates: { canonical: '/roatan-family-vacation' },
};

const familyDetails = [
  'Two pack-n-plays',
  'White noise machines',
  'Railings on stairwells',
  'Carpet on the stairs',
  'Main-floor living with bedroom and ensuite bathroom',
  'Pool with a shallow toddler-friendly section',
  'Stroller-friendly pool area',
  'Grocery store directly across the street',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>
      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">Family-Friendly Roatan Villa</p>
          <h1>Designed by parents who actually travel with kids.</h1>
          <p className="lead">Sea Turtle Villa is truly family-friendly for all ages — not just “kid-friendly” in name. The villa was set up around the little details that make international family travel feel easier, calmer, and more comfortable.</p>
        </div>
        <img src="/images/villa/living-play-space.jpg" alt="Family living and play space at Sea Turtle Villa" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Thoughtful Details</p>
          <h2>The things parents notice immediately.</h2>
          <p>Families repeatedly compliment how well the villa is set up for kids of all ages. The goal is simple: make the home feel comfortable for adults while removing the little friction points that can make traveling with babies, toddlers, and kids harder than it needs to be.</p>
          <p>From sleeping setup to stair safety to pool time, the villa is designed around real family routines — because we have kids and we get it.</p>
        </div>
        <div className="seo-callout">
          <h3>Family setup includes</h3>
          <ul>{familyDetails.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band">
        <img src="/images/villa/pool-courtyard-alt.jpg" alt="Ocean One pool with shallow section for kids" />
        <img src="/images/villa/living-kitchen.jpg" alt="Open kitchen and living space for families" />
      </section>

      <section className="seo-grid-3">
        <article><h3>The pool is the favorite</h3><p>Kids usually love the pool most. There is a fantastic shallow section around one foot deep for toddlers to play, while the main pool area is approximately four feet deep.</p></article>
        <article><h3>The beach feels like an adventure</h3><p>Being about one block from the beach is just the right distance for younger kids: close and easy, but still exciting enough to feel like a little island adventure.</p></article>
        <article><h3>Rainy days still work</h3><p>When tropical rain rolls through, kids love playing in the rooftop hot tub while parents still get that relaxed vacation feeling.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/villa/main-floor-living-wide.jpg" alt="Main floor living area at Sea Turtle Villa" />
        <div>
          <p className="eyebrow">Easy Parent Logistics</p>
          <h2>Everything you need is close.</h2>
          <p>A new grocery store is literally across the street, which means families can grab fresh food, snacks, diapers, drinks, breakfast items, and forgotten essentials without turning every errand into a car trip.</p>
          <p>The pool area is stroller-friendly, and families often walk laps around the pool with little ones in strollers. Add Starlink internet, laundry, multiple sleeping zones, and main-floor living, and the villa becomes a much easier base for families than a typical beach rental.</p>
        </div>
      </section>

      <section className="seo-cta">
        <h2>Planning a Roatan family trip?</h2>
        <p>Ask us about sleeping setup, pack-n-plays, beach access, pool details, groceries, airport transfer, and what families tend to love most about staying at Sea Turtle Villa.</p>
        <a className="btn primary" href="/#inquiry">Ask a Family Travel Question</a>
      </section>
    </main>
  );
}

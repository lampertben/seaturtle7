export const metadata = {
  title: 'Roatan Family Vacation Villa | Sea Turtle Villa',
  description: 'A deeply family-friendly Roatan villa in West Bay with pack-n-plays, white noise machines, railings, carpeted stairs, main-floor bedroom, toddler-friendly pool, walkable conveniences, and easy beach access.',
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
  'West Bay Mall, Fresco Market, markets, pharmacy services, and medical care nearby',
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
        <img src="/images/villa/family-living-guide.jpg" alt="Family living and gathering space at Sea Turtle Villa" />
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

      <section className="seo-image-band three">
        <img src="/images/local/baby-gear-packnplay-bathtub.jpg" alt="Pack-n-play and baby bathtub available for families" />
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Calm clear water at West Bay Beach for family beach days" />
        <img src="/images/local/i-love-roatan-chair.jpg" alt="I Love Roatan family photo chair near Paradise Beach" />
      </section>

      <section className="seo-grid-3">
        <article><h3>The pool is the favorite</h3><p>Kids usually love the pool most. There is a fantastic shallow section around one foot deep for toddlers to play, while the main pool area is approximately four feet deep.</p></article>
        <article><h3>The beach feels like an adventure</h3><p>Being about one block from the beach is just the right distance for younger kids: close and easy, but still exciting enough to feel like a little island adventure.</p></article>
        <article><h3>Rainy days still work</h3><p>When tropical rain rolls through, kids love playing in the rooftop hot tub while parents still get that relaxed vacation feeling.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/fresco-market.jpg" alt="Fresco Market near Sea Turtle Villa for family essentials" />
        <div>
          <p className="eyebrow">Easy Parent Logistics</p>
          <h2>Everything you need is close.</h2>
          <p>West Bay Mall, Fresco Market, multiple grocery-style markets, MediPlus Pharmacy, and Roatan Clinic International Care Unit are directly across the street or close by, which means families can grab snacks, drinks, breakfast items, toiletries, pharmacy needs, and forgotten essentials without turning every errand into a car trip.</p><p>For a full grocery run, we recommend stopping at Eldon’s Supermarket with Christian on the drive from the airport. It is the same simple arrival routine our family uses every time we visit.</p>
          <p>The pool area is stroller-friendly, and families often walk laps around the pool with little ones in strollers. Add Starlink internet, laundry, multiple sleeping zones, and main-floor living, and the villa becomes a much easier base for families than a typical beach rental.</p>
        </div>
      </section>


      <section className="seo-split">
        <div>
          <p className="eyebrow">Evenings with Kids</p>
          <h2>Family days do not have to end when the sun goes down.</h2>
          <p>After beach walks, pool days, and West Bay adventures, families can settle into a calmer evening rhythm: toddlers enjoying the shallow pool area, parents relaxing nearby, rainy-night hot tub time, and easy dinners close to home.</p>
        </div>
        <img className="seo-side-image" src="/images/villa/night-pool-aerial.jpg" alt="Sea Turtle Villa illuminated pool at night for family evenings" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Peace of Mind for Parents</p>
          <h2>Convenience matters when traveling internationally with kids.</h2>
          <p>Parents appreciate having West Bay Mall, Fresco Market, and several everyday markets right across the street for quick items during the stay. West Bay Mall also includes Roatan Clinic International Care Unit, which gives families added peace of mind if a medical need ever comes up.</p>
        </div>
        <img className="seo-side-image" src="/images/villa/west-bay-arrival-guide.jpg" alt="Sea Turtle Villa arrival close to West Bay Mall conveniences" />
      </section>

      
      <section className="seo-split">
        <div>
          <p className="eyebrow">Peace of Mind for Parents</p>
          <h2>Helpful services are close when families need them.</h2>
          <p>Traveling internationally with children becomes easier when essential services are nearby. Markets, pharmacy services, medical care, casual dining, and family photo stops are all close to Sea Turtle Villa, helping parents spend less time worrying about logistics and more time enjoying West Bay.</p>
          <p>Parents can also enjoy some well-deserved relaxation nearby, with spa services within walking distance and the Kimpton Grand Roatán spa less than half a mile away.</p>
        </div>
        <img className="seo-side-image" src="/images/local/serenity-day-spa.jpg" alt="Serenity Day Spa near Sea Turtle Villa" />
      </section>

      <section className="seo-cta">
        <h2>Planning a Roatan family trip?</h2>
        <p>Ask us about sleeping setup, pack-n-plays, beach access, pool details, walkable conveniences, the Eldon’s arrival grocery stop, airport transfer, and what families tend to love most about staying at Sea Turtle Villa.</p>
        <a className="btn primary" href="/#inquiry">Ask a Family Travel Question</a>
      </section>
    </main>
  );
}

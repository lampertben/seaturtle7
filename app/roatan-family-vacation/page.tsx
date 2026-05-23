import GuideExplore from '../GuideExplore';

export const metadata = {
  title: 'Roatan Family Vacation Villa | Sea Turtle Villa',
  description: 'A family-friendly Roatan villa in West Bay with pack-n-plays, baby bathtub, white noise machines, main-floor bedroom, shallow pool area, nearby pharmacy, medical care, and easy beach access.',
  alternates: { canonical: '/roatan-family-vacation' },
};

const familyDetails = [
  'Two pack-n-plays',
  'Baby bathtub',
  'White noise machines',
  'Railings on stairwells',
  'Carpeted stairs',
  'Main-floor bedroom with ensuite bathroom',
  'Shallow toddler-friendly pool section',
  'Pharmacy and medical care nearby',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>

      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">Family-Friendly Roatan Villa</p>
          <h1>Designed by parents who actually travel with kids.</h1>
          <p className="lead">Sea Turtle Villa is family-friendly in practical ways: safer stairs, baby gear, flexible bedrooms, easy meals, nearby essentials, and a pool setup kids actually love.</p>
        </div>
        <img src="/images/local/family-living-room-guide.jpg" alt="Open living room and kitchen for family gatherings at Sea Turtle Villa" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">The Details Parents Notice</p>
          <h2>Less packing, less friction, more vacation.</h2>
          <p>We set the villa up around the little things that make traveling with babies, toddlers, kids, and grandparents easier. It is comfortable for adults, but genuinely practical for families.</p>
          <p>The goal is simple: help families feel settled quickly so the trip can be about beach days, pool time, easy meals, and relaxed evenings together.</p>
        </div>
        <div className="seo-callout">
          <h3>Family setup includes</h3>
          <ul>{familyDetails.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/baby-gear-packnplay-bathtub.jpg" alt="Pack-n-play and baby bathtub available for families" />
        <img src="/images/villa/living-play-space.jpg" alt="Family-friendly living space at Sea Turtle Villa" />
        <img src="/images/local/i-love-roatan-chair.jpg" alt="I Love Roatan family photo chair near Paradise Beach" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Pool time is easy</h3><p>The shallow section is great for toddlers, while the main pool area stays manageable for family play and relaxed afternoons.</p></article>
        <article><h3>The beach feels close</h3><p>About one block from the beach is close enough for easy trips, but still feels like a fun little adventure for younger kids.</p></article>
        <article><h3>Rainy days still work</h3><p>The rooftop hot tub, covered spaces, games, kitchen, and living areas help families enjoy slower tropical moments too.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/kitchen-appliance-lineup.jpg" alt="Kitchen appliances available for family meals at Sea Turtle Villa" />
        <div>
          <p className="eyebrow">Meals & Daily Rhythm</p>
          <h2>A kitchen that works for real family travel.</h2>
          <p>The kitchen is equipped for quick breakfasts, snacks, smoothies, coffee, family dinners, and longer stays. Parents can keep routines simple without eating every meal out.</p>
          <p>For full groceries, stop at Eldon’s with Christian on the way from the airport. During your stay, West Bay Mall, Fresco Market, and nearby markets help with quick needs.</p>
        </div>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Peace of Mind Nearby</p>
          <h2>Essentials, pharmacy, and medical care are close.</h2>
          <p>Traveling internationally with children feels easier when basic support is nearby. West Bay Mall and nearby markets are convenient for snacks, drinks, toiletries, and forgotten essentials.</p>
          <p>MediPlus Pharmacy and Roatan Clinic International Care Unit are also nearby in West Bay, which families appreciate even if they never need them.</p>
          <div className="guide-link-row">
            <a className="btn secondary" href="https://www.facebook.com/mediplusroatan/" target="_blank" rel="noreferrer">MediPlus Pharmacy</a>
            <a className="btn secondary" href="https://roatanclinic.com/" target="_blank" rel="noreferrer">Roatan Clinic</a>
          </div>
        </div>
        <img className="seo-side-image" src="/images/local/fresco-market.jpg" alt="Fresco Market near Sea Turtle Villa for family essentials" />
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Calm clear water at West Bay Beach for family beach days" />
        <div>
          <p className="eyebrow">Easy Family Days</p>
          <h2>Beach, pool, snacks, naps, repeat.</h2>
          <p>Families often love the simple rhythm here: walk to the beach, come back for pool time, make lunch at the villa, pick up a few essentials nearby, and settle into a relaxed evening.</p>
          <p>That ease is one of the main reasons Sea Turtle Villa works so well for families of all ages.</p>
        </div>
      </section>

      <GuideExplore current="/roatan-family-vacation" heading="Planning Roatan with kids?" text="Explore the villa setup, arrival logistics, West Bay walkability, and active island options so the trip feels easy before you arrive." />
    </main>
  );
}

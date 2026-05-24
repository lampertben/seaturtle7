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
  'Multiple Smoke/CO detectors',
  'Main-floor bedroom with ensuite bathroom',
  'Shallow toddler-friendly pool section',
  'Pharmacy and medical care nearby',
];

const comfortDetails = [
  'Hair dryer, shampoo, conditioner, and body wash',
  'Cleaning products, hangers, extra pillows, and room-darkening blinds',
  'Safe for passports and valuables, plus plenty of clothes storage',
  'Roku TVs and reliable Starlink internet',
  'Dishwasher, rice cooker, coffee maker, juicer, and family kitchen essentials',
  'Bedrooms 1 and 2 connect to a large outdoor sundeck overlooking the pool',
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
          <p>The goal is simple: help families feel settled quickly so the trip can be about beach days, pool time, easy meals, and relaxed evenings together.</p><p>Sea Turtle Villa also includes a baby bathtub and multiple smoke and carbon monoxide detectors, which are not always standard in the area.</p>
        </div>
        <div className="seo-callout">
          <h3>Family setup includes</h3>
          <ul>{familyDetails.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img className="object-contain-photo" src="/images/local/baby-gear-packnplay-bathtub.jpg" alt="Pack-n-play and baby bathtub available for families" />
        <img src="/images/villa/living-play-space.jpg" alt="Family-friendly living space at Sea Turtle Villa" />
        <img src="/images/local/i-love-roatan-chair.jpg" alt="I Love Roatan family photo chair near Paradise Beach" />
      </section>

      <section className="seo-grid-3">
        <article><h3>Pool time is easy</h3><p>The shallow section is great for toddlers, while the main pool area stays manageable for family play and relaxed afternoons.</p></article>
        <article><h3>Towels are practical</h3><p>We provide towels throughout the villa, and Paradise Beach Resort provides beach towels. We also installed towel hooks on the patio and in strategic areas inside the villa so towels are easier to hang and dry. Nobody likes wet towels.</p></article>
        <article><h3>Rainy days still work</h3><p>The rooftop hot tub, covered spaces, games, Roku TVs, kitchen, and living areas help families enjoy slower tropical moments too.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/kitchen-appliance-lineup.jpg" alt="Kitchen appliances available for family meals at Sea Turtle Villa" />
        <div>
          <p className="eyebrow">Meals & Daily Rhythm</p>
          <h2>A kitchen that works for real family travel.</h2>
          <p>The kitchen is equipped for quick breakfasts, snacks, smoothies, coffee, family dinners, and longer stays. Parents can keep routines simple without eating every meal out.</p><p>Helpful extras include a dishwasher — not common in many villas in the complex — plus a rice cooker, Ninja coffee maker, Breville juicer, cookware, and everyday meal-prep essentials.</p>
          <p>For full groceries, stop at Eldon’s with Christian on the way from the airport. During your stay, West Bay Mall, Fresco Market, and nearby markets help with quick needs.</p>
        </div>
      </section>


      <section className="seo-split">
        <div>
          <p className="eyebrow">Comforts of Home</p>
          <h2>The villa is stocked for real life, not just pretty photos.</h2>
          <p>Families and longer-stay guests appreciate the small conveniences: hair dryer, cleaning products, shampoo, conditioner, body wash, hangers, extra pillows, room-darkening blinds, a safe for passports and valuables, plenty of clothes storage, Roku TVs, and reliable Starlink internet.</p>
          <p>Bedrooms 1 and 2 connect to a large outdoor sundeck overlooking the pool, giving guests another place for morning coffee, reading, or quiet time while still feeling connected to the villa.</p>
        </div>
        <div className="seo-callout">
          <h3>Helpful villa amenities</h3>
          <ul>{comfortDetails.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/paradise-beach-resort-pool.jpg" alt="Paradise Beach Resort pool available to Sea Turtle Villa guests" />
        <div>
          <p className="eyebrow">Villa Privacy + Resort Access</p>
          <h2>More than one pool, plus resort support.</h2>
          <p>In addition to the private Ocean One pool at Sea Turtle Villa, guests have access to Paradise Beach Resort amenities, including resort pool areas and beach towels. Families often appreciate having multiple places to swim, relax, and reset during the day.</p>
        </div>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Extended Stays</p>
          <h2>Planning to stay a little longer?</h2>
          <p>Sea Turtle Villa welcomes long-term stays of 28 nights or longer. Reliable Starlink internet, Roku TVs, laundry, a full kitchen, dishwasher, storage, and comfortable indoor-outdoor spaces make extended stays practical and comfortable. Inquire with us for availability and longer-stay pricing.</p>
        </div>
        <img className="seo-side-image" src="/images/local/starlink-speed-test-100mbps.png" alt="Starlink speed test showing 100 Mbps at Sea Turtle Villa" />
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

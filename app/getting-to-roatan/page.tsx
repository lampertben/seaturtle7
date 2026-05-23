import GuideExplore from '../GuideExplore';

export const metadata = {
  title: 'How to Get to Roatan | Flights, Airport Transfers & Arrival Tips',
  description: 'A practical Sea Turtle Villa guide to getting to Roatan: direct flights from the U.S. and Canada, RTB airport, airport transfers, grocery stops, rental cars, packing tips, and arrival FAQs.',
  alternates: { canonical: '/getting-to-roatan' },
};

const flightGateways = [
  'Miami (MIA) — one of the most consistent U.S. gateways',
  'Houston (IAH) — a strong hub for United connections',
  'Dallas/Fort Worth (DFW) — useful for central and western U.S. travelers',
  'Atlanta (ATL) — a helpful Delta gateway for the Southeast and East Coast',
  'Denver (DEN) — especially helpful for Colorado and Mountain West travelers when operating seasonally',
  'Minneapolis/St. Paul (MSP) — seasonal access for Midwest travelers',
  'Toronto (YYZ) and Montreal (YUL) — seasonal Canadian routes',
];

const arrivalSteps = [
  'Land at Juan Manuel Gálvez International Airport (RTB)',
  'Meet Christian for airport transportation',
  'Stop at Eldon’s Supermarket for a full grocery run',
  'Arrive at Sea Turtle Villa stocked and ready',
  'Walk to the beach, pool, dinner, or rooftop without a complicated first day',
];

const walkable = [
  'West Bay Beach',
  'Paradise Beach resort area',
  'Restaurants and casual dining',
  'West Bay Mall and nearby markets',
  'MediPlus Pharmacy and medical care nearby',
  'Pickleball and padel courts',
  'Spa, fitness, diving, snorkeling, and water taxis',
];

const faqs = [
  ['Which airport should we fly into?', 'Search for Roatan using airport code RTB. The airport is Juan Manuel Gálvez International Airport on the island of Roatan.'],
  ['How far is Sea Turtle Villa from the airport?', 'The drive is typically about 20 minutes, depending on traffic, stops, and arrival timing.'],
  ['Should we rent a car?', 'Most guests do not need a rental car for a classic West Bay stay. Airport transportation, a grocery stop, and the walkable location make the trip simple.'],
  ['Where should we buy groceries?', 'For a full grocery run, stop at Eldon’s with Christian on the airport transfer. During the stay, use West Bay Mall, Fresco Market, and nearby markets for quick needs.'],
  ['Can we drink the tap water?', 'We do not recommend drinking tap water in Roatan. Sea Turtle Villa provides purified drinking water, and refillable jugs can be delivered when needed.'],
  ['Do flight schedules change?', 'Yes. Routes and frequencies can change by season, airline, and year. Always confirm current schedules directly with the airline before booking.'],
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>

      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">Getting to Roatan</p>
          <h1>Flights, airport transfers, and an easy first day in West Bay.</h1>
          <p className="lead">Roatan feels like a hidden Caribbean escape, but getting here is often easier than first-time visitors expect. Many guests can reach the island with one direct flight or one easy connection through a major hub.</p>
        </div>
        <img src="/images/villa/west-bay-arrival-guide.jpg" alt="Arriving at Sea Turtle Villa in West Bay Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Direct & One-Stop Access</p>
          <h2>Use airport code RTB when searching flights.</h2>
          <p>Roatan’s international airport is Juan Manuel Gálvez International Airport. Current and seasonal routes commonly connect through major U.S. and Canadian gateways, making the island much more accessible than many travelers realize.</p>
          <p>Schedules change by airline and season, so treat any route list as a planning starting point and confirm dates directly with the airline before booking.</p>
        </div>
        <div className="seo-callout">
          <h3>Useful gateways to check</h3>
          <ul>{flightGateways.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/west-bay-beach-dock.jpg" alt="West Bay Beach dock and turquoise water in Roatan" />
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Clear West Bay water after arriving in Roatan" />
        <img src="/images/local/beach-access-path.jpg" alt="Walkable beach path near Sea Turtle Villa" />
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/fresco-market.jpg" alt="Fresco Market near Sea Turtle Villa for quick groceries and essentials" />
        <div>
          <p className="eyebrow">Our Favorite Arrival Routine</p>
          <h2>Land, meet Christian, stop for groceries, and settle in.</h2>
          <p>The easiest arrival strategy is to arrange airport transportation ahead of time. Christian can meet you at the airport, help with luggage, provide a comfortable transfer, and stop at Eldon’s Supermarket on the way to West Bay.</p>
          <p>This is the routine our family uses because it turns travel day into a simple, low-stress start: groceries handled, bags handled, and no need to figure out driving on arrival.</p>
          <a className="btn secondary" href="https://www.facebook.com/eldonssupermarkets/" target="_blank" rel="noreferrer">Eldon’s Supermarket</a>
        </div>
      </section>

      <section className="seo-grid-3">
        <article><h3>Airport pickup</h3><p>Pre-arranged transportation removes the biggest first-day friction point for families, groups, and guests arriving internationally.</p></article>
        <article><h3>Grocery stop</h3><p>Stock the villa with breakfast items, snacks, drinks, and family supplies before you arrive in West Bay.</p></article>
        <article><h3>Walkable stay</h3><p>Once you are at the villa, many guests find everyday vacation plans are easier on foot than by car.</p></article>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Simple Timeline</p>
          <h2>How travel day usually works.</h2>
          <p>One reason Sea Turtle Villa works so well for first-time Roatan visitors is that the arrival flow is easy to explain. You do not need to land and immediately solve transportation, groceries, beach access, or dinner plans from scratch.</p>
        </div>
        <div className="seo-callout">
          <h3>Arrival flow</h3>
          <ul>{arrivalSteps.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-split reverse">
        <img src="/images/villa/night-pool-villa-glow.jpg" alt="Evening pool glow at Sea Turtle Villa after arrival day" />
        <div>
          <p className="eyebrow">Do You Need a Rental Car?</p>
          <h2>For many West Bay stays, probably not.</h2>
          <p>If your goal is beach, pool, restaurants, resort amenities, water taxis, diving, pickleball, padel, spa, fitness, and convenient essentials, Sea Turtle Villa’s location keeps the trip very walkable.</p>
          <p>Some guests still choose a rental car for island-wide exploring, but many families prefer airport transportation and simple local plans from West Bay.</p>
        </div>
      </section>

      <section className="seo-grid-3">
        {walkable.map((item) => <article key={item}><h3>{item}</h3><p>Part of the easy West Bay rhythm that helps guests spend less time coordinating logistics and more time enjoying the trip.</p></article>)}
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Packing Tips</p>
          <h2>Bring the island essentials, skip some family bulk.</h2>
          <p>Pack reef-safe sunscreen, swimsuits, light clothing, sandals, water shoes, bug spray, sunglasses, and any preferred medications. Active travelers may want to bring a pickleball paddle or workout clothes.</p>
          <p>Families can pack lighter knowing Sea Turtle Villa includes two pack-n-plays, a baby bathtub, white noise machines, laundry, kitchen appliances, purified drinking water, and kid-friendly spaces.</p>
        </div>
        <img className="seo-side-image" src="/images/local/baby-gear-packnplay-bathtub.jpg" alt="Pack-n-play and baby bathtub available at Sea Turtle Villa" />
      </section>

      <section className="seo-grid-3">
        {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
      </section>

      <GuideExplore current="/getting-to-roatan" heading="Ready to make Roatan feel easy?" text="Pair the flight guide with the villa overview, West Bay guide, family travel guide, active travel guide, and points-and-miles ideas." />
    </main>
  );
}

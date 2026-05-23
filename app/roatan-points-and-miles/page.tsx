import GuideExplore from '../GuideExplore';

export const metadata = {
  title: 'How to Fly to Roatan Using Points & Miles | Sea Turtle Villa',
  description: 'A practical, beginner-friendly Sea Turtle Villa guide to using airline miles and transferable credit-card points for Roatan flights, including United, Aeroplan, American Airlines, gateway cities, and family award travel tips.',
  alternates: { canonical: '/roatan-points-and-miles' },
};

const programs = [
  ['United MileagePlus', 'Useful for United routes and connections through hubs like Houston, Denver, Chicago, and Newark. It is often one of the first places to check for Star Alliance options to RTB.'],
  ['Air Canada Aeroplan', 'A flexible program for searching Star Alliance partner space, including United-operated flights when available. It can be especially useful because several major transferable-points programs can convert to Aeroplan.'],
  ['American AAdvantage', 'Helpful for American Airlines routes through Miami and Dallas/Fort Worth, two practical Roatan gateways for many U.S. travelers.'],
  ['Delta SkyMiles', 'Worth checking for Atlanta-based itineraries, especially when schedules line up with seasonal Roatan service.'],
];

const transferPoints = [
  'Chase Ultimate Rewards can be useful because it transfers to United MileagePlus and Air Canada Aeroplan.',
  'American Express Membership Rewards, Capital One Miles, Bilt Rewards, and other flexible programs may help top up partner programs like Aeroplan depending on current transfer rules.',
  'American Airlines miles are usually earned through AAdvantage activity or co-branded cards rather than transferred from the major flexible bank programs.',
  'Always compare the cash fare before transferring points, because transfers are usually one-way and award prices can change quickly.',
];

const searchTips = [
  'Search one-way flights first, then build the round trip once you find good space.',
  'Check the gateway city to RTB separately, then search your home airport to that gateway.',
  'Be flexible by a day or two, especially around holidays, spring break, and winter travel.',
  'For families, search for the exact number of seats you need and then compare with smaller-seat searches to understand availability.',
  'Book early when possible, but re-check periodically because award space can appear later.',
  'Do not transfer credit-card points until you confirm the flight is available and you are ready to book.',
];

const routes = [
  ['Colorado / Mountain West', 'Check Denver nonstop when operating seasonally, plus United connections through Houston and American connections through Dallas or Miami.'],
  ['Central U.S.', 'Dallas/Fort Worth and Houston are often logical gateways, depending on your airline preference and schedule.'],
  ['East Coast', 'Miami, Atlanta, and Houston can all be useful depending on airline, dates, and connection timing.'],
  ['Canada', 'Check seasonal Canadian nonstop options first, then compare U.S. connections and Aeroplan partner availability.'],
];

const cautions = [
  'Award availability is never guaranteed.',
  'Schedules vary by season and airline.',
  'Taxes, fees, baggage, seat assignments, and change rules can differ by program.',
  'The cheapest points option is not always the best family travel option.',
  'For groups, convenience may be worth more than squeezing out the absolute lowest mileage price.',
];

export default function Page() {
  return (
    <main className="seo-page">
      <a className="seo-back" href="/">← Back to Sea Turtle Villa</a>

      <section className="seo-hero guide-hero">
        <div>
          <p className="eyebrow">Roatan Points & Miles Guide</p>
          <h1>Use airline miles to make the trip feel easier before you even arrive.</h1>
          <p className="lead">Flights are often the biggest question for first-time Roatan visitors. If you collect airline miles or flexible credit-card points, a little planning can make Sea Turtle Villa feel much more reachable.</p>
        </div>
        <img src="/images/local/west-bay-beach-boats.jpg" alt="West Bay Roatan beach boats and turquoise water for vacation planning" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Start With the Route</p>
          <h2>Find the best gateway first, then decide whether cash or miles wins.</h2>
          <p>Roatan’s airport code is RTB. Before moving points around, search the realistic gateway cities for your travel dates: Miami, Houston, Dallas/Fort Worth, Atlanta, Denver, Minneapolis, Toronto, and Montreal are all worth checking depending on season and airline schedule.</p>
          <p>The goal is not to become a full-time travel hacker. It is simply to compare a few practical options before paying cash for the whole family.</p>
        </div>
        <div className="seo-callout">
          <h3>Good first searches</h3>
          <ul>{routes.map(([region, note]) => <li key={region}><strong>{region}:</strong> {note}</li>)}</ul>
        </div>
      </section>

      <section className="seo-image-band three">
        <img src="/images/local/west-bay-crystal-water.jpg" alt="Crystal clear West Bay water after flying to Roatan" />
        <img src="/images/villa/pool-courtyard.jpg" alt="Sea Turtle Villa pool courtyard for arrival day" />
        <img src="/images/villa/rooftop-day.jpg" alt="Rooftop hammocks and hot tub at Sea Turtle Villa" />
      </section>

      <section className="seo-grid-3">
        {programs.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="seo-split reverse">
        <img src="/images/villa/main-floor-living-open.jpg" alt="Open living space at Sea Turtle Villa for family travel planning" />
        <div>
          <p className="eyebrow">Transferable Points</p>
          <h2>Flexible points are usually the most useful starting point.</h2>
          <p>Transferable credit-card points can be valuable because they let you compare multiple airline programs before committing. For Roatan, the most useful approach is often to check United, Aeroplan, American, and Delta options before deciding.</p>
          <p>Do not transfer points speculatively. Confirm flights, passenger count, fees, and schedule first, then transfer only when you are ready to book.</p>
        </div>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Practical Transfer Notes</p>
          <h2>A few simple rules prevent expensive mistakes.</h2>
          <p>Points programs change. Partners change. Award prices change. The safest approach is to use this guide as a decision framework, then verify the current rules directly with the airline or credit-card program before moving points.</p>
        </div>
        <div className="seo-callout">
          <h3>Helpful reminders</h3>
          <ul>{transferPoints.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-grid-3">
        <article><h3>Step 1</h3><p>Search cash fares to RTB on Google Flights or directly with airlines so you know the baseline price.</p></article>
        <article><h3>Step 2</h3><p>Search award space through the most relevant programs for your route, especially United, Aeroplan, American, and Delta.</p></article>
        <article><h3>Step 3</h3><p>Compare total value: miles, taxes, fees, baggage, seats, connection time, and convenience for the whole group.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/baby-gear-packnplay-bathtub.jpg" alt="Family gear at Sea Turtle Villa for families flying to Roatan" />
        <div>
          <p className="eyebrow">Family Award Travel</p>
          <h2>The best deal is the one your family will actually enjoy.</h2>
          <p>For families, award travel is not only about the lowest mileage price. It is about reasonable departure times, manageable layovers, enough seats, baggage rules, and arriving in Roatan with energy left for the trip.</p>
          <p>If a nonstop or easy one-stop itinerary costs a little more in points but makes travel day smoother, it may still be the better vacation decision.</p>
        </div>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Search Strategy</p>
          <h2>How to look for better award options.</h2>
          <p>A few small search habits can uncover options that do not appear when you only search one round trip from your home airport. This is especially true for seasonal Caribbean routes and family-sized award searches.</p>
        </div>
        <div className="seo-callout">
          <h3>Better search habits</h3>
          <ul>{searchTips.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/fresco-market.jpg" alt="Grocery stop planning after flying to Roatan" />
        <div>
          <p className="eyebrow">After You Book Flights</p>
          <h2>Turn travel day into a simple arrival plan.</h2>
          <p>Once flights are set, the next best move is arranging airport transportation and a grocery stop. Our favorite arrival rhythm is to meet Christian at RTB, stop at Eldon’s on the way to West Bay, and arrive at Sea Turtle Villa already stocked for the first few days.</p>
          <p>That combination — smart flight planning, easy transportation, grocery stop, walkable West Bay location — is what makes the trip feel smooth.</p>
        </div>
      </section>

      <section className="seo-grid-3">
        {cautions.map((item) => <article key={item}><h3>Keep in mind</h3><p>{item}</p></article>)}
      </section>

      <GuideExplore current="/roatan-points-and-miles" heading="Ready to plan the trip around the flights?" text="Use the arrival guide, West Bay guide, family guide, and villa overview to turn the flight plan into a smooth Sea Turtle Villa stay." />
    </main>
  );
}

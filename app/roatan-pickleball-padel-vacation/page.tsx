import GuideExplore from '../GuideExplore';

export const metadata = {
  title: 'Roatan Pickleball & Padel Vacation | Sea Turtle Villa',
  description: 'Stay near brand-new pickleball and padel courts in West Bay, Roatan. Sea Turtle Villa is roughly 300 yards from courts with lights, lessons, pro shop, reservations, and tournament energy.',
  alternates: { canonical: '/roatan-pickleball-padel-vacation' },
};

const courtDetails = [
  'Two brand-new pickleball courts',
  'Two brand-new padel courts',
  'Roughly 300 yards from the villa',
  'Lights for night play',
  'Reservations through Playbypoint',
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
          <p className="lead">Sea Turtle Villa sits roughly 300 yards from brand-new pickleball and padel courts, creating a rare West Bay stay for active travelers, families, and groups.</p>
        </div>
        <img src="/images/amenities/courts-10.jpg" alt="Pickleball courts near Sea Turtle Villa in Roatan" />
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Play</p>
          <h2>Courts close enough to fit naturally into the day.</h2>
          <p>Because the courts are so close, play does not need to become a major outing. It can be a morning session, a night match under the lights, a lesson, or a fun family activity between beach and pool time.</p>
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
        <article><h3>Beginners</h3><p>Lessons and a welcoming club environment make it easy for first-timers to try padel or pickleball in West Bay.</p></article>
        <article><h3>Players</h3><p>Courts, lighting, reservations, and tournament energy make the area appealing for more serious active travelers too.</p></article>
        <article><h3>Groups</h3><p>Sea Turtle Villa works well for families or friends who want beach, pool, and court time in the same trip.</p></article>
      </section>

      <section className="seo-split reverse">
        <img src="/images/local/serenity-day-spa.jpg" alt="Serenity Day Spa near Sea Turtle Villa for recovery and relaxation" />
        <div>
          <p className="eyebrow">Recover</p>
          <h2>Spa, pool, rooftop, repeat.</h2>
          <p>After a match, recovery is easy: private Ocean One pool, rooftop hammocks, hot tub evenings, spa services nearby, and West Bay restaurants within walking distance.</p>
          <div className="guide-link-row">
            <a className="btn secondary" href="https://wblodgeroatan.com/serenity-day-spa/" target="_blank" rel="noreferrer">Serenity Day Spa</a>
            <a className="btn secondary" href="https://www.grandroatanresortandspa.com/us/en/kao-kamasa-spa/" target="_blank" rel="noreferrer">Kao Kamasa Spa</a>
          </div>
        </div>
      </section>

      <section className="seo-split">
        <div>
          <p className="eyebrow">Train</p>
          <h2>Stay active beyond the courts.</h2>
          <p>Guests can also work out at Infinity Bay Athletic Club, snorkel from West Bay Beach, book diving nearby, walk the beach, or hike from the villa area.</p>
          <p>It is an easy active-lifestyle base without sacrificing comfort or convenience.</p>
          <div className="guide-link-row">
            <a className="btn secondary" href="https://www.infinitybay.com/explore/roatan-athletic-club" target="_blank" rel="noreferrer">Infinity Bay Athletic Club</a>
            <a className="btn secondary" href="https://www.instagram.com/padelroatan/" target="_blank" rel="noreferrer">Roatan Padel Club</a>
          </div>
        </div>
        <img className="seo-side-image" src="/images/local/paradise-beach-divers.jpg" alt="Paradise Beach Divers near Sea Turtle Villa for active island days" />
      </section>

      <section className="seo-split reverse">
        <img src="/images/villa/night-pool-close.jpg" alt="Evening pool relaxation at Sea Turtle Villa after active West Bay days" />
        <div>
          <p className="eyebrow">Relax</p>
          <h2>The best active days end back at the villa.</h2>
          <p>Play in the morning, swim in the afternoon, walk to dinner, then come home to an illuminated pool or rooftop hot tub. That is the Sea Turtle Villa version of Stay & Play.</p>
        </div>
      </section>

      <GuideExplore current="/roatan-pickleball-padel-vacation" heading="Planning an active Roatan escape?" text="Explore flights, West Bay walkability, family comfort, and the villa experience around your court time, beach time, and recovery time." />
    </main>
  );
}

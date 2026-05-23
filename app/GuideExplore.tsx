const guides = [
  { href: '/', eyebrow: 'Villa Overview', title: 'Explore the Villa' },
  { href: '/west-bay-roatan', eyebrow: 'Location Guide', title: 'West Bay Guide' },
  { href: '/roatan-family-vacation', eyebrow: 'Family Travel', title: 'Family Vacation Guide' },
  { href: '/roatan-pickleball-padel-vacation', eyebrow: 'Active Island Living', title: 'Pickleball & Padel Guide' },
  { href: '/getting-to-roatan', eyebrow: 'Flights & Arrival', title: 'Getting to Roatan Guide' },
  { href: '/roatan-points-and-miles', eyebrow: 'Travel Smarter', title: 'Points & Miles Guide' },
];

type GuideExploreProps = {
  current?: string;
  heading?: string;
  text?: string;
};

export default function GuideExplore({
  current,
  heading = 'Keep planning your West Bay stay.',
  text = 'Explore the villa, compare the guides, and picture how easy the full Sea Turtle Villa experience can feel from flights to beach days.',
}: GuideExploreProps) {
  return (
    <section className="seo-cta guide-explore">
      <h2>{heading}</h2>
      <p>{text}</p>
      <div className="guide-explore-grid">
        {guides.filter((guide) => guide.href !== current).map((guide) => (
          <a className={guide.href === '/' ? 'btn primary' : 'btn light'} href={guide.href} key={guide.href}>
            <span>{guide.eyebrow}</span>
            {guide.title}
          </a>
        ))}
      </div>
    </section>
  );
}

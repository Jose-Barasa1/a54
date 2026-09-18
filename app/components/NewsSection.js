import Link from 'next/link';

const news = [
  {
    tag: 'Karting',
    title: 'A54 Junior Karting Cup returns for Round 3',
    excerpt: 'Over 40 young drivers battle it out at Whistling Thorns in the season\'s most competitive junior round.',
    date: 'Apr 12, 2026',
    image: 'https://images.unsplash.com/photo-1551528551-9f5b1ee0a51c?w=1200&q=80',
    featured: true,
  },
  {
    tag: 'Merch',
    title: 'New A54 merchandise drop — karting edition',
    excerpt: 'Limited edition tees, hoodies, and caps.',
    date: 'Apr 5, 2026',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=700&q=80',
  },
  {
    tag: 'Rally',
    title: 'Safari Rally: Kenyan drivers shine on home soil',
    excerpt: 'A54-supported crews post career-best finishes.',
    date: 'Mar 28, 2026',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=700&q=80',
  },
];

export default function NewsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Latest</div>
            <h2 className="section-title">News & <span>Stories</span></h2>
            <p className="section-sub">Race reports, driver spotlights, and everything happening in the A54 paddock.</p>
          </div>
          <Link href="/news" className="section-link">
            All news <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="news-grid">
          {news.map((n, i) => (
            <Link key={i} href={`/news#article-${i + 1}`} className={`news-card ${n.featured ? 'featured' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={n.image} alt={n.title} className="news-image" />
              <div className="news-body">
                <span className="news-tag">{n.tag}</span>
                <h3 className="news-title">{n.title}</h3>
                <p className="news-excerpt">{n.excerpt}</p>
                <div className="news-meta">
                  <span><i className="bi bi-calendar3"></i> {n.date}</span>
                  <span><i className="bi bi-arrow-right"></i> Read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
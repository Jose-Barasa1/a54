import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'News · A54 Racing' };

const news = [
  { id: 1, tag: 'Karting', title: 'A54 Junior Karting Cup returns for Round 3', date: 'Apr 12, 2026', excerpt: 'Over 40 young drivers battle it out at Whistling Thorns.' },
  { id: 2, tag: 'Merch', title: 'New A54 merchandise drop — karting edition', date: 'Apr 5, 2026', excerpt: 'Limited edition tees, hoodies, and caps now live.' },
  { id: 3, tag: 'Rally', title: 'Safari Rally: Kenyan drivers shine on home soil', date: 'Mar 28, 2026', excerpt: 'A54-supported crews post career-best finishes.' },
  { id: 4, tag: 'Academy', title: 'A54 Karting Academy opens in Nairobi', date: 'Mar 15, 2026', excerpt: 'Arrive-and-drive sessions plus pro coaching now open.' },
];

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">All Stories</div>
              <h1 className="section-title">A54 <span>Newsroom</span></h1>
              <p className="section-sub">Race reports, driver spotlights, and everything in between.</p>
            </div>
          </div>
          <div className="news-grid">
            {news.map((n) => (
              <article key={n.id} id={`article-${n.id}`} className="news-card">
                <div className="news-body">
                  <span className="news-tag">{n.tag}</span>
                  <h3 className="news-title">{n.title}</h3>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <div className="news-meta"><span><i className="bi bi-calendar3"></i> {n.date}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

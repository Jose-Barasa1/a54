import Link from 'next/link';

const tiles = [
  {
    title: 'Go-Karting',
    sub: 'Grassroots racing',
    img: 'https://images.unsplash.com/photo-1551528551-9f5b1ee0a51c?w=800&q=80',
    href: '/fixtures',
  },
  {
    title: 'Formula 1',
    sub: 'Speed kings',
    img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80',
    href: '/news',
  },
  {
    title: 'MotoGP',
    sub: 'Two wheels',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    href: '/news',
  },
  {
    title: 'Safari Rally',
    sub: 'Kenyan dirt',
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80',
    href: '/news',
  },
];

export default function Disciplines() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Disciplines</div>
            <h2 className="section-title">Explore the <span>Paddock</span></h2>
            <p className="section-sub">Four worlds, one community. Pick your discipline and dive in.</p>
          </div>
        </div>
        <div className="disciplines-grid">
          {tiles.map((t, i) => (
            <Link
              key={i}
              href={t.href}
              className="discipline-tile"
              style={{ backgroundImage: `url(${t.img})` }}
            >
              <div className="discipline-body">
                <div className="discipline-title">{t.title}</div>
                <div className="discipline-sub">{t.sub}</div>
                <div className="discipline-arrow">
                  Explore <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
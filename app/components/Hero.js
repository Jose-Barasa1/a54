import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-kicker">
            <i className="bi bi-broadcast"></i> Live · 2026 Season
          </div>
          <h1 className="hero-title">
            The Home of <span className="accent">Go-Kart Racing</span> in Kenya
          </h1>
          <p className="hero-sub">
            From grassroots karting to F1, MotoGP, and Safari Rally — A54 is where
            Africa's fastest drivers are made and motorsport culture lives.
          </p>
          <div className="hero-ctas">
            <Link href="/fixtures" className="btn btn-primary">
              <i className="bi bi-flag-fill"></i> View Race Calendar
            </Link>
            <Link href="/merch" className="btn btn-secondary">
              <i className="bi bi-bag-fill"></i> Shop A54 Merch
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <div className="hero-meta-value">128</div>
              <div className="hero-meta-label">Race Days</div>
            </div>
            <div>
              <div className="hero-meta-value">156</div>
              <div className="hero-meta-label">Podiums</div>
            </div>
            <div>
              <div className="hero-meta-value">50K</div>
              <div className="hero-meta-label">Community</div>
            </div>
          </div>
        </div>

        <div className="hero-gallery">
          <div style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BZdMwzJIdysmSu-R-Eo39CTNtlEVzP8fhpHY8F-seQ&s=10)` }} />
          <div style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BZdMwzJIdysmSu-R-Eo39CTNtlEVzP8fhpHY8F-seQ&s=10)` }} />
          <div style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BZdMwzJIdysmSu-R-Eo39CTNtlEVzP8fhpHY8F-seQ&s=10)` }} />
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><span className="live-dot"></span>Live Race Control · Karting R1 in progress</span>
            <span>🇰🇪 Nairobi · EAT</span>
          </div>
          <div className="top-bar-right">
            <a href="mailto:hello@a54racing.co.ke">hello@a54racing.co.ke</a>
            <a href="tel:+254700000054">+254 700 000 054</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <div className="brand-mark"><i className="bi bi-flag-fill"></i></div>
            <div className="brand-text">
              <div className="brand-name">A<span>54</span> Racing</div>
              <div className="brand-tag">Karting · Motorsport</div>
            </div>
          </Link>

          <nav className="main-nav">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/fixtures">Race Days</Link>
            <Link href="/merch">Merch</Link>
            <Link href="/gallery">Gallery</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="https://wa.me/254700000054"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta"
            >
              <i className="bi bi-lightning-charge-fill"></i> Join the Grid
            </a>
            <button className="mobile-toggle" aria-label="Menu">
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ gap: '0.8rem' }}>
              <div className="brand-mark"><i className="bi bi-flag-fill"></i></div>
              <div className="brand-text">
                <div className="brand-name">A<span>54</span> Racing</div>
                <div className="brand-tag">Karting · Motorsport</div>
              </div>
            </div>
            <p className="footer-about">
              Kenya's home of go-kart racing and motorsport culture. From grassroots
              karting to F1, MotoGP, and Safari Rally — we build champions.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/a54racing" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com/a54racing" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"><i className="bi bi-twitter-x"></i></a>
              <a href="https://youtube.com/@a54racing" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              <a href="https://tiktok.com/@a54racing" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
              <a href="mailto:hello@a54racing.co.ke" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Racing</h4>
            <ul>
              <li><Link href="/fixtures">Race Calendar</Link></li>
              <li><Link href="/fixtures">Register</Link></li>
              <li><Link href="/news">Standings</Link></li>
              <li><Link href="/news">Live Race Control</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link href="/merch">All Merch</Link></li>
              <li><Link href="/merch">Apparel</Link></li>
              <li><Link href="/merch">Headwear</Link></li>
              <li><Link href="/merch">Racing Gear</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/news">About A54</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><a href="mailto:hello@a54racing.co.ke">Contact</a></li>
              <li><a href="https://wa.me/254700000054" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 A54 Racing · Nairobi, Kenya. All rights reserved.</div>
          <div>
            <a href="mailto:hello@a54racing.co.ke">hello@a54racing.co.ke</a>
            {' · '}
            <a href="tel:+254700000054">+254 700 000 054</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

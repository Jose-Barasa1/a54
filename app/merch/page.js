import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'Merch · A54 Racing' };

const merch = [
  { name: 'A54 Racing Team Tee', cat: 'Apparel', price: 'KSh 2,500', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80' },
  { name: 'A54 Karting Hoodie', cat: 'Apparel', price: 'KSh 4,800', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700&q=80' },
  { name: 'A54 Checkered Cap', cat: 'Headwear', price: 'KSh 1,800', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&q=80' },
  { name: 'A54 Racing Gloves', cat: 'Gear', price: 'KSh 3,200', img: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=700&q=80' },
];

export default function MerchPage() {
  return (
    <>
      <SiteHeader />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Shop</div>
              <h1 className="section-title">A54 <span>Collection</span></h1>
              <p className="section-sub">Paddock-ready kit. Free shipping across Kenya.</p>
            </div>
          </div>
          <div className="merch-grid">
            {merch.map((m, i) => (
              <div key={i} className="merch-card">
                <div className="merch-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name} className="merch-image" />
                </div>
                <div className="merch-body">
                  <div className="merch-cat">{m.cat}</div>
                  <div className="merch-name">{m.name}</div>
                  <div className="merch-foot">
                    <span className="merch-price">{m.price}</span>
                    <a href={`mailto:shop@a54racing.co.ke?subject=Order%20${encodeURIComponent(m.name)}`} className="merch-buy">Buy</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

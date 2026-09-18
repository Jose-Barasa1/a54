'use client';
import { useState } from 'react';
import Link from 'next/link';

const fixtures = [
  { day: '03', month: 'May', series: 'Karting', event: 'A54 Karting Championship — Round 1', location: 'Whistling Thorns, Naivasha' },
  { day: '24', month: 'May', series: 'Karting', event: 'A54 Karting Championship — Round 2', location: 'A54 Arena, Nairobi' },
  { day: '07', month: 'Jun', series: 'Night', event: 'Night Kart Challenge', location: 'A54 Arena, Nairobi' },
  { day: '19', month: 'Jul', series: 'Endurance', event: 'A54 Endurance 6H', location: 'A54 Arena, Nairobi' },
  { day: '09', month: 'Aug', series: 'Junior', event: 'Junior Karting Cup — Final', location: 'Whistling Thorns, Naivasha' },
];

const merch = [
  { name: 'A54 Racing Team Tee', cat: 'Apparel', price: 'KSh 2,500', badge: 'New', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80' },
  { name: 'A54 Karting Hoodie', cat: 'Apparel', price: 'KSh 4,800', badge: 'Hot', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700&q=80' },
  { name: 'A54 Checkered Cap', cat: 'Headwear', price: 'KSh 1,800', badge: '', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&q=80' },
  { name: 'A54 Racing Gloves', cat: 'Gear', price: 'KSh 3,200', badge: 'New', img: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=700&q=80' },
];

export default function TabsSection() {
  const [tab, setTab] = useState('fixtures');

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Race Days & Shop</div>
            <h2 className="section-title">
              {tab === 'fixtures' ? <>Upcoming <span>Race Days</span></> : <>A54 <span>Merch</span> Drop</>}
            </h2>
            <p className="section-sub">
              {tab === 'fixtures'
                ? 'The full 2026 calendar. Every round, every location, every session.'
                : 'Limited edition kit built for the paddock. Free shipping across Kenya.'}
            </p>
          </div>
          <Link href={tab === 'fixtures' ? '/fixtures' : '/merch'} className="section-link">
            {tab === 'fixtures' ? 'Full calendar' : 'Shop all'} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'fixtures'} className={`tab ${tab === 'fixtures' ? 'active' : ''}`} onClick={() => setTab('fixtures')}>
            <i className="bi bi-calendar-event me-2"></i> Fixtures
          </button>
          <button role="tab" aria-selected={tab === 'merch'} className={`tab ${tab === 'merch' ? 'active' : ''}`} onClick={() => setTab('merch')}>
            <i className="bi bi-bag-fill me-2"></i> Merch
          </button>
        </div>

        {tab === 'fixtures' && (
          <div className="fixtures-wrap">
            {fixtures.map((f, i) => (
              <div key={i} className="fixture-row">
                <div className="fixture-date">
                  <div className="fixture-date-day">{f.day}</div>
                  <div className="fixture-date-month">{f.month}</div>
                </div>
                <div>
                  <div className="fixture-event">{f.event}</div>
                  <div className="fixture-series">{f.series}</div>
                </div>
                <div className="fixture-loc"><i className="bi bi-geo-alt-fill"></i> {f.location}</div>
                <a href={`mailto:race@a54racing.co.ke?subject=Entry%20for%20${encodeURIComponent(f.event)}`} className="fixture-cta">Enter</a>
              </div>
            ))}
          </div>
        )}

        {tab === 'merch' && (
          <div className="merch-grid">
            {merch.map((m, i) => (
              <div key={i} className="merch-card">
                <div className="merch-image-wrap">
                  {m.badge && <span className="merch-badge">{m.badge}</span>}
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
        )}
      </div>
    </section>
  );
}
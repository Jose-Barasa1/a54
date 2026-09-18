import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'Race Days · A54 Racing' };

const fixtures = [
  { day: '03', month: 'May', series: 'Karting', event: 'A54 Karting Championship — Round 1', location: 'Whistling Thorns, Naivasha' },
  { day: '24', month: 'May', series: 'Karting', event: 'A54 Karting Championship — Round 2', location: 'A54 Arena, Nairobi' },
  { day: '07', month: 'Jun', series: 'Night', event: 'Night Kart Challenge', location: 'A54 Arena, Nairobi' },
  { day: '19', month: 'Jul', series: 'Endurance', event: 'A54 Endurance 6H', location: 'A54 Arena, Nairobi' },
  { day: '09', month: 'Aug', series: 'Junior', event: 'Junior Karting Cup — Final', location: 'Whistling Thorns, Naivasha' },
];

export default function FixturesPage() {
  return (
    <>
      <SiteHeader />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Calendar</div>
              <h1 className="section-title">2026 <span>Race Days</span></h1>
              <p className="section-sub">Every round, every location, every entry window.</p>
            </div>
          </div>
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
                <a href={`mailto:race@a54racing.co.ke?subject=Entry%20${encodeURIComponent(f.event)}`} className="fixture-cta">Enter</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

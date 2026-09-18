export default function Stats() {
  const stats = [
    { icon: 'bi-flag-fill', value: '128', label: 'Race Days Hosted' },
    { icon: 'bi-trophy-fill', value: '156', label: 'Podiums Won' },
    { icon: 'bi-people-fill', value: '50K', label: 'Community Members' },
    { icon: 'bi-stopwatch-fill', value: '42', label: 'Track Records' },
  ];
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-block">
              <i className={`bi ${s.icon} stat-icon`}></i>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

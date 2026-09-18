export default function LiveTicker() {
    const items = [
      { label: 'KARTING R1', value: 'K. Mwangi leads Lap 12/20' },
      { label: 'JUNIOR CUP', value: 'Round 3 registration open' },
      { label: 'SAFARI RALLY', value: 'A54 crew finishes P4 overall' },
      { label: 'MOTOGP', value: 'Mugello GP · Sunday 15:00 EAT' },
      { label: 'F1', value: 'Monaco GP · Qualifying Saturday' },
    ];
  
    // Duplicate the set once so the -50% translate loops seamlessly.
    const track = [...items, ...items];
  
    return (
      <div className="ticker" aria-label="Live race updates">
        <div className="ticker-inner">
          <span className="ticker-label">
            <span className="live-dot" style={{ marginRight: 0 }}></span>
            Live
          </span>
          <div className="ticker-viewport">
            <div className="ticker-track">
              {track.map((it, i) => (
                <span key={i} className="ticker-item">
                  <b>{it.label}</b>
                  <span className="ticker-sep"></span>
                  {it.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
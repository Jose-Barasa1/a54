const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA44AHiFxNDBM_ZE7xRPSU4F35Wm1Jt5waHWWkXbYQDMCWOhU6-fwL7a8&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FD4cy_3HYYEuNRPTDFcqYHgIIao1ZJDc43Mwt5sxSA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyx1qUrXyRyyvKKGDkJzwV4SgVYSBi9hlbz0haBP9Ug&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsuaWhb_wDZCLsShHyUQ1w4QZN0hMiRps6wcezLAnv6t_g_OmD2n8Xg0&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsuaWhb_wDZCLsShHyUQ1w4QZN0hMiRps6wcezLAnv6t_g_OmD2n8Xg0&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL78JDXkkfQRoNikFv9BmnBFIH_7bNLZrrONr10Ib9Jg&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXo3Q2IfeFUas6LO3qnE64rk-gbgmsztmYd-hB_GmJpA&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1HEFN2Csj3AmdOChN5LDbJtHB8pTDE3jH5bjzqPZSA&s=10',
];

export default function Gallery() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Gallery</div>
            <h2 className="section-title">From the <span>Track</span></h2>
            <p className="section-sub">Frames from A54 race days, paddock moments, and everything in between.</p>
          </div>
        </div>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
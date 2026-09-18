'use client';

export default function Newsletter() {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="newsletter">
          <div>
            <div className="section-kicker" style={{ color: '#ff7a7a' }}>Stay in the loop</div>
            <h2>Race day alerts, drops, and driver news — straight to your inbox.</h2>
            <p>Get the A54 racing briefing every Friday. No spam, unsubscribe anytime.</p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.querySelector('input').value;
              window.location.href = `mailto:hello@a54racing.co.ke?subject=Newsletter%20Signup&body=${encodeURIComponent(email)}`;
            }}
          >
            <input type="email" placeholder="you@example.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

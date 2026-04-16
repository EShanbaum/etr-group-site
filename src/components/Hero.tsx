import '../styles/hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Replaceable Parts Built for Growing Kids</h1>
        <p className="hero-subtitle">
          Durable, affordable prosthetic components designed to keep up with your child's growth and lifestyle
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="prosthetic-illustration">
          <div className="prosthetic-shape"></div>
        </div>
      </div>
    </section>
  );
}

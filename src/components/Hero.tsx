import '../styles/hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <iframe width="1200" height="720"
src="https://www.powtoon.com/embed/b28AgRttKXM/" frameBorder="0"
allowFullScreen={true}></iframe>
        <h1 className="hero-title">Replaceable Parts Built for Growing Kids</h1>
        <p className="hero-subtitle">
          Durable, affordable prosthetic components designed to keep up with your child's growth and lifestyle
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Learn More</button>
          <a className="btn btn-secondary" href="mailto:sneakybionics@outlook.com">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

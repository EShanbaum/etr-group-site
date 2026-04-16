import '../styles/features.css';

export function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Quick Replacement',
      description: 'Easy swap components that take minutes to replace, keeping your child active'
    },
    {
      icon: '💪',
      title: 'Durability',
      description: 'Built to withstand active play and sports with military-grade materials'
    },
    {
      icon: '💰',
      title: 'Affordable',
      description: 'Quality replaceable parts that grow with your budget, not your expenses'
    },
    {
      icon: '📏',
      title: 'Growth-Ready',
      description: 'Modular design adapts as your child grows without full replacement'
    },
    {
      icon: '🔒',
      title: 'Safe & Certified',
      description: 'All products meet strict medical certifications and safety standards'
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Recyclable components reduce waste and environmental impact'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Why Choose ProFit?</h2>
          <p>The complete solution for growing kids</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

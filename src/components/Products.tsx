import '../styles/products.css';

export function Products() {
  const products = [
    {
      name: 'Foot Modules',
      description: 'Lightweight, flexible foot components with various grip patterns',
      image: '🦶'
    },
    {
      name: 'Ankle Joints',
      description: 'Adjustable articulation for dynamic movement and stability',
      image: '🔗'
    },
    {
      name: 'Socket Liners',
      description: 'Breathable, cushioned liners for maximum comfort during active use',
      image: '🛡️'
    },
    {
      name: 'Connection Adapters',
      description: 'Universal connectors compatible with multiple component types',
      image: '🔧'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-header">
          <h2>Our Product Range</h2>
          <p>Modular components designed to work together</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="product-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

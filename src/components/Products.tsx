import '../styles/products.css';

export function Products() {
  const products = [
    {
      name: 'Lower Body Prosthetics',
      description: 'Lightweight, flexible leg prosthetics adapted for althetic capabilities',
      image: '🦿'
    },
    {
      name: 'Upper Body Prosthetics',
      description: 'Versatile and adaptable arm prosthetics designed to react to natural movements',
      image: '🦾'
    },
    {
      name: 'Replaceable Components',
      description: 'Fingers, wrists, feet, ankles, we have it all. Our bionic prosthetics are designed to be modular to accommodate child wear and tear',
      image: '🔧'
    },
 
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

import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Experienced Software Engineer</h2>
        <p>Skilled in Java, Web Development</p>
        <a href="#about">Learn More</a>
      </div>
      <div className="languages-graph">
        <img
          src="https://camo.githubusercontent.com/994603632d1958c6e5672a6b1aad22dbc025ba564a1910bde416273c641ce9c5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6761696b77616461736875746f73683335267468656d653d6461726b26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374"
          height="150"
          alt="languages graph"
        />
      </div>
    </section>
  );
}

export default Hero;

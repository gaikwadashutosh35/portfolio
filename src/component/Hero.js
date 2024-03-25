import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Experienced Software Engineer</h2>
        <p>Skilled in Java, Python, Web Development</p>
        <a href="#about">Learn More</a>
      </div>
      <div className="languages-graph">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=gaikwadashutosh35&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
          height="150"
          alt="languages graph"
        />
      </div>
    </section>
  );
}

export default Hero;

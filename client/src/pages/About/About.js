import React from 'react';
import './../../styles/css/about.css';
import Adam from './../../assets/images/adam.png';
import Ansel from './../../assets/images/ansel.png';
import Ksenia from './../../assets/images/ksenia.png';
import Richard from './../../assets/images/richard.png';
import Yang from './../../assets/images/yang.jpg';

const About = () => {
  return (
    // <div className="main-content">
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to Plant World</h1>
      </header>
      <section>
        <p>
          Our Plant Diagnosis & Care App helps you identify plants and diagnose
          any issues that may need attention by simply uploading a photo.
          Whether you're a gardening enthusiast or you just bought your first
          plant, our app makes plant identification, diagnosis, and care easy
          and accessible.
        </p>
      </section>
      <section className="diagnosis-features">
        <h2>Diagnosis Features</h2>
        <ul>
          <li>Plant Identification: Identify plants by uploading a photo.</li>
          <li>
            Issue Diagnosis: Detect and diagnose issues like watering, pruning,
            and pests.
          </li>
          <li>
            Care Instructions: Get personalized care tips and recommendations
            for your plants.
          </li>
        </ul>
      </section>
      <section className="about-creators">
        <h2>About the Creators</h2>
        <div className="creator">
          <img src={Adam} alt="Creator 1" className="creator-image" />
          <h3 className="marginAbout">Adam Duda</h3>

          <p>
            Adam is a passionate software developer with a knack for building
            intuitive user interfaces. Outside of coding, he loves nurturing his
            Venus flytrap, fascinated by its carnivorous nature and intricate
            design.
          </p>
        </div>

        <div className="creator">
          <h3 className="marginAbout">Ksenia Vasileva </h3>
          <img src={Ksenia} alt="Creator 2" className="creator-image" />
          <p>
            Ksenia is a dedicated software developer who thrives on solving
            complex algorithms. When she's not immersed in code, you'll find her
            caring for her elegant orchids, each bloom a testament to her
            patience and attention to detail.
          </p>
        </div>
        <div className="creator">
          <img src={Yang} alt="Creator 2" className="creator-image" />
          <h3 className="marginAbout">Yang cao </h3>
          <p>
            Yang is an innovative software developer known for her creative
            solutions to coding challenges. Away from her computer, she takes
            pride in tending to her bonsai tree, finding tranquility in its
            miniature beauty and delicate pruning.
          </p>
        </div>
      </section>
      <section>
        <div className="creator">
          <h3 className="marginAbout">Richard Gullo </h3>
          <img src={Richard} alt="Creator 2" className="creator-image" />
          <p>
            Richard is a seasoned software developer with a passion for creating
            scalable and efficient systems. In his downtime, he enjoys
            cultivating his vibrant sunflowers, inspired by their resilience and
            ability to thrive in adversity..
          </p>
        </div>
      </section>
      <section>
        <div className="creator">
          <img src={Ansel} alt="Creator 2" className="creator-image" />
          <h3 className="marginAbout">Ansel Nolting </h3>
          <p>
            Ansel is a forward-thinking software developer with a focus on
            emerging technologies. Ansel delights in taking care of succulents,
            admiring their diverse shapes and colors while learning about their
            unique adaptations.
          </p>
        </div>
      </section>
      {/* </div> */}
      <footer className="footer">
        <p>&copy; 2024 Plant Diagnosis App</p>
      </footer>
    </div>
  );
};

export default About;

import React from 'react';
import GeneralNavbar from './generalNavbar';
import './generalCSS/generalnavbar.css'

const Home = () => {
  return (<>
    <GeneralNavbar />
    <div className="about">
      <h2>Our Story</h2>
      <p>Welcome to DummyCorp, where innovation meets excellence. Established in 20XX, DummyCorp is a pioneer in groundbreaking solutions that redefine industries.</p>

      <h2>Our Mission</h2>
      <p>At DummyCorp, our mission is to empower individuals and businesses through cutting-edge technologies. We strive to create meaningful and lasting impacts on a global scale.</p>

      <h2>Team</h2>
      <p>Meet the passionate minds behind DummyCorp. Our diverse team brings together expertise from various fields, united by a shared vision of driving positive change.</p>

      <h2>Values</h2>
      <p>Integrity, innovation, and inclusivity — these are the core values that guide us. We believe in fostering an environment where creativity thrives and everyone's voice is heard.</p>

      <h2>Community</h2>
      <p>DummyCorp is more than a company; it's a community. Join us on this journey of discovery and progress. Together, we can build a future where possibilities are limitless.</p>
    </div>

  </>
  )
}

export default Home

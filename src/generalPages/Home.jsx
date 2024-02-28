import React from 'react';
import GeneralNavbar from './generalNavbar';
import './generalCSS/home.css'
import './generalCSS/generalnavbar.css'

const Home = () => {
  return (<>
    <GeneralNavbar />

    <div className="home">
  <div className="big-card">
    <h3>REVOLUTIONIZING CRYPTO WITH DUMMY TOKEN</h3>
    <p>Embark on an extraordinary journey with the DUMMY token, the world's first crypto-backed marvel. By holding DUMMY, you become part of a global mining community, solving challenges and unlocking endless possibilities. Explore the allure of our diverse revenue streams.</p>
  </div>
  <div className="small-cards">
    <div className="card">
      <h3>Enigma Crate</h3>
      <p>Unveil the excitement in the Metaverse with groundbreaking P2E games and thrilling developments.</p>
    </div>
    <div className="card">
      <h3>Crypto Art</h3>
      <p>Immerse yourself in a rich NFT ecosystem featuring exclusive artworks for you to cherish and utilize.</p>
    </div>
    <div className="card">
      <h3>DUMMY Token</h3>
      <p>Experience cutting-edge crypto mining on a global scale, aiming to mine 1 BTC daily using sustainable green energy.</p>
    </div>
  </div>
</div>

  </>
  )
}

export default Home

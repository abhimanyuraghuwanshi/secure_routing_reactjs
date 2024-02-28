
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GeneralNavbar from './generalNavbar';
import config from '../config'

import './generalCSS/login.css';
import './generalCSS/generalnavbar.css';

const LoadingPopup = () => {
	return (
		<div className="loading-popup-container">
			<div className="loading-popup">
				<p>Please wait</p>
				<h1>Loggin in . . .</h1>
			</div>
		</div>
	);
};

const UserLogin = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		console.log('Logged in with username:', username, 'and password:', password);
		setTimeout(() => {
			navigate(`${config.baseurl}${config.loginurl}/`);
		}, 3000);
	};

	return (
		<>
			<GeneralNavbar />
			
			<section className="login-section">
				<div className="login-container">
					<div className="login-form">
						<div className="login-logo">
							<img
								src="https://mrmint.io/images/coin_banner_big.png"
								alt="logo"
							/>
							<h4>We are The XYZ Team</h4>
						</div>
						<form>
							<p>Please login to your account</p>
							<div className="form-group">
								<input
									type="text"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<button className="login-button" type="button" onClick={handleLogin}>
								Log in
							</button>
							<a href="#!" className="forgot-password-link">
								Forgot password?
							</a>
							<p className="create-account-text">
								Don't have an account?{' '}
								<button className="create-account-button" type="button">
									Create new
								</button>
							</p>
						</form>
					</div>
					<div className="login-info">
						<h4>WORLD'S 1st TOKEN BACKED BY CRYPTO MINING</h4>
						<p className="large">
  CryptoPioneer Token (CPT) is an innovation-backed token that integrates aspects of:<br /><br />
  • State-of-the-art blockchain mining technologies<br />
  • Versatile NFTs for diverse applications<br />
  • Exciting Play-to-Earn gaming experiences in the Metaverse<br />
  • Cutting-edge Web 4.0 advancements<br /><br />
  Curious how mining thrives in an entire ecosystem? The possibilities are boundless. By holding the CPT token, individuals become integral members of the Global Mining Community. CryptoPioneer's project addresses the persistent challenge of rising costs and increasing difficulty levels in cryptocurrency mining. Consequently, indirect benefits are extended to a community that exclusively holds the CPT token. Here's a sneak peek into our multiple revenue streams.
</p>

					</div>
				</div>
			</section>
			{isLoading && <LoadingPopup />} 
			
		</>
	)
}

export default UserLogin;

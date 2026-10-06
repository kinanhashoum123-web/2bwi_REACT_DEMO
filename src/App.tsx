import './App.css'

function App() {
	return (
		<main className="profile-page">
			<header className="site-header">
				<a className="wordmark" href="#home" aria-label="Kinan Hashoum home">
					<span className="wordmark-mark">KH</span>
					<span>KINAN HASHOUM</span>
				</a>
				<a className="header-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
			</header>

			<section className="hero" id="home" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow"><span className="status-dot" /> VOLLEYBALL · AUSTRIA</p>
					<h1 id="hero-title">Kinan<br /><span>Hashoum</span></h1>
					<p className="hero-intro">Focused on the next point.<br />Always ready to play.</p>
					<a className="roster-link" href="https://volleynet.at/teams/" target="_blank" rel="noreferrer">
						<span className="roster-icon" aria-hidden="true">↗</span>
						<span><strong>ÖVV player profile</strong><small>VC Wolfurt · U16</small></span>
					</a>
					<span className="hero-number" aria-hidden="true">01</span>
				</div>

				<div className="hero-image" role="img" aria-label="Volleyball court and net">
					<div className="image-label"><span>ON COURT</span><span>AUSTRIA / 2025</span></div>
					<div className="ball-stamp" aria-hidden="true"><span>PLAY</span><span>THE</span><span>POINT</span></div>
				</div>
				<div className="hero-caption"><span>BUILT FOR THE RALLY</span><span>47° 30' N&nbsp; 9° 45' E</span></div>
			</section>

			<section className="profile-details" id="contact" aria-labelledby="details-title">
				<div className="details-heading">
					<p className="eyebrow">PLAYER DETAILS</p>
					<h2 id="details-title">The essentials<span>.</span></h2>
				</div>
				<dl className="details-grid">
					<div className="detail-item">
						<dt>Full name</dt>
						<dd>Kinan Hashoum</dd>
					</div>
					<div className="detail-item">
						<dt>Date of birth</dt>
						<dd><time dateTime="2011-07-16">16.07.2011</time></dd>
					</div>
					<div className="detail-item">
						<dt>Phone</dt>
						<dd><a href="tel:+4367764203026">0043 677 64203026</a></dd>
					</div>
					<div className="detail-item">
						<dt>Email</dt>
						<dd><a href="mailto:Hashoumkinan@gmail.com">Hashoumkinan@gmail.com</a></dd>
					</div>
				</dl>
			</section>

			<footer className="site-footer">
				<span>KINAN HASHOUM</span>
				<span>ONE POINT AT A TIME <span className="footer-ball" aria-hidden="true">●</span></span>
			</footer>
		</main>
	)
}

export default App

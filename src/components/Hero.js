import profileImg from "../images/profile-sketch.png";
export default function Hero() {
	return (
		<section id="hero" className="hero">
			<span className="section-heading-light">Home</span>
			<div className="hero-content">
				<div className="hero-circle" role="presentation">
					<div className="hero-circle-animation"></div>
					<div className="hero-img">
						<img src={profileImg} alt="" />
					</div>
				</div>
				<div className="hero-text">
					<p>Hello there,</p>
					<p>I'm Kaung Myat Khaing,</p>
					<p>a front-end developer from Myanmar.</p>
					<p>I design web interfaces as a living.</p>
				</div>
			</div>
		</section>
	);
}

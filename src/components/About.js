import { nanoid } from "nanoid";
import workSetupImg from "../images/work-setup.jpg";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import figma from "../images/figma.png";
import github_light from "../images/github-light.png";
import github_dark from "../images/github-dark.png";
import html from "../images/html.png";
import js from "../images/js.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
let body = document.querySelector("body");
export default function About(props) {
	let github;
	if (props.currentTheme === "dark") github = github_light;
	if (props.currentTheme === "light") github = github_dark;
	if (props.currentTheme === "system") {
		if (body.classList.contains("light")) github = github_dark;
		else github = github_light;
	}
	const TECH_STACK_IMG = [html, css, js, sass, bootstrap, react, figma, github];
	const TECH_STACK_IMG_TITLE = [
		"HTML",
		"CSS",
		"JAVASCRIPT",
		"sass",
		"bootstrap",
		"react",
		"figma",
		"github",
	];
	return (
		<section id="about" className="about">
			<span className="section-heading-light">About</span>
			<h2 className="section-heading">Coffee Lover, Minimalist</h2>
			<div className="about-content section-content">
				<div className="about-content--left">
					<img
						className="about-content--left--img"
						alt="table-top shot of a laptop and a cup of coffee"
						src={workSetupImg}
					/>
					<p className="about-content--left--text">
						I’m an electronic engineering graduate who enjoy coding and crafting
						creative things. After my graduation, I chose to be a front-end web
						developer instead of an engineer because I beleive I’m better at
						working with creative things rather than working with circuits. So,
						I spent countless hours and sipped countless cups of coffee to be
						able to reach this proficiency.
					</p>
				</div>
				<div className="about-content--right">
					<div className="about-content--right--img">
						<h4>Languages, tools and framesworks I use:</h4>
						<div className="tech-stack">
							{TECH_STACK_IMG.map((imgURL, ind) => {
								return (
									<div
										key={nanoid()}
										className="img-container wow "
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										style={{
											zIndex: `${10 - ind - 1}`,
											animationName: "fadeIn, slideInLeft",
											animationDuration: "1s, 1s",
											animationDelay: `${ind / 10 + 0.1}s`,
										}}
									>
										<img src={imgURL} alt={TECH_STACK_IMG_TITLE[ind]} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<a href="#" className="btn btn-outline-accent get-my-resume">
					Get my resume(pdf)
				</a>
			</div>
		</section>
	);
}

import React, { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import WOW from "../node_modules/wow.js/dist/wow";
import Copyright from "./components/Copyright";
let wow = new WOW({
	boxClass: "wow", // default
	animateClass: "animated", // default
	offset: 30, // default
	mobile: true, // default
	live: true, // default
});
wow.init();
export default function App() {
	let [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
	);
	let body = document.querySelector("body");

	if (currentTheme === "dark") {
		body.classList.remove("light");
	}
	if (currentTheme === "light") {
		body.classList.add("light");
	}
	if (currentTheme === "system") {
		if (matchMedia("(prefers-color-scheme: light").matches) {
			body.classList.add("light");
			console.log("currentTheme: light");
		} else {
			body.classList.remove("light");
			console.log("currentTheme: dark");
		}
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", function (e) {
				const colorScheme = e.matches ? "dark" : "light";

				if (colorScheme === "dark") {
					body.classList.remove("light");
					console.log("currentTheme: dark");
				} else {
					body.classList.add("light");
					console.log("currentTheme: light");
				}
			});
	}

	let [btnClr, setBtnClr] = useState(
		window.outerWidth >= 1200 ? "btn-outline-secondary" : "btn-outline-primary"
	);
	window.onresize = () => {
		if (window.outerWidth >= 1200) setBtnClr("btn-outline-secondary");
		else setBtnClr("btn-outline-primary");
	};

	return (
		<>
			<main>
				<Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
				<div className="page">
					<Hero />
					<About currentTheme={currentTheme} />
					<Portfolio btnClr={btnClr} />
					<footer>
						<Contact />
						<Copyright />
					</footer>
				</div>
			</main>
		</>
	);
}

import { nanoid } from "nanoid";
import Project from "./Project";
import projects_data from "../projects_data";
export default function Portfolio(props) {
	return (
		<section id="portfolio" className="portfolio">
			<span className="section-heading-light">Portfolio</span>
			<h2 className="section-heading">My Finest Works</h2>
			<p className="scroll-text">
				Scroll right to view more{" "}
				<i className="fa-solid fa-arrow-right-long"></i>
			</p>
			<div className="portfolio-content">
				{projects_data.map((data) => {
					return <Project key={nanoid()} {...data} btnClr={props.btnClr} />;
				})}
			</div>
		</section>
	);
}

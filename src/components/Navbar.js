export default function Navbar(props) {
	let themeLogo;
	if (props.currentTheme === "system") {
		themeLogo = <i className="fa-solid fa-desktop"></i>;
	}
	if (props.currentTheme === "dark") {
		themeLogo = <i className="fa-solid fa-moon"></i>;
	}
	if (props.currentTheme === "light") {
		themeLogo = <i className="fa-solid fa-sun"></i>;
	}
	return (
		<nav className="my-navbar">
			<a href="#about">About</a>

			<a href="#portfolio">Portfolio</a>

			<a href="#contact">Contact</a>

			<div className="dropdown">
				<button
					className={"btn btn-outline-accent dropdown-toggle"}
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{themeLogo} Theme
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li
						className="dropdown-item"
						onClick={() => {
							props.setCurrentTheme("light");
							localStorage.setItem("theme", "light");
						}}
					>
						<i className="fa-solid fa-sun"></i>Light
					</li>
					<li
						className="dropdown-item"
						onClick={() => {
							props.setCurrentTheme("dark");
							localStorage.setItem("theme", "dark");
						}}
					>
						<i className="fa-solid fa-moon"></i>Dark
					</li>
					<li
						className="dropdown-item"
						onClick={() => {
							props.setCurrentTheme("system");
							localStorage.setItem("theme", "system");
						}}
					>
						<i className="fa-solid fa-desktop"></i>System
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default function Project(props) {
	return (
		<div className="card project">
			<div className="card-body project--text">
				<h4 className="card-title project-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="link-container">
				<div className="filter"></div>
				<img
					src={props.imgUrl}
					alt={props.altText}
					crossOrigin="anonymous"
				></img>
				<a
					href={props.pageUrl}
					target="_blank"
					rel="noreferrer"
					className={`btn ${props.btnClr}`}
				>
					<i className="fa-solid fa-eye"></i>
					View Live
				</a>
			</div>
		</div>
	);
}

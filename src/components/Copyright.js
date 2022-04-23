export default function Footer() {
	let date = new Date();
	let currentYear = date.getFullYear();
	return (
		<p className="cpright-statement">
			<small>&copy; Copyright {currentYear}, Kaung Myat Khaing. </small>
			<small>All Rights Reserved.</small>
		</p>
	);
}

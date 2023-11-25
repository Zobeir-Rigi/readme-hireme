import "../components/header.css";
import { Link } from "react-router-dom";
import imageSrc from "../Pics/cyf-logo.png";
export const Header = () => {
	return (
		<header>
			<Link to={"/"}>
				<img
					className="logo"
					src={imageSrc}
					alt="CYF"
				/>
			</Link>
			<p className="topic">
				<span className="cyf">Reed</span>{" "}
				<span className="progress">Me-Hire Me</span>
			</p>
			<p className="team-name">Techtitans</p>
		</header>
	);
};

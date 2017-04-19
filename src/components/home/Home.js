import React from 'react';
import {Link} from 'react-router-dom';

export default function Home () {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<Link to="/">HOME</Link>
			</div>
			<ul className="linkList">
				<li className="linkList__item"><Link to="/people">people</Link></li>
				<li className="linkList__item"><Link to="/planets">planets</Link></li>
			</ul>
		</nav>
	);
}

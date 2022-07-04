import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const btnPosition = e.target.getBoundingClientRect();
		const centerOfBtn = (btnPosition.left + btnPosition.right) / 2;
		const bottomOfBtn = btnPosition.botton - 3;
		openSubmenu(page, { centerOfBtn, bottomOfBtn });
	};
	const handleMouse = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	};
	return (
		<nav className="nav" onMouseOver={handleMouse}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="stripe" />
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;

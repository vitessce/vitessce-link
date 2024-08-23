import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className={styles.navbarSticky}>
			<div className={styles.navbar}>
				<div className={styles.navbarItems}>
					<Link to="/#?edit=true" className={styles.navbarLogo}>
						<div className={styles.logoImageDiv}>
							<img src="/logo-v.png" alt="Logo" />
						</div>
						<b className={styles.navbarTitle}>VitessceLink</b>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

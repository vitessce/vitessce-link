import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<nav className={styles.navbarSticky}>
			<div className={styles.navbar}>
				<div className={styles.navbarItems}>
					<Link to="/" className={styles.navbarLogo}>
						<div className={styles.logoImageDiv}>
							<img src="logo-v.png" alt="Logo" />
						</div>
						<b className={styles.navbarTitle}>Vitessce Link</b>
					</Link>
				</div>
			</div>
		</nav>
	);
};

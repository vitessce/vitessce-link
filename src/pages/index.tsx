import { Pinpad } from "../components/Pinpad";
import Link from '@docusaurus/Link';
import Layout from "@theme/Layout";
import "../css/index.css";
export default function Home() {
	return (
		<Layout>
			<Pinpad />
			<div className="betaDescriptionContainer removeTopPending">
				<p>
					For more information, please  <Link to="/about">click here</Link>
				</p>
			</div>
		</Layout>
	);
}

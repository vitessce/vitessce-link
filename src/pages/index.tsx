import { Pinpad } from "../components/Pinpad";
import Layout from "@theme/Layout";
import "../css/index.css";
export default function Home() {
	return (
		<Layout>
			<Pinpad />
			<div className="betaDescriptionContainer removeTopPending">
			<p>
			For more information, please <a href="https://hidivelab.org/contact/" className="links" target="_blank"> click here</a>.
			</p>
			</div>
		</Layout>
	);
}

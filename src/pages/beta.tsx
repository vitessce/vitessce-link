import Layout from "@theme/Layout";
import { PageContent } from "../components/PageContent";
import "../css/index.css";
export default function Beta() {
	return (
		<Layout>
			<div className="betaDescriptionContainer">
				<p>
					Our beta program provides early access to new features as they become
					available. Participants are encouraged to provide feedback and can
					<a
						href="https://hidivelab.org/contact/"
						className="links"
						target="_blank"
					>
						{" "}
						contact us{" "}
					</a>
					to join.
				</p>
			</div>
			<PageContent launchTeamId={null} />
		</Layout>
	);
}

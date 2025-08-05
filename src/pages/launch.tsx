import Layout from "@theme/Layout";
import { PageContent } from "../components/PageContent";

const LAUNCH_TEAM_ID = "2373";

export default function Launch() {
	return (
		<Layout>
			<PageContent launchTeamId={LAUNCH_TEAM_ID} />
		</Layout>
	);
}

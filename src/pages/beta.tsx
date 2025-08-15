import Layout from "@theme/Layout";
import { PageContent } from "../components/PageContent";
import clsx from "clsx";

import styles from "../components/ExampleList/ExampleList.module.css";

export default function Beta() {
	return (
		<Layout>
			<p
				className={clsx(styles.demoDescription, {
					[styles.demoDescriptionSmall]: false,
				})}
			>
				Our beta program provides early access to new features as they become
				available. Participants are encouraged to provide feedback and can
				contact us to join.
			</p>
			<PageContent launchTeamId={null} />
		</Layout>
	);
}

import Layout from "@theme/Layout";
import { VITESSCE_SITE } from "../utils/constants";

export default function About() {
	return (
		<Layout>
		<div className="aboutMainContainer">
			<h2>
				Vitessce Link is a mixed reality and 2D display hybrid approach for
				visual analysis of 3D tissue maps
			</h2>
			<div className="aboutTwoColSectionContainer">
				<div className="aboutTwoColSectionContainerImage">
					<img src="/img/overview.png" alt="Vitessce Link Overview" />
				</div>
				<div className="aboutTwoColSectionContainerText">
					<p>
						Vitessce Link enables exploration of spatially resolved 3D tissue
						maps using hand gestures and head movement in mixed reality headset,
						whereas controlling channels, thresholds, and filters is
						accomplished in a Vitessce instance on a laptop or desktop computer.{" "}
					</p>
					<p>
						Built into the{" "}
						<a href={VITESSCE_SITE} target="_blank">
							Vitessce
						</a>{" "}
						platform, Vitessce Link supports integrated visualization of raw and
						processed spatial omics data and is compatible with both standard 2D
						displays and commercially available mixed reality headsets such as
						Meta Quest 3, Meta Quest Pro, Microsoft Hololens and others.
					</p>
				</div>
			</div>

			<div className="aboutSectionContainer">
				<h3>Vitessce Link in Action </h3>
				<div className="aboutCaseStudyContainer">
					<a
						className="aboutCaseStudyCell"
						href="https://vitessce.io/#?dataset=jain-2024"
						aria-label="Go to Case study One"
						target="_blank"
					>
						<img src="/img/Case1.png" alt="Case-study One" loading="lazy" />
					</a>

					<a
						className="aboutCaseStudyCell"
						href="https://vitessce.io/#?dataset=sorger-2024-4"
						aria-label="Go to Case study Two"
						target="_blank"
					>
						<img src="/img/Case2.png" alt="Case-study Two" loading="lazy" />
					</a>

					<a
						className="aboutCaseStudyCell"
						href="https://vitessce.io/#?dataset=jain-2024"
						aria-label="Go to Case study Three"
						target="_blank"
					>
						<img src="/img/Case3.png" alt="Case-study Three" loading="lazy" />
					</a>

					<a
						className="aboutCaseStudyCell"
						href="https://vitessce.io/#?dataset=sorger-2024-2"
						aria-label="Go to Case study Four"
						target="_blank"
					>
						<img src="/img/Case4.png" alt="Case-study Four" loading="lazy" />
					</a>
				</div>
			</div>

			<div className="aboutSectionContainer">
				<h3>Video of the Approach</h3>
				<div className="aboutVideo">
					<iframe
						src="https://www.youtube-nocookie.com/embed/nTlybrJugCE?rel=0"
						title="Vitessce Link"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						loading="lazy"
					/>
				</div>
			</div>

			<div className="aboutSectionContainer">
				<h3>Your Analysis Journey, Reimagined</h3>
				<h4>From Data to Discovery</h4>
				<div className="aboutTasksImage">
				<img className="themeImg--light" src="/img/Tasks-light.png" alt="Steps" />
				<img className="themeImg--dark"  src="/img/Tasks-dark.png"  alt="Steps" />
				</div>

				<p>
					Our tool empowers domain experts to seamlessly move through the full
					analysis journey: from exploring rich volumetric data, to assessing
					segmentation quality, to uncovering correlations between derived and
					imaging data, and ultimately creating new insights interactively. Each
					step is designed to build on the last, turning complex data into
					discoveries with ease.
				</p>
			</div>

			<div className="aboutSectionContainer">
				<h4 className="noBottomMargin">What do you need to get started?</h4>
				<p className="italicFont">
					Compatible with both standard 2D displays and commercially available
					mixed reality headsets such as Meta Quest 3, Meta Quest Pro, Microsoft
					Hololens and others.
				</p>
			</div>
		</div>
		</Layout>
	);
}

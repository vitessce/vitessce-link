import Layout from "@theme/Layout";
import { VITESSCE_SITE } from "../utils/constants";

const PAPER_DOI_URL = "https://www.nature.com/articles/s41592-024-02436-x";

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
							maps using hand gestures and head movement in mixed reality
							headset, whereas controlling channels, thresholds, and filters is
							accomplished in a Vitessce instance on a laptop or desktop
							computer.{" "}
						</p>
						<p>
							Built into the{" "}
							<a href={VITESSCE_SITE} target="_blank">
								Vitessce
							</a>{" "}
							platform, Vitessce Link supports integrated visualization of raw
							and processed spatial omics data and is compatible with both
							standard 2D displays and commercially available mixed reality
							headsets such as Meta Quest 3, Meta Quest Pro, Microsoft Hololens
							and others.
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
						<img
							className="themeImg--light"
							src="/img/Tasks-light.png"
							alt="Steps"
						/>
						<img
							className="themeImg--dark"
							src="/img/Tasks-dark.png"
							alt="Steps"
						/>
					</div>

					<p>
						Our tool empowers domain experts to seamlessly move through the full
						analysis journey: from exploring rich volumetric data, to assessing
						segmentation quality, to uncovering correlations between derived and
						imaging data, and ultimately creating new insights interactively.
						Each step is designed to build on the last, turning complex data
						into discoveries with ease.
					</p>
				</div>

				<div className="aboutSectionContainer">
					<h4 className="noBottomMargin">What do you need to get started?</h4>
					<p className="italicFont">
						Compatible with both standard 2D displays and commercially available
						mixed reality headsets such as Meta Quest 3, Meta Quest Pro,
						Microsoft Hololens and others.
					</p>
				</div>

				<div className="aboutSectionContainer">
					<h2> Read the Paper</h2>
				</div>
				<div className="publicationRow">
					<a
						href={PAPER_DOI_URL}
						className="publicationImageLink"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/img/Paper.png"
							alt="Vitessce Link paper first page — Nature Methods 2024"
							className="publicationImage"
							loading="lazy"
						/>
					</a>
					<div className="publicationText">
						<h3 className="publicationTitle">
							Vitessce Link: A Mixed Reality and 2D Display Hybrid Approach for
							Visual Analysis of 3D Tissue Maps
						</h3>
						<p className="publicationAuthors">
							Mörth, E., Turner, M.L., Nielsen, C., Liu, X.C., Keller, M., Choy,
							L., Conroy, J., Kakar, T., Yapp, C., Wong, A. and Sorger, P, Liam
							McLaughlin‖, L., Jain, S., Beyer, J., Pfister, H., Zhu-Tian, C.
							&amp; Gehlenborg, N.
						</p>
						<p className="publicationMeta">
							<em>arXiv preprint</em> arXiv:2511.04262 [cs.HC] (2025) &middot;
							DOI: 10.48550/arXiv.2511.04262
						</p>
						<p className="publicationAbstract">
							Advances in spatial omics and high-resolution imaging have enabled
							the creation of three-dimensional (3D) tissue maps that reveal the
							organization of biological structures, from single cells to
							functional tissue units. These tissue maps provide critical
							advances to human health research as they preserve the spatial
							context and cellular interactions within organs, enabling more
							accurate insights into tissue function, development, and disease1
							. However, despite growing availability of such data, tools for
							integrative, spatial exploration remain limited, particularly when
							combining 3D visualizations with data analysis. Here we introduce{" "}
							<a href="https://vitessce.link/about" target="_blank">
								Vitessce Link
							</a>{" "}
							a web based-hybrid visualization framework that connects 3D mixed
							reality environments with 2D displays (Figure 1a).
						</p>
						<a
							href={PAPER_DOI_URL}
							className="heroCtaPrimary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Read the Paper
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
}

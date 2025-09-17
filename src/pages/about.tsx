import Layout from "@theme/Layout";
// import { PageContent } from "../components/PageContent";
import {VITESSCE_SITE} from '../utils/constants'
export default function Launch() {
	return (
		<Layout>
            <div className="aboutMainContainer">
			    <h2>Vitessce Link is a mixed reality and 2D display hybrid approach for visual analysis of 3D tissue maps</h2>
                <div className="aboutTwoColSectionContainer">
                    <img
                    className="aboutTwoColSectionContainerImg"
                    src="/img/overview.png"
                    alt="Vitessce Link Overview"
                    />
                    <div className="aboutTwoColSectionContainerText">
                        <p>Vitessce Link enables exploration of spatially resolved 3D tissue maps using hand gestures and head movement in mixed reality headset, whereas controlling channels, thresholds, and filters is accomplished in a Vitessce instance on a laptop or desktop computer. </p>
                        <p>Built into the <a href={VITESSCE_SITE} target="_blank">Vitessce</a> platform, Vitessce Link supports integrated visualization of raw and processed spatial omics data and is compatible with both standard 2D displays and commercially available mixed reality headsets such as Meta Quest 3, Meta Quest Pro, Microsoft Hololens and others.</p>
                    </div>
                </div>

                <div className="aboutSectionContainer">
                    <h3>Case Studies</h3>
                    <img
                    src="/img/case-studies.png"
                    alt="Case studies"
                    />
                </div>

                <div className="aboutSectionContainer">
                    <h3>Video of the Approach </h3>
                    <div className="aboutVideo">
                        <iframe
                            src="https://drive.google.com/file/d/1cRe9dQ2uNtHP2rbwu0jj92QbMVrwwFlT/preview"
                            allow="autoplay; fullscreen; picture-in-picture"
                            title="Video"
                        ></iframe>
                    </div>
                </div>

                <div className="aboutSectionContainer">
                    <h4 className="noBottomMargin">What do you need to use Vitessce Link?</h4>
                    <p>Meta Quest 3, Meta Quest Pro, Meta Quest 3SE </p>
                </div>

                <div className="aboutSectionContainer">
                    <h4>What you can do with it?</h4>
                    <img
                    src="/img/steps.png"
                    alt="Steps"
                    />

                </div>
            </div>
		</Layout>
	);
}

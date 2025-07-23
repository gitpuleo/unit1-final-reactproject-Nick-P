import { education } from "../utils/nfpCVData";
import EducationCV from "./EducationCV";
import { workHistory } from "../utils/nfpCVData";
import WorkHistoryCV from "./WorkHistoryCV";
import { myWriting } from "../utils/nfpCVData"
import MyWritingCV from "./MyWritingCV";
import { technicalSkills } from "../utils/nfpCVData";
import TechnicalSkillsCV from "./TechnicalSkillsCV";
import { licensesCertifications } from "../utils/nfpCVData";
import LicensesAndCertificationsCV from "./LicensesAndCertificationsCV";
import { volunteering } from "../utils/nfpCVData";
import VolunteeringCV from "./VolunteeringCV";
import { interests } from "../utils/nfpCVData";
import InterestsCV from "./InterestsCV";
import { myPhotos } from "../utils/nfpCVData";
import MyPhotosCV from './MyPhotosCV';
import './DynamicCVGenerator.css';


//parent component for my various segments of the CV, which will be passed the data from nfpCVData.js through props.
//^This has changed after refactor, clean up code comments
function DynamicCVGenerator(props) {
    
    //Handles conditional rendering
    return(
        <main>
            {props.hasGenerated && props.renderEducation && <EducationCV inputData={education} />}
            
            {props.hasGenerated && props.renderProfessional && (
                <WorkHistoryCV inputData={workHistory.filter(job => job.type === "professional")} />
            )}

            {props.hasGenerated && props.renderService && (
                <WorkHistoryCV inputData={workHistory.filter(job => job.type === "service")} />
            )}

            {props.hasGenerated && props.renderWriting && <MyWritingCV inputData={myWriting} />}
            {props.hasGenerated && props.renderTechskills && <TechnicalSkillsCV inputData={technicalSkills} />}
            {props.hasGenerated && props.renderCertification && <LicensesAndCertificationsCV inputData={licensesCertifications} />}
            {props.hasGenerated && props.renderVolunteering && <VolunteeringCV inputData={volunteering} />} 
            {props.hasGenerated && props.renderInterest && <InterestsCV inputData={interests} />}
            {props.hasGenerated && props.renderPhotos && <MyPhotosCV inputData={myPhotos} />}

        </main>
    );
}

export default DynamicCVGenerator;

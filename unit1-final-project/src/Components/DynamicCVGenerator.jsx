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
import MyPhotsCV from './MyPhotosCV';


//parent component for my various segments of the CV, which will be passed the data from nfpCVData.js through props.
function DynamicCVGenerator() {
    
    return(
        <main>
            <EducationCV inputData={education} />
            <WorkHistoryCV inputData={workHistory} />
            <MyWritingCV inputData={myWriting} />
            <TechnicalSkillsCV inputData={technicalSkills} />
            <LicensesAndCertificationsCV inputData={licensesCertifications} />
            <VolunteeringCV inputData={volunteering} /> 
            <InterestsCV inputData={interests} />
            <MyPhotsCV inputData={myPhotos} />

        </main>
    );
}

export default DynamicCVGenerator;

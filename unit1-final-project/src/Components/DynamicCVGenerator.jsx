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
import ComponentSelector from "./ComponentSelector";
import { useState } from 'react';




//parent component for my various segments of the CV, which will be passed the data from nfpCVData.js through props.
function DynamicCVGenerator() {
    
    //For handling state values passed down to the child component:
    const [renderProfessional, setRenderProfessional] = useState(false);
    const [renderService, setRenderService] = useState(false);
    const [renderEducation, setRenderEducation ] = useState(false);
    const [renderTechskills, setRenderTechskills] = useState(false);
    const [renderCertification, setRenderCertification] = useState(false);
    const [renderVolunteering, setRenderVolunteering] = useState(false);
    const [renderInterest, setRenderInterest] = useState(false);
    const [renderWriting, setRenderWriting] = useState(false);
    const [renderPhotos, setRenderPhotos] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);
    
    return(
        <main>
            {hasGenerated && renderEducation && <EducationCV inputData={education} />}
            
            {hasGenerated && renderProfessional && (
                <WorkHistoryCV inputData={workHistory.filter(job => job.type === "professional")} />
            )}

            {hasGenerated && renderService && (
                <WorkHistoryCV inputData={workHistory.filter(job => job.type === "service")} />
            )}

            {hasGenerated && renderWriting && <MyWritingCV inputData={myWriting} />}
            {hasGenerated && renderTechskills && <TechnicalSkillsCV inputData={technicalSkills} />}
            {hasGenerated && renderCertification && <LicensesAndCertificationsCV inputData={licensesCertifications} />}
            {hasGenerated && renderVolunteering && <VolunteeringCV inputData={volunteering} />} 
            {hasGenerated && renderInterest && <InterestsCV inputData={interests} />}
            {hasGenerated && renderPhotos && <MyPhotosCV inputData={myPhotos} />}
            <ComponentSelector
              renderProfessional={renderProfessional}
              renderService={renderService}
              renderEducation={renderEducation}
              renderTechskills={renderTechskills}
              renderCertification={renderCertification}
              renderVolunteering={renderVolunteering}
              renderInterest={renderInterest}
              renderWriting={renderWriting}
              renderPhotos={renderPhotos}
              hasGenerated={hasGenerated}
              setHasGenerated={setHasGenerated}
              setRenderProfessional={setRenderProfessional}
              setRenderService={setRenderService}
              setRenderEducation={setRenderEducation}
              setRenderTechskills={setRenderTechskills}
              setRenderCertification={setRenderCertification}
              setRenderVolunteering={setRenderVolunteering}
              setRenderInterest={setRenderInterest}
              setRenderWriting={setRenderWriting}
              setRenderPhotos={setRenderPhotos}
            />

        </main>
    );
}

export default DynamicCVGenerator;

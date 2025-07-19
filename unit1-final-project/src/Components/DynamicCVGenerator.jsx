import { education } from "../utils/nfpCVData";
import EducationCV from "./EducationCV";



//parent component for my various segments of the CV, which will be passed the data from nfpCVData.js through props.
function DynamicCVGenerator() {
    
    return(
        <div>
            <EducationCV inputData={education} />

        </div>
    );
}

export default DynamicCVGenerator;

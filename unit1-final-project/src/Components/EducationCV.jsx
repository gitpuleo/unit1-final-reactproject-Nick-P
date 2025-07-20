

//key={index} is for react to track where it is in the array map is working on.
//Make sure any logic is outside of HTML element tags. 

function EducationCV(props) {

    return(
        <div>
            {props.inputData.map((education, index) => (
                <div key={index}> 
                <h2>{education.school} {education.gradYear}</h2>
                <h3>Major: {education.degree}</h3>
                {education.minor && <h3>Minors: {education.minor}</h3>}
                </div>        
            ))}
        </div>
    );
}

export default EducationCV;

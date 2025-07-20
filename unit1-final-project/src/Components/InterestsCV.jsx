
function InterestsCV(props) {

    return (
        <div>
            {props.inputData.map((interest, index) => (
            <div key={index}>   
               <h2>{interest.interest}</h2>
            </div>
            ))}    
            </div>        
    );
}

export default InterestsCV;

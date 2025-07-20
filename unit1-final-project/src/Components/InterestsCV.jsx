
function InterestsCV(props) {

    return (
        <div>
            <div key={index}>
            {props.inputData.map((interest, index) => (
                <h2>{interest.interest}</h2>
            ))}    
            </div>        
        </div>
    );
}

export default InterestsCV;

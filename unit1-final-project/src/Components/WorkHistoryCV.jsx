
function WorkHistory(props) {

    return (
        <div>
            {props.inputData.map((job, index) => (
                <div key={index}>
                    <h2>{job.employer}, {job.location}</h2>
                    <h2></h2>
                </div>        
            ))}
        </div>
    );
}

export default WorkHistory;

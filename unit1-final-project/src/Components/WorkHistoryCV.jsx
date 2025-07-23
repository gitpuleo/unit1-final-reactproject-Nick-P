
function WorkHistoryCV(props) {

    return (
        <div>
            {props.inputData.map((job, index) => (
                <div key={index}>
                    <h2>{job.employer}, {job.location}, {job.dateRange}</h2>
                    <h3>{job.description}</h3>
                </div>        
            ))}
        </div>
    );
}

export default WorkHistoryCV;

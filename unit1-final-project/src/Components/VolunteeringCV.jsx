
function VolunteeringCV(props) {

    return (
        <div>
            <h2>Volunteering</h2>
            {props.inputData.map((volunteer, index) => (
                <div key={index}>
                    <h2>{volunteer.name}, {volunteer.dateRange}</h2>
                    <h3>{volunteer.description}</h3>
                </div>    
            ))}
        </div>
    );
}

export default VolunteeringCV;

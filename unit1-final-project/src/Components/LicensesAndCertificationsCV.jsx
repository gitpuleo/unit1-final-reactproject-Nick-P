
function LicensesAndCertificationsCV(props) {

     return (
        <div>
            <h2>Writing</h2>
            {props.inputData.map((cert, index) => (
                <div key={index}>
                  <h2>{cert.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default LicensesAndCertificationsCV;

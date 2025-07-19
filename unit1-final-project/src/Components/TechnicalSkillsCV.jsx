
function TechnicalSkillsCV(props) {

    return (
        <div>
            {props.inputData.map((skill, index) => (
                <div key={index}>
                    <h2>{skill.skill}, Proficiency: {skill.proficiency}</h2>
                </div>
            ))}
        </div>
    );
}

export default TechnicalSkillsCV;
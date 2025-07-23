import { useState } from "react";

function MultiUseForm(submitBtnText, submitBehavior) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [recordText, setRecordText ] = useState("");

    return (
        
        <form onSubmit={(event) => {event.preventDefault();
            submitBehavior(name, email, recordText)}}>
            <label htmlFor="name-input">Name: </label>
            <input 
            type="text" 
            id="name-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            /> <br/>
            <label htmlFor="email-input">E-mail: </label>
            <input 
            type="email" 
            id="email-input" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            /> <br />
            <label htmlFor="text-input" >Feedback: </label>
            <textarea 
            id="text-input"
            name="feedback-contact"
            value={recordText}
            onChange={(event) => setRecordText(event.target.value)}
            ></textarea><br/>
            <button type="submit">{submitBtnText}</button><br/>
        </form>

        
    );
}

export default MultiUseForm;

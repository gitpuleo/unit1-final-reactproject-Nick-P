import './Contact.css';
import MultiUseForm from '../Components/MultiUseForm';

function Contact() {

    function feedbackFunction(name, email, ) {

    }

    return(
        <div className="contact-form">
            <MultiUseForm 
            submitBtnText={"Submit Query"}
            submitBehavior={feedbackFunction}
            />
            
        </div>
    )
}

export default Contact;

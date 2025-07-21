import './Contact.css';

function Contact() {

    return(
        <div className="contact-form">
            <form>
            
           <label>Name:  </label>
            <input type="text" name="name" />
            <br/>
            <label>E-mail:  </label>
            <input type="email" name="email-form" />
            <br/>
            <label name="text-form">Contact Form:  </label>
             <input type="text" name="contact-form" />
             <br/>
             <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;

import DynamicCVGenerator from '../Components/DynamicCVGenerator'


function LandingPage() {
    return(
        <div className="landing-page">
            <h1>Welcome to Dynamic CV!</h1>
            <h2>Dynamic CV is designed rebalance a broken recruitment process, allowing candidates to supply their full CV, and obligating  </h2>
            <br/>
            <h3> &larr; Choose on the side panel what information you would like to know about--in this case--me.</h3>
            <br/>
            <h3> &larr; Hit the 'Generate' button to render your selected elements.</h3>

            <p>
            Enjoy the concept? Navigate to the License page to download the application for free. Add your data in the CVData.js file in the utils folder to render your own CV. All objects are extensible. See the ReadMe for guidance on substituting your own information. Enjoy.</p>
            <DynamicCVGenerator />
        </div>
    )
}


export default LandingPage;
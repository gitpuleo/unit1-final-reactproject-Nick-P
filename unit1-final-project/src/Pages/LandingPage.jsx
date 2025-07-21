import DynamicCVGenerator from '../Components/DynamicCVGenerator'


function LandingPage() {
    return(
        <div className="landing-page">
            <h1>Welcome to Dynamic CV!</h1>
            <h2>Dynamic CV is designed rebalance a broken recruitment process, allowing candidates to supply their full CV, and  </h2>
            <h3> &larr; Choose on the side panel what information you would like to know about, in this--case--me.</h3>
            <DynamicCVGenerator />
        </div>
    )
}




export default LandingPage;
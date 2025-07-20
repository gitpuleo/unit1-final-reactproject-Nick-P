import './MyPhotos.css';


function MyPhotosCV(props) {

    return (
        <div>
            <h2>Photos</h2>
            {props.inputData.map((photo, index) => (
                <div key={index}>
                    <img src={photo.img} alt={photo.alt} className="photo-box" />
                    <h3>{photo.title}</h3>
                </div>    
            ))}
        </div>
    )
}

export default MyPhotosCV;

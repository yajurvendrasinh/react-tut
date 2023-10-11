import '../styles/imageShow.css';

function ImageShow ( { imageInfo } ) {

    return (
    <div className='image-show'>
        <img src={imageInfo.urls.small} alt={imageInfo.alt_description} />
    </div>)
}

export default ImageShow;
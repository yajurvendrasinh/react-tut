
import ImageShow from './ImageShow';
import '../styles/imageList.css';

function ImageList ({ imageArray }) {

    const imageUrls = imageArray.map((imageElement) => {
        return <ImageShow key={imageElement.id} imageInfo={imageElement}/>
    })

    return (
        <div className='image-list'>
           images : {imageArray.length}
           {imageUrls}
        </div>
    )
}

export default ImageList;
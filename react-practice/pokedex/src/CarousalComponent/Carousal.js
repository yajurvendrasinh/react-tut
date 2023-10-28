import { useState } from 'react';
import './slider.css';

function Carousal({ imageData }) {
  const [ImageIndex, setImageIndex] = useState(0);
  const [ImageComment, setImageComment] = useState(new Map());

  const imgUrls = imageData.map((imageObj) => {
    return (
      <img
        className='slider-img'
        key={imageObj.id}
        src={imageObj.url}
        style={{ translate: `${-100 * ImageIndex}%` }}
      />
    );
  });

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imgUrls.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imgUrls.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  return (
    <div className='slider-container'>
      <div className='img-container'>{imgUrls}</div>
      <p>{ImageIndex}</p>
      <div className='img-button'>
        {imgUrls.map((url, index) => {
          return (
            <button
              onClick={() => {
                setImageIndex(index);
              }}
            >
              {index}
            </button>
          );
        })}
      </div>

      <button onClick={showPreviousImage} className='slider-button left'>
        &#8249;
      </button>
      <button onClick={showNextImage} className='slider-button right'>
        &#8250;
      </button>
    </div>
  );
}

export default Carousal;

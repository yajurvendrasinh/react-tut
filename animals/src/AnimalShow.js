import { useState } from 'react';
import bird from './svg/bird.svg';
import  cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css';

const svMap = { bird, cat, cow, horse, gator, dog }

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1)
    }
    return ( 
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svMap[type]} alt={"image of " + type}/>
            <img className="heart" src={heart} alt="heart" style={{ width : 10 + 10 * clicks + 'px'}} />
        </div>
    )
}

export default AnimalShow;

/**
 * why src={type} not work
 * how are clicks isolated
 */
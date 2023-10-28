// Getting Started
// Hey there! Welcome to DoorDash's frontend interview!

// The purpose of this exercise is for you to build a slideshow that displays the top N images returned from Reddit's /r/dogswithjobs subreddit!

// The goal here is not to purely demonstrate your coding ability, we're here to give you a problem that's not totally spec'd out for you, and we want to see how far you can go.

// How good can you make it without much guidance?
// What are the sort of improvements and choices you'll make as you build this, and where do your priorities lie?

// In the interest of time, we are providing the basic functionality for fetching the images from the reddit channel, check the dogapi.js file for more details.

// Remember, building stuff is supposed to be fun, so be creative! Happy coding!

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getDogs } from './dogapi';
import './styles.css';

// TODO replace with your slideshow App
const App = () => {
  const [dogs, setDogs] = useState([]);
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState({});
  const [commentScores, setCommentScores] = useState({});

  // {[url]: {[commentText]: score}}

  const dogUrl = dogs[currentDogIndex]?.url;
  const dogTitle = dogs[currentDogIndex]?.title;

  const getDogs = (length = 10) => {
    return fetch(`https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`)
      .then((response) => response.json())
      .then((response) => {
        const dogs = [];
        response.data.children.forEach((c) => {
          const title = c.data.title;
          const url = c.data.preview?.images[0]?.resolutions[2]?.url;
          if (url) {
            dogs.push({ title: title, url: url.replaceAll('&amp;', '&') });
          }
        });
        return dogs.slice(0, length); // remove the extra dogs
      });
  };

  const onUpvote = (e, comment) => {
    e.preventDefault();
    // console.log(comment)
    setCommentScores((prev) => {
      let newScore = null;
      if (prev[comment]) {
        newScore = prev[comment] + 1;
      } else {
        newScore = 1;
      }

      return { ...prev, [comment]: newScore };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("form submit", e);
    addComment();
  };

  const addComment = () => {
    setComments((prev) => {
      const prevComments = prev[dogUrl] ? prev[dogUrl] : [];
      const newComments = [...prevComments, comment];
      return { ...prev, [dogUrl]: newComments };
    });
    setComment('');
  };

  const onCommentInput = (e) => {
    setComment(e.target.value);
  };

  // console.log(dogs[currentDogIndex]);

  useEffect(() => {
    setLoading(true);
    getDogs()
      .then((res) => {
        setLoading(false);
        setDogs(res);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const nextDog = () => {
    if (currentDogIndex === dogs.length - 1) {
      return;
    }
    setCurrentDogIndex((prevIndex) => prevIndex + 1);
  };

  const prevDog = () => {
    if (currentDogIndex === 0) {
      return;
    }
    setCurrentDogIndex((prevIndex) => prevIndex - 1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='img-container'>
        {loading ? (
          <div>loading</div>
        ) : (
          <img className='dog-img' alt={dogTitle} src={dogUrl} />
        )}
      </div>
      <footer className='nav-btns'>
        <button className='nav-btn' onClick={prevDog}>
          {'<'}
        </button>
        <span>{dogTitle}</span>
        <button className='nav-btn' onClick={nextDog}>
          {'>'}
        </button>
      </footer>
      <section className='comments'>
        <div>
          <form onSubmit={onFormSubmit}>
            <input
              id='comment-input'
              onInput={onCommentInput}
              value={comment}
            ></input>
          </form>
          {comments[dogUrl]
            ? comments[dogUrl].map((comment) => (
                <li className='comment'>
                  <div>{comment}</div>
                  <span>{commentScores[comment]}</span>
                  <button
                    key={comment}
                    onClick={(e) => {
                      onUpvote(e, comment);
                    }}
                  >
                    upvote
                  </button>
                </li>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// on intial mount fetch list of dog images
// state currentDogIndex
// 2 buttons at the bottom, increment and decrement dog
// remove list styles
// add comment on enter press instead of button

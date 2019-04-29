import React, { Component, useState, useEffect, useRef } from 'react';
import { action, createStore, StoreProvider, useStore, useActions } from 'easy-peasy';

import './login_signup_style.css';
import photo_1 from '../../assets/index.svg'
import photo_2 from '../../assets/index2.svg'
import photo_3 from '../../assets/index3.svg'

const slidePhotos = [{ PHOTO: photo_1, DATA: "Organise and Connect", SUBDATA: "Organise events or meet-ups and connect with people" }, { PHOTO: photo_2, DATA: "Explore & attend", SUBDATA: "Search and attend near by events" }, { PHOTO: photo_3, DATA: "Plan and Execute", SUBDATA: "Plan and execute events in your budget" }]
const totalSlides = 3;

function LoginSingUpPage(props) {

  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(1);
  const timer = useRef();

  function tick() {
    if (count < 3) {
      setCount(count + 1)
      nextSlide()
    }
    else {
      setCount(1)
    }
  }

  function startTimer() {
    timer.current = setInterval(tick, 2000)
  }


  function nextSlide() {
    setPosition(((position) + 1) % totalSlides)
  }

  function prevSlide() {
    setPosition((position + totalSlides - 1) % totalSlides)
  }

  function setSlide(position) {
    setPosition(position)
  }

  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  return (
    <div>
      <div>
        <div className="slideshow-container">

          <div className="mySlides fade" id="one">
            <img src={slidePhotos[position].PHOTO}></img>
            <h3>{slidePhotos[position].DATA}</h3>
            <div className="text"><p></p>{slidePhotos[position].SUBDATA}</div>
          </div>
        </div>

        <div>
          <span className="dot" onClick={() => this.setSlide(0)}></span>
          <span className="dot" onClick={() => this.setSlide(1)}></span>
          <span className="dot" onClick={() => this.setSlide(2)}></span>
        </div>

      </div>

      <div className="container">

        {
          user
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }

        <div className="col">
          <a href="#" className="fb btn">
            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
          <a href="#" className="twitter btn">
            <i className="fa fa-twitter fa-fw"></i> Login with twitter
            </a>
          <a href="#" className="google btn" onClick={signInWithGoogle}><i className="fa fa-google fa-fw">
          </i> Login with Google+
            </a>
        </div>
      </div>

    </div>
  )
}

export default LoginSingUpPage;

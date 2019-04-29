import React, { Component } from 'react';
import './login_signup_style.css';
import photo_1 from '../../assets/index.svg'
import photo_2 from '../../assets/index2.svg'
import photo_3 from '../../assets/index3.svg'

const totalSlides = 3;
const slidePhotos = [{ PHOTO: photo_1, DATA: "Organise and Connect" ,SUBDATA:"Organise events or meet-ups and connect with people" }, { PHOTO: photo_2, DATA: "Explore & attend",SUBDATA:"Search and attend near by events" }, { PHOTO: photo_3, DATA: "Plan and Execute",SUBDATA:"Plan and execute events in your budget" }]

class loginSingUpPage extends Component {

  constructor(params) {
    super(params)
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.setSlide = this.setSlide.bind(this)
    this.startTimer = this.startTimer.bind(this);
  }

  state = {
    position: 0,
    count : 1
  }

  tick () {
    if(this.state.count < 3){
          this.setState({count: (this.state.count + 1)})
          this.nextSlide()
    }
    else (
    this.state.count = 1)
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 2000)
  }
  

  nextSlide() {
    this.setState((state) => {
      return {
        position: ((state.position) + 1) % totalSlides
      }
    })
  }

  prevSlide() {
    this.setState((state) => {
      return {
        position: (state.position + totalSlides - 1) % totalSlides
      }
    })
  }

  componentDidMount() {
    window.addEventListener('load', this.startTimer);
 }


  setSlide(position) {
    console.log(position);
    this.setState({
      position: position
    })
  }

  

  render() {
    const { position } = this.state;

    console.log(this.state);

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

          <div className="col">
            <a href="#" className="fb btn">
              <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a href="#" className="twitter btn">
              <i className="fa fa-twitter fa-fw"></i> Login with twitter
            </a>
            <a href="#" className="google btn"><i className="fa fa-google fa-fw">
            </i> Login with Google+
            </a>
          </div>

        </div>

      </div>
    )
  }
}

export default loginSingUpPage
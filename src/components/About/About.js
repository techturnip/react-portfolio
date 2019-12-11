import React from 'react'
import aboutSvg from './about.svg'
import me from './me.jpg'

export default function About(props) {
  return (
    <section style={props.bgSvg(aboutSvg)} className="about">
      <div className="about-content-wrapper white-box fade-in">
        <div>
          <h2 className="about-title">About Me</h2>
          <p>
            I've been working with HTML/CSS for over a decade. I have experience
            working with HTML &amp; CSS frameworks such as Bootstrap and
            Materialize CSS, content management systems such as WordPress, and
            JavaScript libraries/frameworks like React and Angular 2+.
          </p>
        </div>
        <img className="about-img img-circle" alt="Tyler Turnipseed" src={me} />
      </div>
    </section>
  )
}

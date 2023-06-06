'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/router'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    const check = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    console.log(check.exec(email))

    if (check.exec(email)) {
      console.log('email passes')
      setError('')
    }
    else {
      console.log('didnt pass, error')
      setError('Please provide a valid email')
    }
  }
  // 2 main divs: hero / img
  return (
    <div className='card'>
      <div className='hero-container'>

          <div className='logo'>
            <img src='logo.svg'/>
          </div>

          <img className='img-pic-tag-imgmbl' id='mobile' src='hero-mobile.jpg' alt='mobile-img'/>
          
          <div className='hero-details'>
            <div className='hero-title'>
              <h1 className=''><span>WE'RE</span><br></br>COMING <br></br> SOON</h1>
              <p className=''> Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. </p>
            </div>

            <div className='email-border'>
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  type='email' 
                  name='email'
                  placeholder='Email Address'
                />
                { error !== '' ? <img className='error-icon' src='icon-error.svg' alt='error-btn'/> : '' }
                <button className='email-button' onClick={handleSubmit}>
                  <img src='icon-arrow.svg'/>
                </button>
            </div>

            <div className='error'>
              { error !== '' ? <span className='error-msg'>{error}</span> : '' }
            </div>
          </div>
      </div>

      <div className='img-container'>
        <img className='img-pic-tag-imgdesk' id='desk' src='hero-desktop.jpg' alt='desktop-img'/>
      </div>
  </div>
  )
}

export default Hero
'use client'
import React from 'react'
import Hero from '@/components/Hero'

const page = () => {

  return (
    // <div className='card'>

    // hi
    // </div>
        <div className='card'>
            {/* <div className='logo'>
              <img src='logo.svg'/>
            </div> */}

            <Hero />

            {/* <div className='img-container'>

              <picture className='img-pic-tag'>
                <source className='img-pic-tag-imgdesk' srcSet='hero-desktop.jpg' alt='desktop-img' media='(min-width: 380px)'/>
                <img className='img-pic-tag-imgmbl' src='hero-mobile.jpg' alt='mobile-img'/>
              </picture>
            </div> */}
        </div>

  )
}

export default page
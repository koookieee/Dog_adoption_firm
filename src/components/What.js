import React from 'react'
import "./what.css"
import gg from "../images/gg.gif"

const What = () => {
  return (
    <div className='colm'>
       <section className='sectionw'>
    <div className='aboutdivw'>
        <h2><h2 className='stickw'>What do we do?</h2></h2>
         <p className='pw'>At our dog adoption site, we are dedicated to finding loving homes for our furry friends. We provide a platform where prospective adopters can browse through profiles of adorable dogs in need of a forever family. Our team works tirelessly to ensure the well-being and happiness of each dog in our care.

We go the extra mile to ensure the adoption process is smooth and seamless. Our knowledgeable staff is always ready to answer any questions and guide you through the adoption journey. We conduct thorough screenings and home visits to ensure that our dogs are placed in safe and suitable environments.

We believe in the power of education, and we provide resources and guidance to adopters on dog care, training, and transitioning to a new home. Our commitment doesn't end with the adoption; we offer post-adoption support and advice to ensure a successful and lifelong bond between you and your new furry family member.

By choosing to adopt from us, you are not only giving a deserving dog a second chance at happiness but also experiencing the unconditional love and joy that only a dog can bring into your life. Together, let's make a difference and create countless heartwarming stories of love and companionship through dog adoption.</p>
<div className='ii'><img src={gg} className='x' height="50%" width="50%"/></div>  
    </div>
    </section>
    </div>
  )
}

export default What

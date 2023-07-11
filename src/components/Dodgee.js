import React from 'react'
import "./dodgee.css"
import logo from "../images/logo.jpg"
const Dodgee = () => {



    function toggleCard() {
        var card = document.getElementById('card');
        card.classList.toggle('expanded');
        var cardContent = document.getElementById('card-content');
        if (card.classList.contains('expanded')) {
          cardContent.innerHTML = "This is the expanded content of the card.";
        } else {
          cardContent.innerHTML = "";
        }
      }

  return (
    <section>

<div id="card" className="card" onClick={toggleCard}>
    <img src={logo} alt="Card Image" width="200" height="200" className='imgg'/>
    <div id="card-content" className="card-content"></div>

  </div>

  











    </section>
  )
}

export default Dodgee

import React from 'react'
import './Home.css';
import Banner from './Banner'
import card from './Card'

function Home() {
  return (
    <div className='home'>
        <h1>Home component</h1>
        <Banner/>
        <div className = 'home__secttion'>

          <card />
          <card />
          <card />

        </div>

        <div className = 'home__secttion'>

          <card />
          <card />
          <card />

        </div>


      
    </div>
  )
}

export default Home

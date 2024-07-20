import React from 'react'
import WhoweAre from '../../components/Whowe/WhoweAre'
import Banner from '../../components/Banner/Banner'
import Abouts from '../../components/Abouts/Abouts'
import WeOffer from '../../components/WeOffer/WeOffer'
import Invest from '../../components/InvestWIthUs/Invest'
import AppsBanner from '../../components/AppsBanner/AppsBanner'
import ExploreTrading from '../../components/ExploreTrading/ExploreTrading'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div className='mt-24'>
        <Banner/>
        <WhoweAre/>
        <Abouts/>
        <WeOffer/>
        <Invest/>
        <ExploreTrading/>
        <AppsBanner/>
        <Footer/>
    
        
      
    </div>
  )
}

export default Home

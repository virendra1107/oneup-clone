import React from 'react';
import AnimationPage from './components/Hero/AnimationPage';
import Background from './components/Hero/Background';
import Navbar from './components/Hero/Navbar';
import SecondPage from './components/SecondPage';
import GridImage from './components/GridImage';
import AnimationCounter from './components/AnimationCounter';
import HoverAim from './components/HoverAim';
import TransparentText from './components/TransparentText';
import Avatars from './components/Avatars';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
    <div className='bg-black'>
      <Background/>
      <AnimationPage/>
      <Navbar/>
    </div>
    <SecondPage />
    <GridImage />
    <AnimationCounter />
    <HoverAim />
    <TransparentText />
    <Avatars />
    <Footer />
    </>
  )
}

export default App
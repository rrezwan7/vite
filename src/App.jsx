import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/Hero';
import Header from './component/Header';
import Contact from './component/Contact';
import Footer from './component/footer';



// function App() {

//   return (

//     <div>
//       <Header />
//       <Hero />
//       <Contact />
//       <Footer />
//     </div>


//   )
// }

// export default App

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


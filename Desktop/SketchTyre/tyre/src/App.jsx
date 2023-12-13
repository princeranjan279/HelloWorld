// import React from 'react'
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Home from "./Home"
// import Services from "./Services"
// import Products from "./Products"
// import Industries from "./Industries"
// import About from "./About"
// import Nav from "./nav"
// const App = () => {
//   return (
//     <section>
//       <article>
//         <Router>
//         <Nav/>
//             <Routes>
//               <Route path='/Home' element={<Home/>}/>
//                <Route path='/Services' element={<Services/>}/>
//               <Route path='/Products' element={<Products/>}/>
//               <Route path='/Industries' element={<Industries/>}/>
//               <Route path='/About' element={<About/>}/>
//             </Routes>
//         </Router>
        
//       </article>    
//     </section>
//   )
// }

// export default App


// App.js


import React from 'react';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

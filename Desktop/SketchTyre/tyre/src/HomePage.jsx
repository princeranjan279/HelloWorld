import React from 'react';
import './HomePage.css'; // Import your CSS file
import Slider from "./Slider"
import Img1 from "./icons8-tire-50.png"
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import Img2 from "./p2.jpg"
import Img3 from "./1img.jpg"
import Img4 from "./p3.jpg"

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="logo"><img src={Img1} alt='Img1' style={{height:"100px", width:"100px"}}/></div>
        <nav>
          <ul><br/>
          <h1 className="ch">CHOOSE A TYRE</h1><br/>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/truck.svg" alt="truck"/><br/><span className="nav-item">TRUCKS</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/bike.svg" alt="bike"/><br/><span className="nav-item">BIKES</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/car-active.svg" alt="car"/><br/><span className="nav-item">CARS</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/farm.svg" alt="Farm"/><br/><span className="nav-item">FARMS</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/three-wheeler-active.svg" alt="three wheeler"/><br/><span className="nav-item">3-WHEELERS</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/otr.svg" alt="otr"/><br/><span className="nav-item">OTRS</span></a></li>
            <li><a href="#"><img src="https://www.mrftyres.com/images/svg/pickup-van.svg" alt="pickup van"/><br/><span className="nav-item">PICK-UP</span></a></li>
          </ul>
        </nav>
      </header>      
      <Slider/>
     <div className='body1'>
      <section className="about">
        <h2>About Us</h2>
        <p>Advanced Traction Technology: Sketcher Tyres are engineered with cutting-edge traction technology, ensuring optimal grip on various road surfaces. Experience confidence and control in every turn.

        Longevity and Durability: Our tires are designed to withstand the test of time. With a focus on durability, Sketcher Tyres offer extended tread life, providing you with reliable performance mile after mile.
        
        Fuel Efficiency: We understand the importance of fuel efficiency in today's world. Sketcher Tyres are designed to minimize rolling resistance, contributing to improved fuel economy without compromising on performance.
        
        Safety First: Your safety is our top priority. Sketcher Tyres undergo rigorous testing to meet and exceed safety standards. Drive with peace of mind, knowing that you have a reliable and secure grip on the road.
        
        Stylish Design: Beyond performance, our tires boast a stylish and modern design. Elevate the aesthetics of your vehicle while enjoying the superior performance that Sketcher Tyre offers.</p>

        <p>Our customers' satisfaction is at the core of what we do. The positive feedback we receive reflects the trust and confidence that drivers place in Sketcher Tyre. Join our community of satisfied customers who have experienced the Sketcher difference.

        Choose Sketcher Tyre for a driving experience that goes beyond expectations — where innovation meets the road.</p>
      </section>

      <section className="testimonials">
        <div><img src={Img2} alt='Img2' style={{height:"100px", width:"100px"}}/></div><br/>
        <div><img src={Img3} alt="Img3" style={{height:"50px" , width:"50px"}}/></div>
        <div><p>"I've been a loyal customer of "Sketcher Tyre" for several years, and I can confidently say that their tires are exceptional. 
        The performance and durability of their products have consistently exceeded my expectations."</p></div>
        <div><img src={Img4} alt='Img4'style={{height:"100px",width:"100px"}}/></div><br/>
        <div><img src={Img3} alt="Img3" style={{height:"50px" , width:"50px"}}/></div>
        <div><p>"Whether it's for my daily commute or long road trips, I trust "Sketcher Tyre" to provide me with tires that deliver a smooth and comfortable ride. The grip and handling, especially in challenging weather conditions, 
        showcase the high quality and advanced technology incorporated into their tire designs."</p></div>
      </section>

      <section className="contact">
        <h2>Contact Information</h2>
        <p>Email-Id: <a href=''>sketcher@tyre.com</a></p><br/>
        Mob No:7298459845
      </section>
</div>
      <footer>
       <div className='foot'>
           <div className='footleft'>
               <img src={Img1} alt='Img1' style={{height:"100px", width:"100px"}}/><p>Sketcher Tyres is an Indian multinational and India’s largest tyre maker,headquartered in Chennai, India</p><br/>
               <div className='ser'><a href=''><TbBrandFacebookFilled style={{height:"30px",width:"30px",margin:"5px",color:"black"}}/></a>
                  <a href=''><FaXTwitter style={{height:"30px",width:"30px", margin:"5px",color:"black"}} /></a>
                  <a href=''><FaInstagram style={{height:"30px",width:"30px", margin:"5px",color:"black"}}/></a>
                  <a href=''><GrYoutube style={{height:"30px",width:"30px", margin:"5px",color:"black"}}/></a>
               </div>

           </div>
           <div className='footright'>
               <div><b>WHO WE ARE</b></div><br/>
               <div>Milestones</div>
               <div>Awards  &  Achievements</div>
               <div>Research & Design</div>
               <div>Careers</div>
               <div>Our Presence</div>
           </div>
           <div className='footright'>
              <div><b>Products</b></div><br/>
              <div>Tyres</div>
              <div>Sports Goods</div>
              <div>Funskool</div>
              <div>Paints & Coats</div>
              <div>PreTraders</div>
              <div>International Bussiness</div>
              <div>Business Opportunities</div>
              <div>Sketcher India</div>
           </div>
           <div className='footright'>
              <div><b>SERVICES</b></div><br/>
              <div>T & S</div>
              <div>Tire Tok</div>
              <div>Tyredrome</div>
              <div>Sketcher FASST</div>
              <div>Muscle Zone</div>
              <div>MIDD</div>
           </div>
           <div className='footright'>
              <div><b>INVESTOR RELATIONS</b></div><br/>
              <div>Shareholder Info</div>
              <div>Financial Results</div>
              <div>Financials of Subsidiary</div>
              <div>Companies</div>
              <div>Equity Shares</div>
              <div>Stock Info</div>
              <div>TDS on Dividend</div>
           </div>
           <div className='footright'>
              <div><b>OUR PASSION</b></div><br/>
              <div>Motor Sports</div>
              <div>Pace Foundation</div>
           </div>
           <div className='footright'>
              <div><b>MEDIA CENTER</b></div><br/>
              <div>Sketcher in the News</div>
              <div>Video Gallery</div>
           </div>
       </div>
        {/* Add social media links here */}
      </footer>
    </div>
  );
};

export default HomePage;

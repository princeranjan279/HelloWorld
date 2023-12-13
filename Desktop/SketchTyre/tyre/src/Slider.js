import React from 'react'
import HeroSlider, {Slide} from "hero-slider"

const img1="https://tyresuggest.com/wp-content/uploads/2023/05/Bike-home-1024x682.webp";
const img2="https://engineeringlearner.com/wp-content/uploads/2021/04/Types-of-Tyres-1-1024x539.jpg";
const img3="https://tyrewaale.com/blogs/wp-content/uploads/2022/12/Best-Tyre-For-Car-What-are-the-different-types-of-tyres-know-which-tyre-will-be-best-for-your-car.jpg";
const img4="https://carexamer.com/blog/wp-content/uploads/2020/07/IMG-20200720-WA0000-2.jpg";
const img5="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.6435-9/123918993_653951565313013_3750247377289825018_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9a8829&_nc_ohc=sZ0M5l_-uG0AX9Nh17v&_nc_ht=scontent.fpat3-1.fna&oh=00_AfD_EwFw8Br7_CgJNk3C7lqBCTSWVBkH6wqE4tQVoCihzQ&oe=6592A47C";
const App=()=>{
    return(
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide)}
        onChange={nextSlide => console.log("onChange",nextSlide)}
        onAfterChange={nextSlide=>console.log("onAfterChange", nextSlide)}
        style={{backgroundColor:"rgba(0,0,0,0.33)"}}
        settings={{
            slidingDuration:250,
            slidingDelay:100,
            shouldAutoplay:true,
            shouldDisplayButtons:true,
            autoplayDuration:3000,
            hieght:"100vh"
        }}
        >
            <Slide
            background={{
                backgroundImageSrc: img1,
                backgroundAttachment:"fixed" }} />
            <Slide
            background={{
                backgroundImageSrc: img2,
                backgroundAttachment:"fixed" }} />
            <Slide
            background={{
                backgroundImageSrc: img3,
                backgroundAttachment:"fixed" }} />
            <Slide
            background={{
                backgroundImageSrc: img4,
                backgroundAttachment:"fixed" }} />
            <Slide
            background={{
                backgroundImageSrc: img5,
                backgroundAttachment:"fixed" }} />
        </HeroSlider>
    )
}
export default App
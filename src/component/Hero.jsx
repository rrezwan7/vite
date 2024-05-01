import React from 'react';

const Hero = () => {
    let val = 5;
    return (
        <div>
            {(() => val > 9 ? <h1>I am big text</h1> : <h4>I am smaller text</h4>)()}
            <h1>This a Hero Slider</h1>
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_pro_web_271123.webp" sizes="250px" />

        </div>
    );
};

export default Hero;

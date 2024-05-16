import React from "react";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '1000px'
}
const slideImages = [
    {
        url: 'https://telecominternet.com.br/site/wp-content/uploads/2023/03/plano-30mb-e1681046539700.png',
    },
    {
        url: 'https://cdn-sites-images.46graus.com/files/photos/14571ed7/e7e0d229-1cfe-40dc-8be8-2a96693171e8/banner2-1000x306.jpg',
    },
    {
        url: 'https://telecominternet.com.br/site/wp-content/uploads/2023/03/600mb-1-e1681046611117.png',
    },
];

function Slider() {
    return (
        <div className="slide-container">
            <Slide >
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slider
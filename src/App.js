import React from "react";
import data from "./data/data.json";
import Slider from "react-slick";

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className='p-10'>
            <h1 className='text-center text-5xl text-green-400 font-bold'>
                Rick and Morty - Character Slider
            </h1>
            <div className='text-center'>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div className='max-w-sm relative' key={index}>
                                <img
                                    src={require(`./assets/images/${item.img}`)}
                                    alt=''
                                    className='width-full relative z-10 slider-img'
                                />
                                <div
                                    className={`text-center font-bold text-2xl relative z-10 text-${item.color}-200`}
                                >
                                    {item.name}
                                </div>
                                <div
                                    className={`absolute left-0 right-0 bottom-0 top-1/3 bg-${item.color}-400  rounded-lg z-0 shadow-lg`}
                                ></div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default App;

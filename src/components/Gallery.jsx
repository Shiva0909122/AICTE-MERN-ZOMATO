import React, { useEffect, useRef } from "react";
import "./Gallery.css"; // Import the CSS file

const foodItems = [
    { name: "Butter Chicken", img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Chole Bhature", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Tandoori Chicken", img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Misal Pav", img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Paratha with Curd", img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Puran Poli", img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Biryani", img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Masala Dosa", img: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Idli Sambar", img: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Poha", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Rosogolla", img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Fish Curry", img: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Vada Pav", img: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Pav Bhaji", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Bombay Sandwich", img: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Seafood Thali", img: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Hyderabadi Biryani", img: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Irani Chai", img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Double Ka Meetha", img: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Mirchi Bajji", img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const Gallery = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let interval;

        const startAutoScroll = () => {
            interval = setInterval(() => {
                if (slider) {
                    slider.scrollLeft += 2; // Adjust speed
                    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                        slider.scrollLeft = 0; // Loop back to the start
                    }
                }
            }, 20); // Adjust speed
        };

        startAutoScroll();

        slider.addEventListener("mouseenter", () => clearInterval(interval));
        slider.addEventListener("mouseleave", startAutoScroll);

        return () => {
            clearInterval(interval);
            slider.removeEventListener("mouseenter", () => clearInterval(interval));
            slider.removeEventListener("mouseleave", startAutoScroll);
        };
    }, []);

    return (
        <div className="gallery-container" ref={sliderRef}>
            {foodItems.map((item, index) => (
                <div className="gallery-item" key={index}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
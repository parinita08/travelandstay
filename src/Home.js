import React, { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import data from './data/home.json';
// import { motion } from 'framer-motion';

function Home({d}) {
  const { handleLogout } = useContext(AuthenticationContext);
  console.log(data);
  
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
      {data.map((item) => (
          
          <Card
          src = {item.src}
          title={item.title}
          description={item.description}
          price={item.price}
        />
        ))
      }
        {/* <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        /> */}
        {/* <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Villas"
          description="Comfortable private places, with room for friends or family."
        /> */}3
      </div>
      <div className="home__section">
      {data.map((item) => (
          
          <Card
          src = {item.src}
          title={item.title}
          description={item.description}
          price={item.price}
        />
        ))
      }
        {/* <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Goa"
          description="Superhost with a stunning view of the beachside in Sunny Goa"
          price="₹1300/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in Mumbai"
          description="Enjoy the amazing sights of Juhu beach with this stunning penthouse"
          price="₹3500/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="₹700/night"
        /> */}
        {/* <button onClick={handleLogout}>Log out</button> */}
      </div>
    </div>
  );

}

export default Home;

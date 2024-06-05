import React from "react";
import "./ProjectShowcase.css";

const Card = ({ icon, title, description, imgLink, linkText1, linkText2, linkText3, linkText4,headingtext }) => {
  return (
    <div className="card">
<h2>{headingtext}</h2>
    <div className="face face1">
        <div className="content">
          <i className={icon}></i>
          <img className="imgs" src={imgLink} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>{description}</p>
          <a href="https://premsinghuk.github.io/todo-list/" target="_main" type="button">{linkText1}</a>
          <a href="https://github.com/PremSinghUk/react-portfolio" target="_main" type="button">{linkText2}</a>
         <a href="https://premsinghuk.github.io/weather-app-js/" target="_main" type="button">{linkText3}</a>
         <a href="https://premsinghuk.github.io/Tic-Tac-Toe" target="_main" type="button">{linkText4}</a>


      


        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container-a">
      <Card
      headingtext={"TodoList"}
        icon="fab fa-windows"
        imgLink={"https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/104-1024.png"}
     
        description="created a to-do list with HTML, CSS and JavaScript."
        linkText1="CLICK TO REDIRECT GITHUB"
      />
      <Card
      headingtext={"Portfolio"}

        icon="fab fa-android"
        imgLink={"https://th.bing.com/th/id/OIP.5r8Q-LaQKPH4EVMYxsOgjQAAAA?rs=1&pid=ImgDetMain"}
        
        description="created a Portfolio with React, CSS and JavaScript."
        linkText2="CLICK TO REDIRECT GITHUB"
      />
      <Card
      headingtext={"Weather-App"}

        icon="fab fa-apple"
        imgLink={"https://th.bing.com/th/id/R.aab08ae6cdc4b1de66d30b47315a1b21?rik=%2btDmmOii9Ok%2fiw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fWeather-Report-PNG-File.png&ehk=hmDt%2fCevPeuREhua569kbfXBiq7PB%2bVZLNZwIgLZuZ0%3d&risl=&pid=ImgRaw&r=0"}


        
        description="created a weather-app with HTML, CSS and JavaScript."
        linkText3="CLICK TO REDIRECT GITHUB"
      />

      <Card
      headingtext={"TIC-TAC-TOE"}

        icon="fab fa-apple"
        imgLink={"https://tse4.mm.bing.net/th?id=OIP.k6MpkytKn5OigQ3SlJ7jegHaHa&pid=Api&P=0&h=180"}


        
        description="created a TIC-TAC-TOE with HTML, CSS and JavaScript."
        linkText4="CLICK TO REDIRECT GITHUB"
      />

      
    </div>
  );
};

export default Cards;
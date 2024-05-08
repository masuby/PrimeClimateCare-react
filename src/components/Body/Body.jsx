import React, { useState } from 'react';
import "./Body.css";



const Body = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className='body-container'>
      <div class="container-box1">
          <h1>Fostering Climate Resilience and Sustainability</h1>
        </div>
      <ul><h1>Core areas:</h1></ul>
      <div class="container-box2">
        <div class="box-1"> 
          <div  class='sub-box'>
            <ul><h3>Climate education</h3></ul>
            <ul>We focus on teaching societies about climate change,
             sustainability, and environmental issues.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Weather and Climate modeling</h3></ul>
            <ul>We use computer simulations to predict weather patterns,
             study climate change impacts, and develop strategies for adaptation.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Climate Services</h3></ul>
            <ul>We provide essential information and tools for individuals and 
            organizations to make informed decisions regarding climate change.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Climate and weather lab</h3></ul>
            <ul>We provide facility where research and experiments are conducted 
            to study atmospheric processes, weather patterns, and climate change impacts.</ul>
          </div>
        </div>
        </div>
        <div class="box-1"> 
          <div  class='sub-box'>
            <ul><h3>Community engagement</h3></ul>
            <ul>We connect with and involving local communities in projects, 
            initiatives, and decision-making processes.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Technological innovation</h3></ul>
            <ul>We create and adopt new technologies to mitigate greenhouse 
            gas emissions, enhance renewable energy sources and develop sustainable 
            solutions for addressing climate-challenges.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Climate Operation</h3></ul>
            <ul>Involves management and execution of strategies, plans, and actions 
            to address climate-related issues and challenges effectively. It encompasses 
            activities such as monitoring climate data.</ul>
          </div>
          <div class="sub-box">
            <ul><h3>Research and Publication</h3></ul>
            <ul>We conduct studies, experiments, and analysis to generate new knowledge and 
            insights related to climate change.</ul>
          </div>
        </div>
      <div class="container-box3">
        <div class="box-2">
        
          <div class="mission">
            <ul><h1>Mission</h1></ul>
            <ul><h3>Ensuring that societies have proper understanding 
            and awareness of climate change, including its impacts,
             for the best daily life and future life on planet earth.</h3></ul>
          </div>
          <div class="vision">
          <ul><h1>Vision</h1></ul>
          <ul><h3>Our vision is to be a global centre of excellence that 
          connects people to promote a healthier climate and sustainable 
          development.</h3></ul>
          </div>
        </div>
      </div>
      <ul><h1 color='black'>Who we work with</h1></ul> 
      <div class="container-box3">
        <div class="box-2">
        <a href='https://www.nestspace.co.tz/' target='_blank' className='netspace'>
          <div>
            <ul><h1>Nestspace</h1></ul>
          </div>
          </a>
          <div class="zipa">
          <ul><h1>Zipa Tech</h1></ul>
          </div>
        </div>
        
      </div>
      <ul><h1>Team Members</h1></ul>
      <div class="container-box4">
        <div class="box-3">
          <div class="sub-box">
            <ul>Nengai Godfrey</ul>
            <ul> A climate scientist with a Bachelors degree in Meteorology. 
            Passionate about solving the problems exercebated by Climate 
            Change as well as spreading awareness about the geophysics. 
            She is also a scholar at EcoSciGen believing in conducting 
            climate researches as the the necessary actions towards 
            addressing Climate Change.</ul>
          </div>
          <div class="sub-box">
            <ul>Delphina Thobias Gwajekale</ul>
            <ul> An accomplished meteorologist with a Bachelor 
            of Science degree in Meteorology, fluent in English 
            and Kiswahili.</ul>
          </div>
          <div class="sub-box">
            <ul>Tidoson Cleophace</ul>
            <ul>A professional with expertise in geography and environmental
             studies, holding a Bachelor of Arts degree, specializing in data 
             collection, GIS applications, and project planning.</ul>
          </div>
          <div class="sub-box">
            <ul>Stadius Stephen Mtalemwa</ul>
            <ul> An accomplished professional with a Bachelor of Science 
            degree in Meteorology, skilled in data collection, statistical analysis, and programming.</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;


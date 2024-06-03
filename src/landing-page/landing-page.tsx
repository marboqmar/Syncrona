import React from "react";
import Header from "../scss/components/Header";
import { Button } from "../components/atoms";
import Footer from "../scss/components/Footer";



const Landing = () => {
    return (
        <div>
            <Header/>
            <div>
                <h2>Syncrona is here to help you take your organization skills to the next level</h2>
                <p>Say goodbye to boring and complicated organization! With our user-friendly design, managing your schedule has never been easier</p>
                <Button text='Register' type='info'  width={"180px"} height={"50px"}/>
                <img src="./TrelloUICollage_4x 1.png" alt="boards" />
            </div>
            <div>
                <h2>Go with the flow </h2>
                <p>Take your agenda with you everywhere,never forget about a task or a due date with Syncrona</p>
                <img src="./TrelloUICollage_4x 1.png" alt="boards" />
            </div>
            <div>
                <div>
                    <p>Boards</p>
                    <p>Syncrona offers a huge  customization. From task organization to color schemes and labels, users can tailor the platform to their own unique style and workflow with ease.</p>
                    <p>Workflow</p>
                    <p>Our project ensures that customers can work effortlessly and efficiently. Say goodbye to inconvenient processes and hello to smooth productivity with our user-friendly interface.</p>

                </div>
                <div>
                    <p>User interface</p>
                    <p>Syncrona shows an exceptionally intuitive user interface, empowering customers to navigate effortlessly and accomplish tasks with ease. </p>
                    <p>Roles</p>
                    <p>From project managers to contributors, our intuitive interface simplifies role allocation, fostering effective teamwork and streamlined progress.</p>
                </div>
            </div>
            <Footer/>
        </div>
        
        
        
    )
};


export default Landing;
import React from "react";
import Header from "../scss/components/Header";
import { Button, Image } from "../components/atoms";
import Footer from "../scss/components/Footer";
import "./scss/landing_style.scss"
import board_image from "./img-landing/TrelloUICollage_4x_1.png";
import carrousel from "./img-landing/Carousel_Image_Boards_2x 1.png";



const Landing = () => {
    return (
        <div className="overflow__landing_page" >
            <Header  />
            <div className='bg__gradient' >
                <div className="landing__header__white_panel landing__header_wrapper_distribution">
                    <div className= 'landing__header_text_distribution'>
                        <h2 className="landing__input__title">Syncrona is here to help you take your organization skills to the next level</h2>
                        <p className="landing__input__secondary_text">Say goodbye to boring and complicated organization!</p>
                        <Button className="landing__header_button" text='Register' type='primary'  width={"180px"} height={"50px"}/>
                        <p className="landing__input__paragraph">With our user-friendly design, managing your schedule has never been easier</p>
                    </div>
                    <Image
                    src= {board_image}
                    alt='Example of what our boards look like, with three elements, one showing the overall view, the options and a comment of a user about them'
                    width='560 px'
                    ></Image>
                </div>
        </div>

        <div className="bg__regular">
            <div className="landing__wrapper_centered">
                <h2 className="landing_subtitle_pink">Go with the flow </h2>
                <p className="landing__input__paragraph">Take your agenda with you everywhere,never forget about a task or a due date with Syncrona</p>
                <div className="landing__image_wrapper">
                    <Image
                        src= {carrousel}
                        alt='Example of what our boards look like, with three elements, one showing the overall view, the options and a comment of a user about them'
                        width='560 px'
                    ></Image>
                </div>
            </div>
            <div className="landing__image_grid">
                <div>
                    <h3 className="landing__smaller_subtitle_pink">Boards</h3>
                    <p className="landing__input__paragraph">Syncrona offers a huge  customization. From task organization to color schemes and labels, users can tailor the platform to their own unique style and workflow with ease.</p>
                </div>
                <div>
                    <h3 className="landing__smaller_subtitle_pink">Workflow</h3>
                    <p className="landing__input__paragraph">Our project ensures that customers can work effortlessly and efficiently. Say goodbye to inconvenient processes and hello to smooth productivity with our user-friendly interface.</p>
                </div>
                <div>
                <h3 className="landing__smaller_subtitle_pink">User interface</h3>
                    <p className="landing__input__paragraph">Syncrona shows an exceptionally intuitive user interface, empowering customers to navigate effortlessly and accomplish tasks with ease. </p>
                </div>
                <div>
                    <h3 className="landing__smaller_subtitle_pink">Roles</h3>
                    <p className="landing__input__paragraph">From project managers to contributors, our intuitive interface simplifies role allocation, fostering effective teamwork and streamlined progress.</p>
                </div>
        </div>
        </div>
            
            <Footer/>
        </div>
         
        
    )
};


export default Landing;
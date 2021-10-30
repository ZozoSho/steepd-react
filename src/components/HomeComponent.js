import React from "react";
import {  } from 'reactstrap';
import Slideshow from "./SlideshowComponent";

function Home(props) {
    return (
        <div className="container main-row">
            <div className="row home">

                    <Slideshow />

                <div class="col p-0">
                    <a href="custom.html">
                    <div class="row customizer">
                        <h2 class="mx-auto mb-1 text-center customtitle">
                            Create a Custom Tea Blend
                        </h2>
                        <div class="mx-auto">
                            <p class="text-center mb-1"><i>(Click here to start.)</i></p>    
                            <img src="img/tea-663095_640.jpg" alt="custom tea blend" class="img-fluid mx-auto" id="custombannerimg" />
                        </div>    
                    </div>
                    </a>
                <div class="row join">
                    <div class="col-sm-6 col-lg-12 pr-5">
                        <h3 class="join-text">
                            Join our community!
                        </h3>
                        <p>Sign up for 20% off your first order.</p>
                    </div>
                    <div class="col col-sm-6">
                        <button class="btn sign-up" data-toggle="modal" data-target="#signup">Sign Up</button>   
                    </div>                 
                </div>
                    <div class="text-center social">
                        <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
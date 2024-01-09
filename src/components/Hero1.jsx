import React from "react";
import Logo from "../assets/ceo.png";

const Hero = () =>
{
    return(
        <>
            
            <div className="bg-auto sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/003/042/243/small/abstract-blue-grunge-texture-background-free-vector.jpg)]">

                <h1 className="text-center text-6xl font-bold pt-5 text-sky-500 pt-5" >UNCOVER THE FUTURE LEADERS.</h1>
                <center><img className="flex justify-center items-center m-20" src={Logo} alt=""  /></center>
                
                
                <div className="self-center">
                    <div className="flex flex-col w-full sm:w-auto sm:flex-row p-4">
                        <a href="" className="flex flex-row self-center items-center justify-center w-full px-4 py-4 mb-4 text-xl text-white font-sans bg-sky-600 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
                                Register
                        </a>

                        <a href="" className="flex self-center items-center justify-center w-full px-4 py-4 text-xl text-white font-sans leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-blue-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
                            Brochure
                        </a>
                    </div>
                </div>
                    

            </div>
    
        </>

    );
};

export default Hero;
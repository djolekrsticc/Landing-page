import {HiArrowRight} from "react-icons/hi2";
import aboutImg from "/about.svg";

const About = () => {
    return (
        <section className="container mx-auto" id="about">
            <div className="flex flex-col mx-7 justify-between items-center py-5 md:py-20">
                <div className="w-full md:w-5/12 md:mr-10">
                    <div className="flex flex-row items-center my-5 md:my-0">
                        <div className="w-8 md:w-14 h-0.5 bg-slate-800"></div>
                        <p className="ml-4 font-medium text-base md:text-lg text-slate-800">ABOUT US</p>
                    </div>

                    <div className="md:my-9">
                        <h1 className="font-medium text-3xl lg:text-5xl text-slate-800 leading-tight">
                            The great team of<br/>industry experts<br/>behind <span className="underline underline-offset-3">Theoretical</span>
                        </h1>
                    </div>
                </div>
                <div className="flex md:hidden w-full my-14">
                    <img src={aboutImg}
                        alt="About image"/>
                </div>
                <div>
                    <p className="font-normal text-xs leading-6 text-slate-600 text-left w-11/12 md:w-8/12">Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante velit nunc morbi pretium ut nullam dolor pulvinar proin viverra ullamcorper aceget.</p>
                </div>
                <div className="flex flex-row items-center my-9 w-full">
                    <a href="about" className="w-full">
                        <div className="flex flex-row justify-center items-center w-full py-4 md:py-5 px-5 bg-primary-color hover:bg-primary-color-light active:bg-primary-color-light rounded-full cursor-pointer">
                            <p className="text-white text-base mr-3">About us</p>
                            <HiArrowRight className="w-6 h-6 text-white"/>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;

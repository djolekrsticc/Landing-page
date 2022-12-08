import { HiArrowRight } from "react-icons/hi2";
import heroImg from "/hero.svg";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-5 md:py-20">
            <div className="w-full mx-7 md:w-5/12 md:mr-10">
                <div className="flex flex-row items-center my-5 md:my-0">
                    <div className="w-8 md:w-14 h-0.5 bg-slate-800"></div>
                    <p className="ml-4 font-medium text-base md:text-lg text-slate-800">MARKETING AGENCY</p>
                </div>

                <div className="md:my-9">
                    <h1 className="font-medium text-4xl lg:text-7xl text-slate-800 leading-tight">We are a digital<br/>marketing agency</h1>
                </div>

                <div className="flex md:hidden w-full my-14">
                    <img src={heroImg} alt="Hero image" />
                </div>

                <div>
                    <p className="font-normal text-xs leading-6 text-slate-600 text-left w-11/12 md:w-8/12">Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante velit nunc morbi pretium ut nullam dolor pulvinar proin viverra ullamcorper aceget.</p>
                </div>

                <div className="flex flex-row items-center my-9">
                    <Link to="test1" smooth={true} offset={50} duration={500}>
                        <div className="flex flex-row items-center mr-5 py-4 md:py-5 px-5 bg-primary-color hover:bg-primary-color-light active:bg-primary-color-light rounded-full cursor-pointer">
                            <p className="text-white mr-3">Get in touch</p>
                            <HiArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </Link>

                    <Link to="services" smooth={true} offset={50} duration={500}>
                        <div className="flex flex-row items-center justify-center py-4 md:py-5 px-4 bg-white hover:bg-slate-800 active:bg-slate-800 rounded-full border border-slate-800 group cursor-pointer">
                            <p className=" text-slate-800 group-hover:text-white group-active:text-white">Our services</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex w-7/12">
                <img src={heroImg} alt="Hero image" />
            </div>
        </div>
    </section>
  )
}
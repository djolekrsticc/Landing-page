import { HiArrowRight } from "react-icons/hi2";
import heroImg from "/hero.png";

const Hero = () => {
  return (
    <section className="container mx-auto">
        <div className="md:flex md:flex-row md:justify-between md:items-center md:py-20">
            <div className="w-5/12 mr-10">
                <div className="flex flex-row items-center">
                    <div className="w-14 h-0.5 bg-slate-800"></div>
                    <p className="ml-4 font-medium text-lg text-slate-800">MARKETING AGENCY</p>
                </div>

                <div className="my-9">
                    <h1 className="font-medium text-7xl text-slate-800">We are a digital<br/>marketing agency</h1>
                </div>

                <div>
                    <p className="font-normal text-slate-600 text-left md:w-8/12">Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante velit nunc morbi pretium ut nullam dolor pulvinar proin viverra ullamcorper aceget.</p>
                </div>

                <div className="flex flex-row items-center my-9">
                    <a href="">
                        <div className="flex flex-row items-center mr-7 py-5 px-6 bg-green-800 hover:bg-green-700 rounded-full">
                            <p className="text-white mr-3">Get in touch</p>
                            <HiArrowRight className="w-6 h-6 text-white" />
                        </div>
                    </a>

                    <a href="">
                        <div className="flex flex-row items-center justify-center py-5 px-6 bg-white hover:bg-slate-50 rounded-full border border-slate-900">
                            <p className="text-slate-800">Our services</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-7/12">
                <img src={heroImg} alt="Hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero;
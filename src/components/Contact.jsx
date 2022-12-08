import { HiArrowRight } from "react-icons/hi2";
import contactImg from "/contact.svg";

export const Contact = () => {
  return (
    <section className="container mx-auto my-20" id="chat">
        <div className="flex flex-col mx-7 justify-center items-center py-12 md:py-20 bg-primary-color rounded-2xl">
            <div className="px-6">
                <div className="w-full md:w-5/12 md:mr-10">
                    <div className="flex flex-row items-center mb-5 md:my-0">
                        <div className="w-8 md:w-14 h-0.5 bg-white"></div>
                        <p className="ml-4 font-medium text-base md:text-lg text-white">CONTACT US</p>
                    </div>

                    <div className="md:my-9">
                        <h1 className="font-medium text-3xl lg:text-5xl text-white leading-tight">
                            Looking to rocket<br/>your startup?<br/>Get in touch today!
                        </h1>
                    </div>
                </div>
                <div className="flex md:hidden w-full my-9">
                    <img src={contactImg}
                        alt="About image"/>
                </div>
                <div className="flex flex-row items-center w-full">
                    <a href="about" className="w-full">
                        <div className="flex flex-row justify-center items-center w-full py-4 md:py-5 px-5 bg-white hover:bg-primary-color-light active:bg-primary-color-light rounded-full cursor-pointer">
                            <p className="text-slate-800 text-base mr-3">Get in touch</p>
                            <HiArrowRight className="w-6 h-6 text-slate-800"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </section>
  )
}

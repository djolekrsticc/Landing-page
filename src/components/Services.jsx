import {useEffect, useState} from "react";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi2";
import services from "../json/services.json";

export const Services = () => {
    const [id, setId] = useState(-1);

    useEffect(() => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
    });

    return (
        <section id="services">
            <div className="mt-28 md:mt-28">
                <div className="container mx-auto flex flex-row items-end justify-between">
                    <div className="w-full mx-7 md:w-5/12 md:mr-10">
                        <div className="flex flex-row items-center my-5 md:my-0">
                            <div className="w-8 md:w-14 h-0.5 bg-slate-800"></div>
                            <p className="ml-4 font-medium text-base md:text-lg text-slate-800">OUR SERVICES</p>
                        </div>

                        <div className="md:my-9">
                            <h1 className="font-medium text-3xl lg:text-5xl text-slate-800 leading-tight">High-impact services to<br/>help your business</h1>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-row items-center justify-evenly w-2/12">
                        <div onClick={
                                () => {
                                    if (id > 0) {
                                        setId(id - 1);
                                    }
                                }
                            }
                            className="services-arrow">
                            <HiArrowLeft className="w-12 h-12 text-white"/>
                        </div>

                        <div onClick={
                                () => {
                                    if (id != services.length - 1) {
                                        if (id == "-1") {
                                            setId(id + 2);
                                        } else {
                                            setId(id + 1);
                                        }
                                    }
                                }
                            }
                            className="services-arrow">
                            <HiArrowRight className="w-12 h-12 text-white"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start overflow-y-visible overflow-x-hidden">
                    <div className="py-12 md:py-20 mx-7 md:mx-0">
                        <div className="flex flex-row items-center justify-between gap-x-12 md:gap-x-5">
                            {
                            services.map(service => <a key={
                                    service.id
                                }
                                href={
                                    service.link
                                }
                                id={
                                    service.id
                            }>
                                <div className="w-80 h-96 md:w-96 md:h-128 bg-white border border-slate-500 rounded-3xl group md:hover:scale-105">
                                    <div className="my-9 mx-7">
                                        <img className="hidden md:flex md:group-hover:hidden"
                                            style={
                                                {width: '95px'}
                                            }
                                            src={
                                                service.png
                                            }
                                            alt={
                                                service.name
                                            }/>
                                             <video className="md:hidden md:group-hover:flex" width="130" autoPlay muted loop>
                                                <source src={service.gif} type="video/mp4"/>
                                            </video> 
                                    </div>

                                    <div className="m-7">
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-2xl">
                                                {
                                                service.name
                                            }</h3>
                                        </div>

                                        <div className="pt-3 pb-8">
                                            <p className="font-normal text-xs leading-5 text-slate-600 text-left w-10/12">
                                                {
                                                service.paragraph
                                            }</p>
                                        </div>

                                        <div className="flex flex-row items-center">
                                            <p className="flex flex-row justify-start items-center pr-3">Learn more</p>
                                            <HiArrowRight/>
                                        </div>
                                    </div>
                                </div>
                            </a>)
                        } </div>
                    </div>

                </div>
                <div className="flex md:hidden flex-row items-center justify-center w-full">
                    <div onClick={
                            () => {
                                if (id > 0) {
                                    setId(id - 1);
                                }
                            }
                        }
                        className="services-arrow-small">
                        <HiArrowLeft className="w-8 h-8 text-white"/>
                    </div>

                    <div onClick={
                            () => {
                                if (id != services.length - 1) {
                                    if (id == "-1") {
                                        setId(id + 2);
                                    } else {
                                        setId(id + 1);
                                    }
                                }
                            }
                        }
                        className="services-arrow-small">
                        <HiArrowRight className="w-8 h-8 text-white"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
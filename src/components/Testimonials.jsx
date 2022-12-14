import {useEffect, useState} from "react";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi2";
import testimonials from "../json/testimonials.json";

export const Testimonials = () => {
    const [idTest, setIdTest] = useState(-1);

    useEffect(() => {
        const element = document.getElementById(idTest);
        element.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
    });

    return (
        <section id="services">
            <div className="mt-28 md:mt-28">
                <div className="container mx-auto flex flex-row items-end justify-between">
                    <div className="w-full mx-7 md:w-5/12 md:mr-10">
                        <div className="flex flex-row items-center my-5 md:my-0">
                            <div className="w-8 md:w-14 h-0.5 bg-slate-800"></div>
                            <p className="ml-4 font-medium text-base md:text-lg text-slate-800">TESTIMONIALS</p>
                        </div>

                        <div className="md:my-9">
                            <h1 className="font-medium text-3xl lg:text-5xl text-slate-800 leading-tight">Don't take our word for<br/>it, take theirs!</h1>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-row items-center justify-evenly w-2/12">
                        <div onClick={
                                () => {
                                    if (idTest > 1000) {
                                        setIdTest(idTest - 1);
                                    }
                                }
                            }
                            className="services-arrow">
                            <HiArrowLeft className="w-12 h-12 text-white"/>
                        </div>

                        <div onClick={
                                () => {
                                    if (idTest != (testimonials.length + 1000) - 1) {
                                        if (idTest == "-1") {
                                            setIdTest(idTest + 1002);
                                        } else {
                                            setIdTest(idTest + 1);
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
                    <div className="mx-7 md:mx-0">
                        <div className="flex flex-row items-center justify-between gap-x-12 md:gap-x-5">
                            {
                              testimonials.map(testimonial => 
                                <div key={testimonial.id} id={testimonial.id} className="flex justify-center items-center w-80 h-128 md:w-96 md:h-128 m-7 rounded-3xl border-2 border-primary-color">
                                  <div className="flex flex-col justify-center items-center mx-5">
                                    <div className="w-24">
                                      <img src={testimonial.img} alt={testimonial.name} />
                                    </div>
                                    <div className="flex flex-col justify-center items-center mt-3">
                                      <p className="font-bold text-lg text-slate-800">{testimonial.name}</p>
                                      <p className="font-normal text-sm text-slate-700">{testimonial.title}</p>
                                    </div>
                                    <div className="mt-6">
                                      <p className="font-bold text-lg text-slate-800">{`"${testimonial.header}"`}</p>
                                    </div>
                                    <div className="mt-6">
                                      <p className="font-light text-xs leading-5 text-slate-600">{testimonial.paragraph}</p>
                                    </div>
                                  </div>
                                </div>
                                )
                            }
                        </div>
                    </div>

                </div>
                <div className="flex md:hidden flex-row items-center justify-center w-full">
                    <div onClick={
                            () => {
                                if (idTest > 1000) {
                                    setIdTest(idTest - 1);
                                }
                            }
                        }
                        className="services-arrow-small">
                        <HiArrowLeft className="w-8 h-8 text-white"/>
                    </div>

                    <div onClick={
                            () => {
                                if (idTest != (testimonials.length + 1000) - 1) {
                                    if (idTest == "-1") {
                                        setIdTest(idTest + 1002);
                                    } else {
                                        setIdTest(idTest + 1);
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
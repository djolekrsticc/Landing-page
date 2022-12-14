import { useSpring, animated, easings } from "@react-spring/web";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2"
import process from "../json/process.json";

export const Process = () => {
    const [idProcess, setIdProcess] = useState(0)

    const style = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 500,
            easing: easings.easeInSine
        },
        reset: true
    })

    const bgStyle = useSpring({
        background: `${process[idProcess].color}`,
        reset: true
    })

    const fontStyle = useSpring({
        color: `${process[idProcess].color}`,
        reset: true
    })

    return (
        <section className="container mx-auto">
        <div className="flex flex-col mx-7 justify-between items-center mt-28 md:py-28">
            <div className="w-full md:w-5/12 md:mr-10">
            <div className="flex flex-row items-center my-5 md:my-0">
                <animated.div style={bgStyle} className="w-8 md:w-14 h-0.5"></animated.div>
                <animated.p style={fontStyle} className="ml-4 font-medium text-base md:text-lg">OUR PROCESS</animated.p>
            </div>

            <div className="md:my-9">
                <animated.h1 style={fontStyle} className="font-medium text-3xl lg:text-5xl leading-tight">
                    A simple, yet powerful<br/> and efficient process
                </animated.h1>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center my-9 mx-auto">
                <animated.div style={bgStyle} className="flex flex-col justify-start items-center w-full h-128 mx-7 py-12 md:py-20 rounded-3xl">
                    <animated.div style={style} className="px-6">
                        <div>
                            <img src={process[idProcess].img} alt="header" />  
                        </div>
                        <div className="mt-9 mb-3">
                            <p className="font-medium text-xl lg:text-2xl text-white leading-tight">{process[idProcess].header}</p>
                        </div>
                        <div>
                            <p className="font-normal text-xs leading-6 text-white text-left w-full md:w-8/12">{process[idProcess].paragraph}</p>
                        </div>
                    </animated.div>
                </animated.div>
                </div>
                <div className="flex md:hidden flex-row items-center justify-center w-full">
                    <animated.div style={bgStyle} onClick={() => {
                        if (idProcess == 0) {
                            setIdProcess(idProcess)
                        } else {
                            setIdProcess(idProcess-1)
                        }
                    }} className="services-arrow-small-process">
                        <HiArrowLeft className="w-8 h-8 text-white"/>
                    </animated.div>

                    <animated.div style={bgStyle} onClick={() => {
                        if (idProcess == process.length - 1) {
                            setIdProcess(idProcess)
                        } else {
                            setIdProcess(idProcess+1)
                        }
                    }} className="services-arrow-small-process">
                        <HiArrowRight className="w-8 h-8 text-white"/>
                    </animated.div>
            </div>
        </div>
        </section>
    )
}

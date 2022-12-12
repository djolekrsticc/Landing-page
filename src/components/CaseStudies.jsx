import {HiArrowRight} from "react-icons/hi2";
import studies from '../json/caseStudies.json';

export const CaseStudies = () => {
    const studiesReduced = studies.slice(0, 2)
    
  return (
    <section className="container mx-auto" id="caseStudies">
            <div className="flex flex-col mx-7 justify-between items-center py-5 my-20 md:my-28">
                <div className="w-full md:w-5/12 md:mr-10">
                    <div className="flex flex-row items-center my-5 md:my-0">
                        <div className="w-8 md:w-14 h-0.5 bg-slate-800"></div>
                        <p className="ml-4 font-medium text-base md:text-lg text-slate-800">CASE STUDIES</p>
                    </div>

                    <div className="md:my-9">
                        <h1 className="font-medium text-3xl lg:text-5xl text-slate-800 leading-tight">
                            The results speak for themselves
                        </h1>
                    </div>
                </div>
                <div className="container mx-auto">
                    {studiesReduced.map(study =>
                        <div key={study.id} className="flex flex-col justify-center items-center w-80 h-full md:w-96 md:h-128 my-7 border-b rounded-3xl shadow-lg">
                            <div className="p-5">
                                <p className="font-medium text-xl text-slate-800">{study.header}</p>
                            </div>
                            <div className="flex flex-row justify-end items-center px-5 pb-5 w-full">
                                <a href="about" className="flex justify-center w-3/12">
                                    <div className="flex justify-center w-full py-4 md:py-5 px-5 bg-primary-color hover:bg-primary-color-light active:bg-primary-color-light rounded-full cursor-pointer">
                                        <HiArrowRight className="w-6 h-6 text-white"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-row items-center w-full">
                    <a href="allCaseStudies" className="w-full">
                        <div className="flex flex-row justify-center items-center w-full py-4 md:py-5 px-5 bg-primary-color hover:bg-primary-color-light active:bg-primary-color-light rounded-full cursor-pointer">
                            <p className="text-white text-base mr-3">All case studies</p>
                            <HiArrowRight className="w-6 h-6 text-white"/>
                        </div>
                    </a>
                </div>
            </div>
        </section>
  )
}

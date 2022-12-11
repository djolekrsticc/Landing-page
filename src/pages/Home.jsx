import {Nav} from "../components/Nav"
import {Hero} from "../components/Hero";
import {Services} from "../components/Services";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {Process} from "../components/Process";

export const Home = () => {
    return (<>
        <Nav/>
        <Hero/>
        <Services/>
        <About/>
        <Contact/>
        <Process/>
    </>)
}

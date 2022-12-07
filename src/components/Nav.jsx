import {useState} from 'react'
import {Sling as Hamburger, Sling} from 'hamburger-react'
import {useSpring, animated} from '@react-spring/web'
import { Link, animateScroll as scroll } from "react-scroll";

const items = [
    {
        name: "Work",
        id: "work",
        link: 'work'
    }, {
        name: "Our services",
        id: "services",
        link: 'services'
    }, {
        name: "About",
        id: "about",
        link: 'about'
    }, {
        name: "Lets chat",
        id: "chat",
        link: 'chat'
    }
]

const Nav = () => {
    const [isOpen, setOpen] = useState(false)

    const slide = useSpring({
        display: isOpen ? "block" : "none",
        opacity: isOpen ? 1 : 0,
        top: isOpen ? 80 : -240
    })

    return (
        <nav className='container mx-auto' id="-1">
            <div className="relative py-4 px-6 md:px-0 z-50 bg-white">
                <div className='flex justify-between items-center md:py-2'>
                    <div>
                        <a href="#">
                            <h1 className='font-mono text-2xl md:text-3xl tracking-wide text-gray-900'>Theoretical</h1>
                        </a>
                    </div>

                    <div className='md:hidden'>
                        <Sling toggled={isOpen}
                            toggle={setOpen}
                            size={24}
                            color="#303030"/>
                    </div>

                    {/* md: */}
                    <div className='hidden md:flex'>
                        {
                        items.map(item => <Link key={
                                item.id
                            }
                            to={item.link}
                            smooth={true}
                            offset={50}
                            duration= {500}
                            className='my-3 mx-6 cursor-pointer'>
                            <p className='font-sans text-gray-900 link-underline'>
                                {
                                item.name
                            }</p>
                        </Link>)
                    } </div>
                </div>
            </div>

            <animated.div className={`container mx-auto absolute text-center w-full h-60 py-6 z-40 bg-white md:hidden`}
                style={slide}>
                {
                items.map(item => <Link key={
                        item.id
                    }
                    to={item.link}
                    smooth={true}
                    offset={50}
                    duration= {500}
                    className='cursor-pointer'>
                    <p onClick={
                            () => setOpen(!isOpen)
                        }
                        className='font-sans text-gray-900 py-3 px-6 active:bg-blue-100'>
                        {
                        item.name
                    }</p>
                </Link>)
            } </animated.div>
        </nav>
    )
}

export default Nav
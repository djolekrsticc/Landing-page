import {useState} from 'react'
import {Sling} from 'hamburger-react'
import {useSpring, animated} from '@react-spring/web'
import {Link} from "react-scroll";
import {HiChevronDown} from "react-icons/hi2";
import items from '../json/nav.json';

const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    const [isShown, setIsShown] = useState(false);

    const slide = useSpring({
        display: isOpen ? "block" : "none",
        opacity: isOpen ? 1 : 0,
        top: isOpen ? 80 : -240
    })

    const pagesStyle = useSpring({
        transform: isShown ? 'rotate(-180deg)' : 'rotate(0deg)'
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
                            to={
                                item.link
                            }
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='flex flex-row items-end my-3 mx-6 cursor-pointer link-underline'>
                            {
                            item.id == "pages" ? <div className='flex flex-row items-center'
                                onMouseEnter={
                                    () => setIsShown(true)
                                }
                                onMouseLeave={
                                    () => setIsShown(false)
                            }>
                                <p className='font-sans text-gray-900'>
                                    {
                                    item.name
                                } </p>
                                {
                                < animated.div style = {
                                    pagesStyle
                                }
                                className = 'ml-2' > <HiChevronDown/></animated.div>
                            } </div> : <div className='flex flex-row items-center'>
                                <p className='font-sans text-gray-900'>
                                    {
                                    item.name
                                } </p>
                            </div>
                        } </Link>)
                    } </div>
                </div>
            </div>

            <animated.div className={`container mx-auto absolute text-center w-full h-72 py-6 z-40 bg-white md:hidden`}
                style={slide}>
                {
                items.map(item => <Link key={
                        item.id
                    }
                    to={
                        item.link
                    }
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='cursor-pointer'>
                    <div onClick={
                            () => setOpen(!isOpen)
                        }
                        className='flex flex-row justify-center items-center active:bg-blue-100'>
                        <p className='font-sans text-gray-900 py-3'>
                            {
                            item.name
                        }</p>
                        {
                        item.id == "pages" ? <animated.div style={pagesStyle}
                            className='ml-2'><HiChevronDown/></animated.div> : ''
                    } </div>
                </Link>)
            } </animated.div>
        </nav>
    )
}

export default Nav

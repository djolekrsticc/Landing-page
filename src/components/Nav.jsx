import {useState} from 'react'
import {Sling as Hamburger, Sling} from 'hamburger-react'
import {useSpring, animated} from '@react-spring/web'

const items = [
    {
        name: "Work",
        id: "work"
    }, {
        name: "About",
        id: "about"
    }, {
        name: "Lets chat",
        id: "chat"
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
        <nav className='container mx-auto'>
            <div className="relative py-4 px-6 z-50 bg-white">
                <div className='flex justify-between items-center md:py-2'>
                    <div>
                        <a href="#">
                            <h1 className='font-mono text-lg tracking-wide text-gray-900'>LandingPage</h1>
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
                        items.map(item => <a key={
                                item.id
                            }
                            href="#"
                            className='my-3 mx-6'>
                            <p className='font-mono text-gray-900 link-underline'>
                                {
                                item.name
                            }</p>
                        </a>)
                    } </div>
                </div>
            </div>

            <animated.div className={`container mx-auto absolute text-center w-full h-48 py-6 z-40 bg-white md:hidden`}
                style={slide}>
                {
                items.map(item => <a key={
                        item.id
                    }
                    href="#">
                    <p onClick={
                            () => setOpen(!isOpen)
                        }
                        className='font-mono text-gray-900 py-3 px-6 active:bg-blue-100'>
                        {
                        item.name
                    }</p>
                </a>)
            } </animated.div>
        </nav>
    )
}

export default Nav
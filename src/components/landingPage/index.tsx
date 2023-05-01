import Navbar from "@/components/landingPage/scenes/Navbar"
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types';
import Home from '@/components/landingPage/scenes/home';
import AboutMe from '@/components/landingPage/scenes/aboutMe';
import Projects from '@/components/landingPage/scenes/Projects';
import ContactMe from '@/components/landingPage/scenes/contactMe';

type Props = {}

const Landing = (props: Props) => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsAtTop(true);
                setSelectedPage(SelectedPage.Home)
            }
            if (window.scrollY !== 0) {
                setIsAtTop(false);
            }
            window.addEventListener("scroll", handleScroll)
        }
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="app">
            <Navbar isAtTop={isAtTop} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Home setSelectedPage={setSelectedPage} />
            <AboutMe setSelectedPage={setSelectedPage} />
            <Projects setSelectedPage={setSelectedPage} />
            <ContactMe setSelctedPage={setSelectedPage} />
        </div>
    )
}

export default Landing
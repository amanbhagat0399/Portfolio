import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import profile from '../assets/icons/profile.jpg'
import resume from '../assets/Aman Bhagat Resume.pdf'
import linkedin from '../assets/icons/linkedin.svg'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:amanbhagat0399@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }
    return (
        <motion.div className="sidebar"
        variants={sidebar_variant}
        initial='hidden'
        animate="visible"
    >
            <img src={profile} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Aman <span>Bhagat</span> </div>
            <a href={resume} target="_blank">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />View Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2 sidebar__item sidebar__github">
                <a href="https://www.linkedin.com/in/aman-bhagat-58437219b/" target="_blank"><img src={linkedin} alt="LinkedIn"  className="sidebar__icon mr-2" />Linked In</a>
            </figure>
            <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/amanbhagat0399" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />GitHub</a>
                </div>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Noida, U.P.</div>
                <div className="sidebar__item">amanbhagat0399@gmail.com</div>
                <div className="sidebar__item"><span>Mob : </span>7982344341</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;
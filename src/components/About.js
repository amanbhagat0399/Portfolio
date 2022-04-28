import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import { motion } from 'framer-motion'

import Skillcard from './Skillcard';

const skills = [

    {
        icon: repair,
        title: "Data Analysis",
        about: "I know MS Excel, SQL, Power BI (Beginner) and can perform the Data analysis and can build some beautiful Dashboards and draw some insights from data.",
    },
    {
        icon: computer,
        title: "Data Science / Machine Learning",
        about: "I can perform the data science operations like EDA, Visualization, and Model Building with the help of libraries like Numpy, Pandas, Seaborn, Matplotlib, SckitLearn."
    },
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful  website templates and scalable SPA using HTML, CSS, Bootstrap and React.js(Basic)"
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: "I know Flask framework for ML model deploymemt and looking forward to learn Django for Web DEv Backend.",
    },

]

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Things I Know</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;
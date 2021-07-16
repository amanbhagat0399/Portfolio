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
        title: "Machine Learning",
        about: "I have knowledge of various machine learning algorithms for Regression/Classification and of libraries like Numpy, Pandas, Scikit Learn and currently learning Deep Learning with Tensorflow Library",
    },
    {
        icon: computer,
        title: "Data Science",
        about: "I can perform the data science operations like EDA, Visualization, and Model Building with the help of libraries like Numpy, Pandas, Seaborn, Matplotlib, SckitLearn and will learn Power BI soon."
    },
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS, Bootstrap and React.js"
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: "I know Flask framework and database SQLite3, currently learning Django for API/ REST-API",
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
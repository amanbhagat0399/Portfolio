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
        title: <b>Data Analysis</b>,
        about: "MS Excel : Formulas,Functions,Pivot,Charts. \nSQL : I have worked with Postgres sql and MySql. \n Power BI (Basic) : I can build some beautiful Dashboards and draw some insights from data.",
    },
    {
        icon: computer,
        title: <b>Data Science / Machine Learning</b>,
        about: "I can perform the Data Science operations like EDA, Visualization, and Model Building with the help of libraries like Numpy, Pandas, Seaborn, Matplotlib, SckitLearn."
    },
    {
        icon: computer,
        title: <b>Frontend Development</b>,
        about: "I can build basic website templates using HTML, CSS, Bootstrap and know some React.js(Basic)"
    },
    {
        icon: backend,
        title: <b>Backend  Development (Python)</b>,
        about: "I know python programming language and Flask Framework for Backend programming.",
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
                I am currently a <b>Jr. Data Analyst</b> exploring the ways to use data more efficiently to solve the real world problems also interested
                in the <b>Machine Learning</b> and <b>Data Science</b>. I have also done <b>Google Data Analytics Professional Certificate</b>.
                I describe myself as someone who is <b>persistant</b>, a <b>quick learner</b> and loves problem solving by using simple and <b>scalable solutions</b>.
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
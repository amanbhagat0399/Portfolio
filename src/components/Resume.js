import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
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
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Google Data Analytics Professional Certificate Program (Coursera)
                        </h5>
                        <p className="resume-card__title">
                            2022(may)-2022(July)
                        </p>
                        <p className="resume-card__name">I have done Google Data Analytics Professional Certification course from Coursera.Which consist of 8 courses that prepare you for an entry-level Data Analyst Jobs. </p>
                    </div>
                    <hr/>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-card__title">
                            (2018-2022)
                        </p>
                        <p className="resume-card__name">I have completed my B.tech in Computer Science Engineering with 8.2 CGPA from MGMCOET, Noida </p>
                    </div>
                    <hr/>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Higher Education (Class XII)
                        </h5>
                        <p className="resume-card__title">
                            (2015-2017)
                        </p>
                        <p className="resume-card__name">I have completed my higher education from Bhaurav Devras Sarasawati vidya Mandir, Sector -12, Noida in Science Stream(PCM) with 78.2% </p>
                    </div>
                    <hr/>
                    {/* <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Secondary Education (Class X)
                        </h5>
                        <p className="resume-card__title">
                            (2015-2017)
                        </p>
                        <p className="resume-card__name">I have completed my higher education from Bhaurav Devras Sarasawati vidya Mandir, Sector -12, Noida in Science Stream(PCM) with 10 CGPA </p>
                    </div> */}
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                    Achievements / Work
                    </h4>
                    <hr/>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        TECHATHLON - 2021 Winner Team
                        </h5>
                        <p className="resume-card__name">Techathlon was a 48 Hour Inter college Hackathon Organized by IPEC, Ghaziabad. 
                    We had created an Electronic Health Record Management system  </p>
                    </div>
                    <hr/>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Machine Learning &  Data Science Intern (TwoWaits)
                        </h5>
                        <p className="resume-card__name">I have got the opportunity for Data Science Intern, where i made various machine learning and data science Projects, which builds me up for ML and Data Science  </p>
                    </div>
                    <hr/>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Python instructor (TwoWaits)
                        </h5>
                        <p className="resume-card__name">Worked as a python instructor at TwoWaits, where i have to teach python programmig language and basic data science and ML librarirs to students.  </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
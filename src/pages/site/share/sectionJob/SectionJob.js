import React from "react"

import "./SectionJob.scss"


import girl2 from "../../../../assets/images/png/girl2.png"
import cv from "../../../../assets/images/svg/cv.svg"
import webd from "../../../../assets/images/svg/webd.svg"
import safely from "../../../../assets/images/svg/safely.svg"

export const SectionJob = () => {

    const jobs = [
        {
            img: cv,
            title: 'Post a job',
            text: `
            It’s free and easy to post a job.
            Simply fill in a title, description.
            `
        },
        {
            img: webd,
            title: 'Choose frelancers',
            text: `
            It’s free and easy to post a job.
            Simply fill in a title, description.
            `
        },
        {
            img: safely,
            title: 'Pay Safely',
            text: `
            It’s free and easy to post a job.
            Simply fill in a title, description.
            `
        },
    ]

    return (
        <section className="section-five section">
                <div className="div-parent-back">
                    <img className="img-girl" src={girl2} />
                    <div className="div-z1">
                        <h4> Need something done !</h4>
                        <p>ihihhdsih dhihih ihjijjiu hihjihi</p>
                        <div className="group-card-s5">
                            {jobs && jobs.map((list, index) => {
                                return <div className="card-s5" key={index}>
                                    <img src={list.img} />
                                    <h5> {list.title} </h5>
                                    <p> {list.text} </p>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </section>
    )
}
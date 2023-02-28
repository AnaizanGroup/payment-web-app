import React from "react"
import { FaApple, FaAppStore, FaArrowLeft, FaGooglePay } from "react-icons/fa"

import "./index.scss"

import woman from "../../../assets/images/png/woman.png"
import user from "../../../assets/images/png/user.png"
import girl from "../../../assets/images/png/girl.png"
import girl2 from "../../../assets/images/png/girl2.png"
import code_v from "../../../assets/images/png/code-view.png"
import geo from "../../../assets/images/png/geo.png"
import s4_image from "../../../assets/images/png/s4_image.png"

import banking from "../../../assets/images/svg/banking.svg"
import shop from "../../../assets/images/svg/shop.svg"
import { SectionShare } from "../share/Section"


const HomePage = () => {

    const safety = [
        {
            title: 'Transfer Money',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
        {
            img: banking,
            title: 'Banking',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
        {
            title: 'Manage groups of frien',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
        {
            title: 'Transfer Money',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
        {
            img: shop,
            title: 'Banking',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
        {
            title: 'Manage groups of frien',
            text: `
            oihjozehdoihe ojozjojodz
            kjzjdjjzoj kjzdz`
        },
    ]

    const jobs = [
        {
            img: '',
            title: 'Post a job',
            text: `
                oihoizhdhzieiodiz
                izhjisizjjdizjidjzidizjd
                dojzodjz hjidz dzidihz hdizhid
            `
        },
        {
            img: '',
            title: 'Choose frelancers',
            text: `
                oihoizhdhzieiodiz
                izhjisizjjdizjidjzidizjd
                dojzodjz hjidz dzidihz hdizhid
            `
        },
        {
            img: '',
            title: 'Pay Safely',
            text: `
                oihoizhdhzieiodiz
                izhjisizjjdizjidjzidizjd
                dojzodjz hjidz dzidihz hdizhid
            `
        },
    ]

    return (
        <div className="parent">
            <section className="first-section section">
                <div className="left-div">
                    <h6>ANAIZAN MAKES IT EASY</h6>
                    <h1> Next generation <br /> Payments Ways</h1>
                    <p>
                        ihgiushgogdousgousgoishoihoiss
                        oiuhsoihhpihspoipoihppophpohpohpo
                        iugsiuohohoihihihoihoihoihoihoihh
                    </p>
                    <p>
                        <a href="">Get Started</a>
                        <li>Watch video</li>
                    </p>
                </div>
                <div className="right-div">
                    <img src={woman} />
                    <img src={user} />
                    <div className="cards">
                        <h3>4,5/5</h3>
                        <p>ALi Tulan / Design</p>
                    </div>
                    <div className="cards">
                        <h3>+12M</h3>
                        <p>Project completed / Design</p>
                    </div>
                </div>
            </section>

            <section className="section-two section">
                <div className="div-pay-solution">
                    <h2 className="section-title">
                        All-in-one Payment solutions easy to use and more secure
                    </h2>
                    <div className="div-text-card">
                        <im src="" />
                        <div>
                            <h4>Proof of quality</h4>
                            <p>
                                ijdijidhihihhoiuhihohohoi
                                ihdihihihiihihihihihihihihh
                            </p>
                        </div>
                    </div>
                    <div className="div-text-card">
                        <im src="" />
                        <div>
                            <h4>No cost until you hire</h4>
                            <p>
                                ijdijidhihihhoiuhihohohoi
                                ihdihihihiihihihihihihihihh
                            </p>
                        </div>
                    </div>
                    <div className="div-text-card">
                        <im src="" />
                        <div>
                            <h4>safe and secure</h4>
                            <p>
                                ijdijidhihihhoiuhihohohoi
                                ihdihihihiihihihihihihihihh
                            </p>
                        </div>
                    </div>
                </div>
                <div className="div-img">
                    <img src={girl} />
                    <div className="cards-text-z">
                        <p>
                            <img src="" />
                            uihhhhoihhihhi
                        </p>
                        <p>
                            <img src="" />
                            uihhhhoihhihhi
                        </p>
                        <p>
                            <img src="" />
                            uihhhhoihhihhi
                        </p>
                        <p>
                            <img src="" />
                            uihhhhoihhihhi
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-three section">
                <h2 className="section-title section-title-center">
                    we provider the best service for your safety
                </h2>

                <div className="group-card-s2">
                    {safety && safety.map((list, index) => {
                        return (
                            <div className="cards-s2" key={index}>
                                <img src={list.img} />
                                <h5> {list.title} </h5>
                                <p>
                                    {list.text}
                                </p>
                                <li> know more </li>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="section-four section">
                <img src={s4_image} />
                <div className="div-right-s4">
                    <h2 className="section-title">
                        Invest Money for the long term
                    </h2>
                    <p>
                        ijiidioijiojoij
                        dijijojojjojoojo dijijjiiiji jdjj
                        ihjijjiji hdihihihih ihdihihihiihihihihihihihihh
                    </p>
                    <div>
                        <p>ihihhiiihiidh jdu</p>
                        <p>ihihhiiihiidh jdu</p>
                        <p>ihihhiiihiidh jdu</p>
                        <p>ihihhiiihiidh jdu</p>
                    </div>
                    <button>Learn More</button>
                </div>
            </section>

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

            <section className="section-six section">
                <h2 className="section-title section-title-center">
                    Seamless Integration
                </h2>
                <div className="div-parent-s6">
                    <div className="div-left-s6">
                        <div className="block-div-s6">
                            <div>
                                <h4>Easy Integration & plugins</h4>
                                <p>
                                    ojodjejfoe eijfdojeof ijodeojfoe
                                    jojeoofeo
                                </p>
                            </div>
                            <div>
                                <h4>Easy Integration & plugins</h4>
                                <p>
                                    ojodjejfoe eijfdojeof ijodeojfoe
                                    jojeoofeo
                                </p>
                            </div>
                        </div>
                        <button>Sign in</button>
                    </div>
                    <img src={code_v} />
                </div>
            </section>

            <section className="section-seven section">
                <div className="div-parent-s7">
                    <div className="div-left-s7">
                        <h2 className="section-title">
                            We have many users over the word
                        </h2>
                        <p>
                            ijihiiohih iuoiuheoizhfoie ijoejojfoe jojojde
                            iugiuuh oihoihjoipoi ihihoihoi ohjpoihoih
                        </p>
                        <div className="stats">
                            <div>
                                <h3> 98M+</h3>
                                <p>ihjoioipojpojp</p>
                            </div>
                            <div>
                                <h3> 29kM+</h3>
                                <p>ihjoioipojpojp</p>
                            </div>
                            <div>
                                <h3> 19M+</h3>
                                <p>ihjoioipojpojp</p>
                            </div>
                        </div>
                    </div>
                    <img src={geo} />
                </div>
            </section>

            <SectionShare />

        </div>
    )
}

export default HomePage;
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import './index.scss';

import woman from '../../../assets/images/png/woman.png';
import user from '../../../assets/images/png/user.png';
import girl from '../../../assets/images/png/girl.png';
import code_v from '../../../assets/images/png/code-view.png';
import geo from '../../../assets/images/png/geo.png';
import g1 from '../../../assets/images/png/g1.png';
import g3 from '../../../assets/images/png/g3.png';
import g4 from '../../../assets/images/png/g4.png';
import g5 from '../../../assets/images/png/g5.png';
import g6 from '../../../assets/images/png/g6.png';

import shop from '../../../assets/images/svg/shop.svg';

import check from '../../../assets/images/svg/check.svg';
import badge from '../../../assets/images/svg/badge.svg';

import { SectionShare } from '../share/Section';
import { SectionJob } from '../share/sectionJob/SectionJob';
import { Section3 } from '../share/Section3/Section3';
import { CardText } from '../share/cardText/CardText';
import { Section2 } from '../share/section2/Section2';

const HomePage: React.FC = () => {
	const safety = [
		{
			img: g1,
			title: 'Transfer Money',
			text: `
            Share payment link via an email,
            SMS, messenger, chatbot etc. and
            get paid immediately
`,
		},
		{
			img: g3,
			title: 'Banking',
			text: `
            Share payment link via an email,
SMS, messenger, chatbot etc. and
get paid immediately`,
		},
		{
			img: g6,
			title: 'Manage groups of frien',
			text: `
            Share payment link via an email,
            SMS, messenger, chatbot etc. and
            get paid immediately`,
		},
		{
			img: g5,
			title: 'Transfer Money',
			text: `
            Share payment link via an email,
SMS, messenger, chatbot etc. and
get paid immediately`,
		},
		{
			img: shop,
			title: 'Banking',
			text: `
            Share payment link via an email,
SMS, messenger, chatbot etc. and
get paid immediately`,
		},
		{
			img: g4,
			title: 'Manage groups of frien',
			text: `
            Share payment link via an email,
            SMS, messenger, chatbot etc. and
            get paid immediately`,
		},
	];

	return (
		<div className="parent">
			<section className="first-section section">
				<CardText
					title1={'Next generation '}
					title2={'Payments Ways'}
					para={`Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
				/>

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
						<img src={badge} />
						<div>
							<h4>Proof of quality</h4>
							<p>
								Check any pro’s work samples, client reviews, and identity
								verification.
							</p>
						</div>
					</div>
					<div className="div-text-card">
						<img src="" />
						<div>
							<h4>No cost until you hire</h4>
							<p>
								Interview potential fits for your job, negotiate rates, and only
								pay for work you approve.
							</p>
						</div>
					</div>
					<div className="div-text-card">
						<img src={check} />
						<div>
							<h4>safe and secure</h4>
							<p>
								ocus on your work knowing we help protect your data and privacy.
								We’re here with 24/7 support if you need it.
							</p>
						</div>
					</div>
				</div>
				<div className="div-img">
					<img src={girl} />
					<div className="cards-text-z">
						<p>
							<FaCheckCircle />
							Multiple currency payment
						</p>
						<p>
							<FaCheckCircle />
							Quality work done quickly
						</p>
						<p>
							<FaCheckCircle />
							Protected payments, every time
						</p>
						<p>
							<FaCheckCircle />
							24/7 support
						</p>
					</div>
				</div>
			</section>

			<Section2
				title={' we provider the best service for your safety'}
				subtitle={null}
				array={safety}
			/>
			<SectionJob />
			<Section3 title={'Invest money for the long term'} para={undefined} />

			<section className="section-six section">
				<h2 className="section-title text-align">Seamless Integration</h2>
				<p className="text-same">
					Integrating with Razorpay is as simple as it can get, with
					feather-light SDKs and RESTful APIs that is embedded
				</p>
				<div className="div-parent-s6">
					<div className="div-left-s6">
						<div className="block-div-s6">
							<div>
								<h4>Easy Integration & plugins</h4>
								<p>
									Get access to convenient plugins for all major platforms and
									languages.
								</p>
							</div>
							<div>
								<h4>Easy Integration & plugins</h4>
								<p>
									ccept payments on mobile apps using auto-updating SDKs. So,
									the next time a new wallet or bank enters the market, you’ll
									be automatically covered.
								</p>
							</div>
						</div>
						<button className="button-hover-blue">Sign in</button>
					</div>
					<img src={code_v} />
				</div>
			</section>

			<section className="section-seven section">
				<div className="div-parent-s7">
					<div className="div-left-s7">
						<h2 className="section-title">We have many users over the word</h2>
						<p>
							ed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium.
						</p>
						<div className="stats">
							<div>
								<h3> 98M+</h3>
								<p> Happy Customers </p>
							</div>
							<div>
								<h3> 29kM+</h3>
								<p> Registered Companies </p>
							</div>
							<div>
								<h3> 19M+</h3>
								<p>Registered Countries</p>
							</div>
						</div>
					</div>
					<img src={geo} />
				</div>
			</section>

			<SectionShare />
		</div>
	);
};

export default HomePage;

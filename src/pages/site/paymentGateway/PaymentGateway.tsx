/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CardText } from '../share/cardText/CardText';

import './PaymentGateway.scss';

import { SectionDownload } from '../share/sectionDownload/SectionDownload';
import { Faq } from '../share/faq/Faq';

import p_gat from '../../../assets/images/png/pay-gateway.png';
import Brands from '../share/brands/Brands';
import screen1 from '../../../assets/images/png/screen2.png';
import screen2 from '../../../assets/images/png/screen3.png';
import screen4 from '../../../assets/images/png/screen4.png';
import pays from '../../../assets/images/png/pays.png';
import p4 from '../../../assets/images/png/p4.png';
import p5 from '../../../assets/images/png/p5.png';
import p6 from '../../../assets/images/png/p6.png';
import check from '../../../assets/images/png/check.svg';

const PaymentGateway: React.FC = () => {
	const list = [
		'Address autofill',
		'Card brand identification',
		'One-click payment with Link',
		'Adjustable quantities',
		'Real-time card validation',
		'Ability to reuse a means of payment',
		'Descriptive error messages',
		'Autofill by third-party apps',
	];

	const list2 = [
		'Integrate with a few simple steps',
		'Display local currencies',
		'Support for 92 currencies',
		'Real-time currency conversion',
		'All major International cards accepted',
		'ettlements in INR available',
	];

	return (
		<div className="parent">
			<section className="first-section section">
				<CardText
					title1={'Get paid instantly'}
					title2={'with Payment Links'}
					para={`Share payment link via an email, SMS, messenger, chatbot etc. and
                    get paid immediately. Accepting payments from customers is now
                    just a link away.`}
				/>
				<div className="right-div-pgat">
					<img src={p_gat} />
				</div>
			</section>

			<Brands />
			<section className="section-three-pgat section">
				<h2 className="section-title text-align">
					A System Designed to Handle End to End Payments
				</h2>

				<div className="group-divs">
					<div className="div1">
						<div>
							<h4>Accept All Payment Modes</h4>
							<p>
								With Domestic and International Credit & Debit cards, EMIs (
								Credit/Debit Cards & Cardless), UPI and 8 mobile wallets,
								Anaizan Payprovides the most extensive set of payment methods.
							</p>
						</div>
						<div>
							<h4>Checkout and Global Card Saving</h4>
							<p>
								An easy to integrate Checkout with cards saved across businesses
								so that your customers can pay seamlessly everywhere.
							</p>
						</div>
						<div>
							<h4>Powerful Dashboard</h4>
							<p>
								Get reports and detailed statistics on payments, settlements,
								refunds and much more for you to take better business decisions.
							</p>
						</div>
					</div>
					<div className="div2">
						<div>
							<h4>Built for Developers</h4>
							<p>
								Robust, clean, developer friendly APIs, plugins and libraries
								for all major languages and platforms that let you focus on
								building great products.
							</p>
						</div>
						<div>
							<h4>Robust Security</h4>
							<p>
								PCI DSS Level 1 compliant along with frequent third party audits
								and a dedicated internal security team to make sure your data is
								always safe.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-four-pgat section">
				<h2 className="section-title text-align">
					Boost your sales with the AnaizanPay payment gateway
				</h2>
				<div className="div-s-pgat">
					<div className="div-text">
						<h3> Designed to reduce payment complexity </h3>
						<p>
							Give your customers a smooth payment experience by helping them
							enter and reuse their information, as well as detect errors in
							real time.
						</p>
						<div className="list">
							{list.map((list, index) => {
								return (
									<p key={index}>
										<img src={check} /> {list}{' '}
									</p>
								);
							})}
						</div>
					</div>
					<img src={screen1} />
				</div>
			</section>

			<section className="section-five-pgat section">
				<img src={pays} />
			</section>

			<section className="section-six-pgat section">
				<img src={screen2} />
				<div className="div-text">
					<h2 className="section-title"> Go Global with AnaizanPay </h2>
					<p>
						Take your business global with no additional integration costs on
						Anaizanpay’s international payment gateway. Boost conversions with
						international customers by allowing them to pay in their local
						currency.
					</p>
					<div className="div-list">
						{list2.map((list, index) => {
							return (
								<p key={index}>
									{' '}
									<img src={check} /> {list}{' '}
								</p>
							);
						})}
					</div>
					<button>Sihn Up Now</button>
				</div>
			</section>

			<section className="section-six-pgat seven section">
				<div className="div-text">
					<h2 className="section-title">
						A Powerful dashboard to give you full control
					</h2>
					<p>
						Take your business global with no additional integration costs on
						Anaizanpay’s international payment gateway. Boost conversions with
						international customers by allowing them to pay in their local
						currency.
					</p>
					<h6> See Key Statistics </h6>
					<p>
						Get access to real-time data and insights to take informed business
						decisions. View important stats and generate customizable settlement
						and reconciliation reports.
					</p>
					<h6> Easy to Use </h6>
					<p>
						e understand that when it comes to managing payments, speed and ease
						of use is what matters at the end of the day. We've spent endless
						hours to make it a great experience for you.
					</p>
					<button>Sihn Up Now</button>
				</div>
				<img src={screen4} />
			</section>
			<SectionDownload />
			<section className="section-eight-pgat section">
				<h2 className="section-title text-align">
					Choose the integration that fits your platform
				</h2>
				<div className="group-section">
					<div className="div-one">
						<div className="group-img">
							<h4>
								Simple Integrations on All Platforms
								<button>See All</button>
							</h4>
							<div className="language"></div>
						</div>
						<div className="bar"></div>
						<div className="group-img">
							<h4>
								Simple Integrations on All Platforms
								<button>See All</button>
							</h4>
							<div className="language"></div>
						</div>
					</div>
					<div className="div-text">
						<h3 className="section-title"> Go Global with AnaizanPay </h3>
						<p>
							Take your business global with no additional integration costs on
							Anaizanpay’s international payment gateway. Boost conversions with
							international customers by allowing them to pay in their local
							currency.
						</p>
						<div className="div-list">
							{list2.map((list, index) => {
								return (
									<p key={index}>
										{' '}
										<img src={check} /> {list}{' '}
									</p>
								);
							})}
						</div>
						<button>Sihn Up Now</button>
					</div>
				</div>
			</section>

			<section className="section-five-plink section ">
				<h2 className="section-title text-align">
					Simple pricing, no hidden charges
				</h2>
				<p className="text">
					With no setup or maintenance fees and one of the lowest transaction
					charges in the industry, pay only when you get paid!
				</p>
				<div className="s5-div-b">
					<div className="b1">
						<h5> Standart Plan</h5>
						<div>
							<h1>2%</h1>
							<p>
								<h6>Anaizanpay platform fee</h6>
								Get access to Flash Checkout, Dashboard, Reports & much more
							</p>
						</div>
						<p>
							*GST applicable. Instruments like Diners and Amex Cards,
							International Cards, EMI (Credit Card, Debit Card & Cardless) &
							Corporate (Business) Credit Cards will be charged at 3%
						</p>
						<div className="d">
							<div>
								<h6>One-Time Setup Fee</h6>
								<b>$ 0.00</b>
								<span>No setup fee</span>
							</div>
							<div>
								<h6>Annual Maintenance Fee</h6>
								<b>$ 0.00</b>
								<span>No maintenance fee</span>
							</div>
						</div>
						<button>Sign Up Now</button>
					</div>
					<div className="b2">
						<div>
							<h4>Customized Plan</h4>
							<p>
								Sign up now to learn more about the Anaizanpay payments suite
								and explore our powerful dashboard.
							</p>
							<a href="">Sign Up Now</a>
						</div>
						<p>
							Explore how you can drive more value for your business with with
							its smart features. Payment
						</p>
					</div>
				</div>
			</section>

			<section className="section-six-plink section">
				<h2 className="section-title">
					Payment Links is a part of Anaizanpay's product
				</h2>

				<div className="group-card-s6">
					<div className="card-plink-s6">
						<p>
							<img src={p4} />
							<span>Route</span>
						</p>
						<p>
							Send your customers GST compliant invoices with item level details
							to accept online payments through debit/credit cards, netbanking,
							wallets, UPI etc.
						</p>
					</div>
					<div className="card-plink-s6">
						<p>
							<img src={p5} />
							<span>Subscriptions</span>
						</p>
						<p>
							Create custom-branded, hosted Payment Pages in a few clicks to
							accept payments online. Your business can go online with zero
							integration and tech efforts. We build and operate for you.
						</p>
					</div>
					<div className="card-plink-s6">
						<p>
							<img src={p6} />
							<span>Smart Collect</span>
						</p>
						<p>
							Now accept NEFT, RTGS and IMPS transfers through customer
							identifiers that can be generated on-demand with automated
							reconciliation for payments at scale.
						</p>
					</div>
				</div>
				<div className="foot-sect">
					<span>Also, take a look at other Razorpay products –</span>
					<a href="">Payment Gateway</a>
					<a href="">Invoices</a>
					<a href="">BharatQR</a>
					<a href="">UPI</a>
				</div>
			</section>
			<Faq />
		</div>
	);
};

export default PaymentGateway;

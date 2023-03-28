import React from 'react';

import investiment from '../../../assets/images/png/investiment.png';
import motif from '../../../assets/images/svg/motif.svg';
import funding from '../../../assets/images/svg/devise.svg';
import invest from '../../../assets/images/svg/stacts.svg';
import capital_p from '../../../assets/images/svg/stats2.svg';
import image_s3 from '../../../assets/images/png/image1.png';
import offer_girl from '../../../assets/images/png/offers_girl.png';
import ble from '../../../assets/images/png/ble.png';
import image2_s6 from '../../../assets/images/png/image2.png';

import './Investiment.scss';
import { SectionShare } from '../share/Section';
import { CardText } from '../share/cardText/CardText';
import { CardText2 } from '../share/cardText2/CardText2';
import { Faq } from '../share/faq/Faq';

const Investiment: React.FC = () => {
	const offers = [
		{
			img: funding,
			title: 'Funding',
			para: `Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem
            accusantium doloremque.`,
		},
		{
			img: invest,
			title: 'Investment',
			para: `Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem
            accusantium doloremque.`,
		},
		{
			img: capital_p,
			title: 'Capital Transparency',
			para: `Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem
            accusantium doloremque.`,
		},
	];

	const bestOffer = [
		{
			title: 'Fund security is maintained',
			text: `Sed ut perspiciatis unde
            omnis iste natus error sit
            voluptatem`,
		},
		{
			title: 'All processes are verified',
			text: `Sed ut perspiciatis unde
            omnis iste natus error sit
            voluptatem`,
		},
		{
			title: 'Account data protected',
			text: `Sed ut perspiciatis unde
            omnis iste natus error sit
            voluptatem`,
		},
		{
			title: 'Device identification feature',
			text: `Sed ut perspiciatis unde
            omnis iste natus error sit
            voluptatem`,
		},
	];

	const freelanceTalent = [
		{
			img: '',
			title: 'Proof of quality',
			text: `Check any pro’s work samples, client reviews, and identity
            verification.`,
		},
		{
			img: '',
			title: 'No cost until you hire',
			text: `Interview potential fits for your job, negotiate rates, and only pay
            for work you approve.`,
		},
		{
			img: '',
			title: 'Safe and secure',
			text: `Focus on your work knowing we help protect your data and
            privacy. We’re here with 24/7 support if you need it.`,
		},
	];

	return (
		<div className="parent">
			<section className="first-section section">
				<CardText
					title1={'Smart investments'}
					title2={'for the future'}
					para={` Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
				/>
				<div className="right-div-invest">
					<img src={investiment} />
				</div>
				<img className="motif" src={motif} />
			</section>

			<section className="section-two-invest section">
				<h2 className="section-title text-align">
					We offer the best features for you
				</h2>
				<p className="subtitle">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam.
				</p>
				<div className="div-card-s2-invest">
					{offers?.map((list, index) => {
						return (
							<div className="card-s2-invest" key={index}>
								<img src={list.img} />
								<h4> {list.title} </h4>
								<p> {list.para} </p>
							</div>
						);
					})}
				</div>
			</section>

			<section className="section-three-invest section">
				<div className="parent-s3-invest">
					<img src={image_s3} />
					<CardText2
						title={`Investissez dans l'or à
                                        partir de 1k $ seulement
                                        `}
						para={`ed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam.`}
						opt1={'Small Capital'}
						opt2={'Easy Transaction Access'}
						opt3={'Attractive Returns'}
						opt4={'Social Impact'}
						opt5={'Security'}
					/>
				</div>
			</section>

			<section className="section-four-invest section">
				<div className="card-s4-invest">
					<img src={ble} />
					<h2 className="section-title">investments in stocks</h2>
					<div className="grous-btn-s4-inv">
						<button> Starting investments </button>
						<button> More </button>
					</div>
				</div>
				<div className="card-s4-invest">
					<img src={ble} />
					<h2 className="section-title">investments in stocks</h2>
					<div className="grous-btn-s4-inv">
						<button> Starting investments </button>
						<button> More </button>
					</div>
				</div>
			</section>

			<section className="section-five-invest section">
				<h2 className="section-title text-align">
					We offer the best features for you
				</h2>
				<p className="text">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam.
				</p>
				<div className="group-card-s5">
					<img src={offer_girl} />
					<div className="groups-card-s5-inv">
						{bestOffer?.map((list, index) => {
							return (
								<div className="card-s5-inv" key={index}>
									<h4> {list.title} </h4>
									<p> {list.text} </p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="section-six-invest section">
				<div className="group-card-s6-inv">
					<div className="card-text-s6-inv">
						<h2 className="section-title">
							A whole world of freelance talent at your fingertips
						</h2>

						<div className="groups-text">
							{freelanceTalent?.map((list, index) => {
								return (
									<div className="card-s6-inv" key={index}>
										<img src={list.img} alt={list.title} />
										<div>
											<h5> {list.title} </h5>
											<p> {list.text} </p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<img src={image2_s6} />
				</div>
			</section>

			<SectionShare />
			<Faq />
		</div>
	);
};

export default Investiment;

import React, { useEffect } from 'react';
import 'flag-icon-css/css/flag-icons.min.css';
import './Footer.scss';
import {
	FaAndroid,
	FaAngleDown,
	FaApple,
	FaChevronUp,
	FaFacebookF,
	FaInstagramSquare,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';

const Footer: React.FC = () => {
	const links = [
		{
			title: 'About',
			items: [
				{ path: '/', label: 'Carrers' },
				{ path: '/', label: 'Press & News' },
				{ path: '/', label: 'Partenership' },
				{ path: '/', label: 'Privacy Policy' },
				{ path: '/', label: 'Terms of service' },
				{ path: '/', label: 'Investor relations' },
			],
		},
		{
			title: 'Products',
			items: [
				{ path: '/', label: 'Payment gateway' },
				{ path: '/', label: 'Payment pages' },
				{ path: '/', label: 'Payment links' },
				{ path: '/', label: 'QR Codes' },
				{ path: '/', label: 'Subcription' },
				{ path: '/', label: 'Invoices' },
			],
		},
		{
			title: 'Support',
			items: [
				{ path: '/', label: 'help & Support' },
				{ path: '/', label: 'Thrust & Safety' },
				{ path: '/', label: 'Integration' },
				{ path: '/', label: 'Docs' },
			],
		},
	];

	const feedtop = (): void => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {}, []);

	return (
		<footer className="footer">
			<div className="div1">
				<ul>
					<a href="">Terms of Service</a>
					<a href="">Privacy Policy</a>
					<a href="">Site Map</a>
				</ul>
				<ul>
					<span> Follow us </span>
					<a href="">
						{' '}
						<FaFacebookF />{' '}
					</a>
					<a href="">
						{' '}
						<FaTwitter />{' '}
					</a>
					<a href="">
						{' '}
						<FaInstagramSquare />{' '}
					</a>
					<a href="">
						{' '}
						<FaLinkedinIn />{' '}
					</a>
				</ul>
			</div>
			<div className="div2">
				{links.map(({ title, items }, index) => {
					return (
						<ul key={index}>
							<h3> {title} </h3>
							{items.map((list, index2) => {
								return (
									<a href={list.path} key={index2}>
										{' '}
										{list.label}{' '}
									</a>
								);
							})}
						</ul>
					);
				})}
				<div className="newsletter-div">
					<form>
						<h4>Subscribe</h4>
						<p>
							<input type="email" placeholder="Your email adress" />
							<button>Send</button>
						</p>
					</form>
					<h4>Apps</h4>
					<p>
						{' '}
						<FaApple /> IOS App{' '}
					</p>
					<p>
						{' '}
						<FaAndroid /> Android App{' '}
					</p>
				</div>
			</div>
			<div className="div3">
				<p>&copy; AnaizanPay. All right reserved</p>
				<div className="div-div3">
					<div>
						USD <FaAngleDown />
					</div>
					<div>
						English <FaAngleDown />
					</div>
				</div>
			</div>
			<button className="feed-top" onClick={feedtop}>
				{' '}
				<FaChevronUp />{' '}
			</button>
		</footer>
	);
};

export default Footer;

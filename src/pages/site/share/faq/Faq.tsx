import React from 'react';

import './Faq.scss';

export const Faq: React.FC = () => {
	const faqs = [
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
		{
			quiz: 'How can I lorem ipusm ?',
			answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
		},
	];

	return (
		<section className="section-faq section">
			<h5> POPURLAR QUESTIONS </h5>
			<h2 className="section-title"> Frequently Asked Question </h2>
			<p className="subtitle-faq">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo
				voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum
				laudantium.
			</p>
			<div className="group-faq">
				{faqs?.map((list, index) => {
					return (
						<div key={index}>
							<h4> {list.quiz} </h4>
							<p> {list.answer} </p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

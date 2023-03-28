/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './Pagination.scss';

interface Props {
	nb: number;
	countTab: number;
	setNextt: (arg: number) => void;
	setPrevious: (arg: number) => void;
	nextt: number;
	previous: number;
}

const Pagination: React.FC<Props> = ({
	nb,
	countTab,
	setNextt,
	setPrevious,
	nextt,
	previous,
}) => {
	const nbPage = Math.round(nextt / nb);

	const nexts = (news: number): void => {
		const nextnb = news + nb;

		if (nextnb < countTab) {
			setPrevious(news + 1);
			setNextt(nextnb);
		} else if (nextnb > countTab) {
			if (Math.abs(countTab - nextnb) + 1 < nb) {
				setPrevious(news + 1);
				setNextt(news + (nb - Math.abs(countTab - nextnb)));
			}
		}
	};

	const previouss = (old: number): void => {
		const nbprev = old - nb;

		if (nbprev >= 0) {
			setPrevious(nbprev);
			setNextt(old - 1);
		}
	};

	return (
		<div className="pagination">
			<div className="btn-group">
				<button>
					{' '}
					<FiChevronLeft />{' '}
				</button>
				<button> 1 </button>
				<button> 2 </button>
				<button> 3 </button>
				...
				<button>
					{' '}
					<FiChevronRight />{' '}
				</button>
			</div>
			<div className="page">
				<span>1 of 1000 </span>
				<p>
					<input type="text" placeholder="..." />
					<button>Aller</button>
				</p>
			</div>
		</div>
	);
};

export default Pagination;

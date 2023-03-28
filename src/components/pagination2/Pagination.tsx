/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

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
}: any) => {
	const [page, setPage] = useState(0);

	const nextPage = (): void => {
		if (nextt < countTab) {
			setNextt(nextt + nb);
			setPrevious(previous + nb);
		}
	};

	const previousPage = (): void => {
		if (previous > 0) {
			setPrevious(previous - nb);
			setNextt(nextt - nb);
		}
	};

	useEffect(() => {
		const n = countTab / nb;
		const nbs = n.toString().split('.');

		if (nbs.length === 2) {
			const nb2 = parseInt(nbs[0]);

			setPage(nb2 + 1);
		} else {
			setPage(countTab / nb);
		}
	});

	return (
		<div className="pagination2">
			<div className="div-btn-pg">
				<span>
					{' '}
					{nextt / nb} of {page}{' '}
				</span>
				<div>
					<button onClick={previousPage}>
						{' '}
						<FaAngleDoubleLeft />{' '}
					</button>
					<span> {nextt / nb} </span>
					<button onClick={nextPage}>
						{' '}
						<FaAngleDoubleRight />{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pagination;

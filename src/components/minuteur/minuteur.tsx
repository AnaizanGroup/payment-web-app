import * as React from 'react';

interface Props {
	width: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

export const Timer: React.FC<Props> = ({
	width,
	hours,
	minutes,
	seconds,
	completed,
}) => {
	if (completed) {
		return <Completionist />;
	} else {
		return (
			<div className="minut">
				<span> {seconds} </span>
			</div>
		);
	}
};

const Completionist = (): JSX.Element => {
	return <span> Time Expired </span>;
};

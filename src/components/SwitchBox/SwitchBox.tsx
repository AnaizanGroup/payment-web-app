import React from 'react';
import './SwitchBox.scss';
interface Props {
	props: Record<string, string>;
}

const SwitchBox: React.FC<Props> = ({ ...props }) => {
	return (
		<>
			<label className="toggle-switch">
				<input type="checkbox" {...props} />
				<span className="slider  round"></span>
			</label>
		</>
	);
};

export default SwitchBox;

import React, { type ReactInstance } from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from '../dataComponent/DataComponent';

class PDFComponent extends React.PureComponent {
	componentRef!: ReactInstance | null;

	render(): JSX.Element {
		return (
			<div>
				<ReactToPrint
					content={() => this.componentRef}
					trigger={() => (
						<button className="btn btn-primary">Print to PDF!</button>
					)}
				/>
				<DataComponent ref={(response) => (this.componentRef = response)} />
			</div>
		);
	}
}

export default PDFComponent;

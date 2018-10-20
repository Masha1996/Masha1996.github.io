// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import type {Props} from './flow';
import React, {Component} from 'react';
import 'styles/styles.less';

export class Example extends Component<Props> {
	props: Props;

	render () {
		return (
			<div>Example</div>
		);
	}
}

export default Example;

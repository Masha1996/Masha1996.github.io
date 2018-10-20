// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BattleBlock from 'components/BattleBlock';
import type {Props} from './flow';
import React, {Component} from 'react';
import styles from './App.less'

export class App extends Component<Props> {
	props: Props;

	getGridSize = (size: number) => {
		let gridSize = size / 2;

		if (32 >= gridSize && gridSize > 16) {
			gridSize = 32;
		}
		if (16 >= gridSize && gridSize > 8) {
			gridSize = 16;
		}
		if (8 >= gridSize && gridSize > 4) {
			gridSize = 8;
		}
		if (4 >= gridSize && gridSize > 2) {
			gridSize = 4;
		}
		if (2 >= gridSize) {
			gridSize = 2;
		}

		return gridSize;
	};

	// TODO Init header

	getGridStiles = (size: number) => {
		const gridSize = this.getGridSize(size);
		const gridTemplateRows = '1fr '.repeat(gridSize);
		const gridTemplateColumns = '1fr '.repeat(Math.log2(gridSize) + 1);
		return {gridTemplateRows: gridTemplateRows,
			gridTemplateColumns: gridTemplateColumns}
	};

	battleBlocks = (participants: Array<any>) => {
		const columns = this.getGridRow(participants.length);
		return columns.map((item, index) => <BattleBlock key={index} gridRow={item} />);
	};

	getGridRow = (size: number) => {
		let gridSize = this.getGridSize(size);
		let rowSpanArray = [];
		for (let i = gridSize, columnIdx = 0; i >= 1; i = i / 2, columnIdx++) {
			for (let j = 0; j < i; j++) {
				const rowSpan = columnIdx === 0 ? '' : (columnIdx === 1 ? 'span2' : `span${Math.pow(2, columnIdx)}`);

				rowSpanArray.push(rowSpan);
			}
		}
		const lastElem = rowSpanArray[rowSpanArray.length - 1];
		rowSpanArray.push(lastElem);
		return rowSpanArray;
	};

	render () {
		const participants = [
			[7, 'Гнётов Илья', 7, 11, '', 'АВЕРС'],
			[65, 'Калинин Митя', 6, '-', '', 'Фархуллин Р.'],
			[43, 'Потапов Дмитрий', 8, 11, '', 'Старостин А.Н.'],
			[76, 'Бондаренко Макар', 6, 11, '', 'Фархуллин Р.'],
			[24, 'Федорук Вячеслав', 7, 11, '', 'АВЕРС']
		];
		return (
			<div>
				<Header />
				<div className={styles.gridContainer} style={this.getGridStiles(participants.length)}>
					{this.battleBlocks(participants)}
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;

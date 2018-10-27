// @flow
import 'bootstrap/dist/css/bootstrap-grid.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BattleBlock from 'components/BattleBlock';
import type {Props} from './flow';
import React, {Component} from 'react';
import styles from './App.less'
import connect from "react-redux/es/connect/connect";

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

	isActiveBlock = (stage, blockNumber) => {
		const {activeBlock} = this.props;
		if (activeBlock[0] === stage && activeBlock[1] === blockNumber) {
			return true;
		} else {
			return false;
		}
	};

	battleBlocks = (participants: Array<any>) => {
		const {participantWinner} = this.props;
		const columns = this.getGridRow(participants.length);
		return columns.map((item, index) =>
			<BattleBlock
				key={index}
				gridRow={item[0]}
				stage={item[1]}
				blockNumber={item[2]}
				active={this.isActiveBlock(item[1], item[2])}
				winner={participantWinner}
			/>);
	};

	getGridRow = (size: number) => {
		let gridSize = this.getGridSize(size);
		let rowSpanArray = [];
		for (let i = gridSize, columnIdx = 0; i >= 1; i = i / 2, columnIdx++) {
			for (let j = 0; j < i; j++) {
				const rowSpan = columnIdx === 0 ? '' : (columnIdx === 1 ? 'span2' : `span${Math.pow(2, columnIdx)}`);
				const stage = i === 1 ? 'third-place' : `1/${i}`;
				const blockNumber = j;
				const block = [rowSpan, stage, blockNumber];
				rowSpanArray.push(block);
				if (i === 1) {
					const rowSpan = columnIdx === 0 ? '' : (columnIdx === 1 ? 'span2' : `span${Math.pow(2, columnIdx)}`);
					const stage = 'final';
					const blockNumber = j + 1;
					const block = [rowSpan, stage, blockNumber];
					rowSpanArray.push(block);
				}
			}
		}
		return rowSpanArray;
	};

	render () {
		const {listParticipants} = this.props;
		return (
			<div>
				<Header />
				{
					listParticipants && (listParticipants.length > 0)
						? (
							<div className={styles.gridContainer} style={this.getGridStiles(listParticipants.length)}>
							{this.battleBlocks(listParticipants)}
							</div>
						) : null
				}
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	listParticipants: state.app.listParticipants,
	activeBlock: state.app.activeBlock,
	participantWinner: state.app.participantWinner,
});

export default connect(mapStateToProps)(App);

import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import EnterFrame from '../lib/index';
import './styles.css';

function Demo() {
	const [state, setState] = useState(0);

	useEffect(() => {
		EnterFrame.add((e) => {
			const { delta } = e;
			setState(delta);
		});
	}, []);

	return (
		<>
			<h1>{state}</h1>
			<button
				onClick={() => {
					EnterFrame.stop();
					console.log('====stop===');
				}}
			>
				stop
			</button>
			<button
				onClick={() => {
					console.log('===play===');
					EnterFrame.play();
				}}
			>
				play
			</button>
			<button onClick={() => EnterFrame.destory()}>destory</button>
			<button
				onClick={() => {
					EnterFrame.add((e) => {
						console.log('a');
					});
				}}
			>
				add
			</button>

			<button
				onClick={() => {
					EnterFrame.undo();
				}}
			>
				reverse
			</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));

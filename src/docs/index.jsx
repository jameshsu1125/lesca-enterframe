import React from 'react';
import { render } from 'react-dom';
import EnterFrame from './../lib/index';

import './styles.css';

const enterframe = new EnterFrame((e) => {
	const { delta } = e;
	console.log(delta);
});

function Demo() {
	return (
		<>
			<button onClick={() => enterframe.stop()}>stop</button>
			<button onClick={() => enterframe.play()}>play</button>
			<button onClick={() => enterframe.destroy()}>destroy</button>
			<button
				onClick={() => {
					const frame2 = new EnterFrame((e) => {
						console.log('a');
					});
				}}>
				add
			</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));

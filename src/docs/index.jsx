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
				onClick={() =>
					enterframe?.add((e) => {
						const { delta, target } = e;
						if (delta >= 10000) {
							target.stop();
						}
					})
				}>
				add
			</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));

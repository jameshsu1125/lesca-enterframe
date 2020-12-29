import React from 'react';
import { render } from 'react-dom';
import EnterFrame from './../lib/index';

import './styles.css';

EnterFrame.init((time) => {
	console.log(time);
});

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));

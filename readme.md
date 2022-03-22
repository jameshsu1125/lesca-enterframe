[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-enterframe --save
```

# Usage

```javascript
import { useState, useEffect } from 'react';
import EnterFrame from 'lesca-enterframe';

const Component = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		EnterFrame.add((e) => {
			const { delta } = e;
			setTime(delta);
		});
	}, []);

	return (
		<div>
			<h1>{time}</h1>
			<button onClick={() => EnterFrame.play()}>Play</button>
			<button onClick={() => EnterFrame.stop()}>Stop</button>
		</div>
	);
};
```

# Methods

| method  |   options   |       description        | default |
| :------ | :---------: | :----------------------: | ------: |
| add(fn) | fn:function |     extend call func     |         |
| play    |             |  continue calling func   |         |
| stop    |             |    stop calling func     |         |
| undo    |             | reverse to last function |         |
| destory |             |       remove event       |         |

# Properties

| Properties |  type  |                description                | default |
| :--------- | :----: | :---------------------------------------: | ------: |
| todo       | Object | get function and list of function history |      [] |

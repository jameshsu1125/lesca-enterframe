[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-enterframe --save
```

# Usage

```javascript
import EnterFrame from 'lesca-enterframe';

const enterframe = new EnterFrame((e) => {
	const { delta, frame } = e;
	console.log(delta); // 0 ~ infinity
	if (delta >= 1000) frame.stop();
});


<button onClick={() => enterframe?.stop()}>stop</button>
<button onClick={() => enterframe?.play()}>play</button>
<button onClick={() => enterframe?.destroy()}>destroy</button>
```

# Methods

| method    | options |       description        | default |
| :-------- | :-----: | :----------------------: | ------: |
| init(fn)  |   fn    | will call frame by frame |         |
| stop()    |         |    stop calling func     |         |
| play()    |         |  continue calling func   |         |
| add(fn)   |   fn    |     extend call func     |         |
| destory() |         |       remove event       |         |

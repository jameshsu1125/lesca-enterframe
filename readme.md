[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-enterframe --save
```

# Usage

```javascript
import EnterFrame from 'lesca-enterframe';

EnterFrame.init((timestamp) => {
	console.log(timestamp);
});
```

# Methods

| method    | options |       description        | default |
| :-------- | :-----: | :----------------------: | ------: |
| init(fn)  |   fn    | will call frame by frame |         |
| getTime() |         |     return timestamp     |         |
| stop()    |         |    stop calling func     |         |
| play()    |         |  continue calling func   |         |
| add(fn)   |   fn    |     extend call func     |         |
| destory() |         |       remove event       |         |

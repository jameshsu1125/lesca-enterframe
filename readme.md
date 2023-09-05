[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

Use it calculator timestamp for animation.

#### [Live Demo](https://jameshsu1125.github.io/lesca-enterframe/)

# Installation

```sh
npm install lesca-enterframe --save
```

## Usage

As a Node module:

```JSX
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

## Development

### Methods

| method                         |       description        | return |
| :----------------------------- | :----------------------: | -----: |
| .**add**(**frame**:_function_) |     extend call func     |   void |
| .**play**()                    |  continue calling func   |   void |
| .**stop**()                    |    stop calling func     |   void |
| .**undo**()                    | reverse to last function |   void |
| .**destroy**()                 |       remove event       |   void |
| .**setFPS**(**fps**:_number_)  |         set FPS          |   void |
| .**reset**(**fps**:_number_)   |       reset delta        |   void |

# Properties

| Properties |  type  |                description                | default |
| :--------- | :----: | :---------------------------------------: | ------: |
| todo       | Object | get function and list of function history |      [] |

### Features

- maintain if necessary

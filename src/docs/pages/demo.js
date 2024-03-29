import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import EnterFrame from '../../lib';

const Demo = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    EnterFrame.setFPS(24);
    EnterFrame.add((e) => {
      const { delta } = e;
      setTime(delta);
    });
  }, []);

  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <pre>
        <code>{time}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            EnterFrame.play();
          }}
        >
          EnterFrame.play()
        </Button>
        <Button
          onClick={() => {
            EnterFrame.stop();
          }}
        >
          EnterFrame.stop()
        </Button>
        <Button
          onClick={() => {
            EnterFrame.reset();
            setTime(0);
          }}
        >
          EnterFrame.reset()
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;

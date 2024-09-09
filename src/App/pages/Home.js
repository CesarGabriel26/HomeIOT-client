// src/pages/Home.js
import React from 'react';
import { Button, Progress } from 'rsuite';

function Home() {
  return (
    <div>
      <Button appearance="ghost" color='orange' >
        Login
      </Button>


      <div style={{ width: 200 }} >
        <Progress.Circle gapDegree={90} gapPosition='bottom' strokeColor="orange" percent={50} />
      </div>
    </div>
  );
}

export default Home;

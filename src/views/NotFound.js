import React from 'react';
import { LinkTextBtn } from '../components/ui/Buttons';

const NotFound = () => (
  <div className="dfc jc-c ai-c" style={{ height: "calc(100vh - 118px - 10rem)" }}>
    <div className="mbt-a">
      <h5 className="mb-1">404 - Not Found!</h5>
      <LinkTextBtn className="plr-3 pbt-1 mr-3" href="#/" variant="info">Go Home</LinkTextBtn>
    </div>
  </div>
);

export default NotFound;
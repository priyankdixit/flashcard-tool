import React from 'react';
import { Button } from 'semantic-ui-react';

const Navigation = ({ onPrevious, onNext }) => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <Button onClick={onPrevious}>Previous</Button>
    <Button onClick={onNext} style={{ marginLeft: '10px' }}>Next</Button>
  </div>
);

export default Navigation;

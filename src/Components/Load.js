import React from 'react';
import loadingImage from './l.gif';

function Load() {
  return (
    <div className='text-center'>
      <img src={loadingImage} alt="loading" />
    </div>
  );
}

export default Load;

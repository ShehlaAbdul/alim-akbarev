import React from 'react';
import "./Style.scss";


function MainBtn({title}) {
  return (
    <button className='main-btn'>
      {title}
    </button>
  );
}

export default MainBtn;

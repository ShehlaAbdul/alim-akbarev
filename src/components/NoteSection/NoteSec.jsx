import React from 'react';
import "./Style.scss";

function NoteSec() {
  return (
    <section id="note-section" className=" ">
      <div className="note-section d-flex flex-column justify-content-center align-items-center">
        <button className='note-btn'>Qeyd</button>
        <p>
          Bu məlumatlar yalnız məlumatlandırma məqsədilə verilmişdir. Diaqnoz və
          müalicə üçün həkimə müraciət edin.
        </p>
      </div>
    </section>
  );
}

export default NoteSec;

import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer animate__animated animate__backInLeft">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage: `url(https://www.latercera.com/resizer/n0qlZFIxhudVhzdprimDh0wH26A=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/42NQEIM25VAEXMK4D6LJCXRSSM.jpg)`,
          backgroundSize: 'cover',
        }}
      />
      <div className="journal__entry-body">
        <p className="journal__entry-title">Nuevo Dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt
          alias tempora distinctio soluta accusantium harum.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <samp>Monday</samp>
        <h4>30</h4>
      </div>
    </div>
  );
};

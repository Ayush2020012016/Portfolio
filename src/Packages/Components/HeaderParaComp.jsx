import React from 'react';

const HeaderParaComp = ({ heading, description, Component, className = '' }) => {
  return (
    <div className={className}>
      <div className="font-RedHat text-[57px]">{heading}</div>
      <p className="font-Roboto text-[19px]">{description}</p>
      {Component}
    </div>
  );
};

export default HeaderParaComp;

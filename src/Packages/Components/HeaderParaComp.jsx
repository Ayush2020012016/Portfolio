import React from 'react';

const HeaderParaComp = ({
  heading,
  description,
  Component,
  className = '',
  headingClassName = '',
  descriptionClassName = '',
}) => {
  return (
    <div className={className}>
      <div className={`font-RedHat text-[47px] font-normal mb-7 text-black2 ${headingClassName}`}>
        {heading}
      </div>
      <p className={`font-Roboto text-[19px] my-5 text-black3 font-light ${descriptionClassName}`}>
        {description}
      </p>
      {Component}
    </div>
  );
};

export default HeaderParaComp;

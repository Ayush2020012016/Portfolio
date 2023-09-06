import React from 'react';
import HeaderParaComp from '../Packages/Components/HeaderParaComp';
import img1 from './images/build_momentum.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/s9vXZYp/build-momentum.jpg')`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'saturation',
      }}
      className=" bg-cover w-full h-full px-16 py-4 text-white"
    >
      <div className="flex items-center justify-between">
        <HeaderParaComp
          className="w-[60%]"
          heading={'Welcome to My Advocate Portfolio'}
          description={
            'As an experienced advocate, I am passionate about inspiring change and helping communities thrive. Let me share my experience and insights with you.'
          }
          Component={<span></span>}
        />
        <div className="w-[40%]">This is the image section</div>
      </div>
    </div>
  );
};

export default Home;

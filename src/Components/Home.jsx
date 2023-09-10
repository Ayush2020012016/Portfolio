import React from 'react';
import HeaderParaComp from '../Packages/Components/HeaderParaComp';
import Image1 from './images/build_momentum.jpg';
import Image2 from './images/Image2.jpeg';
import Image3 from './images/Image3.jpg';
import Image4 from './images/Image4.webp';
import Image5 from './images/Image5.jpg';
import Image6 from './images/Image6.jpg';
import Image7 from './images/image7.jpg';
import Image8 from './images/imagelast.jpg';
import Hamburger from './icons/Hamburger.jsx';
import Image9 from './images/Abhi.jpg';

const data = [
  {
    id: 1,
    imageUrl: Image6,
    heading: 'Community Outreach',
    description:
      'I actively engage with the community to share my message and build support for advocacy initiatives.',
  },
  {
    id: 2,
    imageUrl: Image5,
    heading: 'Expertise in Law',
    description:
      'My expertise in law has given me a deep understanding of legal processes and how to navigate complex issues.',
  },
  {
    id: 3,
    imageUrl: Image3,
    heading: 'Diversity and Inclusion',
    description:
      'I am committed to promoting diversity and inclusion to ensure everyone feels valued and welcome in their communities.',
  },
  {
    id: 4,
    imageUrl: Image2,
    heading: 'Public Speaking',
    description:
      'As a respected authority in advocacy, I have spoken at many public events and conferences.',
  },
];
const data2 = [
  {
    id: 1,
    heading: 'Paid Family Leave',
    description:
      'Through my advocacy efforts, I helped pass legislation requiring employers to offer paid family leave to their employees.',
  },
  {
    id: 2,
    heading: 'Environmental Justice',
    description:
      'I worked with local organizations to promote environmental justice and reduce pollution in low-income neighborhoods.',
  },
  {
    id: 3,
    heading: 'Criminal Justice Reform',
    description:
      'I challenged the use of mandatory minimum sentences and advocated for alternatives to incarceration to decrease recidivism rates.',
  },
  {
    id: 4,
    heading: 'Immigrant Rights',
    description:
      'I fought for immigrant rights, including providing access to healthcare and education, and protecting against abuse and exploitation.',
  },
];
const data3 = [
  {
    id: 1,
    heading: 'Paid Family Leave',
    description:
      'I lobbied for paid family leave, which was passed into law by unanimous vote in the state legislature.',
  },
  {
    id: 2,
    heading: 'Environmental Justice',
    description:
      'My work helped fund community gardens and reduce fossil fuel emissions in low-income neighborhoods.',
  },
  {
    id: 3,
    heading: 'Criminal Justice Reform',
    description:
      'I led a successful effort to reform the bail system in my state and reduce the number of people held in pretrial detention.',
  },
];
const TestimonialsData = [
  {
    id: 1,
    imageUrl: Image4,
    heading: 'John D.',
    description: `"I was amazed at the passion and dedication that [advocate name] brought to her work. She truly cares about the communities she serves."`,
  },
  {
    id: 2,
    imageUrl: Image7,
    heading: 'Jane L.',
    description: `"[Advocate name] is a true leader in the fight for social justice. She is highly informed and deeply committed to helping those who are most vulnerable."`,
  },
  {
    id: 3,
    imageUrl: Image8,
    heading: 'Michael S.',
    description: `"I have personally witnessed the impact of [advocate name]'s efforts in raising awareness about critical issues in our society. I am confident she will continue to spark change."`,
  },
];
const Home = () => {
  return (
    <div className="relative scroll-smooth">
      {/* fixed component. */}
      <div
        className="peer z-20 w-[40px] h-[70px] p-2 fixed left-0 rounded-xl top-1/2 -translate-y-1/2 shadow-fixedShadow flex items-center justify-center bg-white
      "
      >
        <Hamburger />
      </div>
      <div className="fixed peer-hover:translate-x-[400px] hover:translate-x-[400px] -left-[400px] top-1/2 -translate-y-1/2 font-serif z-50 transition-all ">
        <ul className="rounded-xl shadow-xl bg-white px-4 py-3 ">
          <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
            Content
          </li>
          <a href="#home">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              Welcome to My Advocate Portfolio
            </li>
          </a>
          <a href="#about">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              About me
            </li>
          </a>
          <a href="#work">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              My Advocacy Work
            </li>
          </a>
          <a href="#portfolio">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              Portfolio
            </li>
          </a>
          <a href="#testimonials">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              Testimonials
            </li>
          </a>
          <a href="#contact">
            <li className="font-medium text-[16px] font-Inter px-5 py-3 hover:bg-slate-200 rounded-xl  relative cursor-pointer before:content-[''] before:w-2 before:h-2 before:bg-black before:absolute before:top-[43%] before:left-1  before:rounded-full">
              Contact Me
            </li>
          </a>
        </ul>
      </div>
      {/* first section */}
      <div className={` bg-cover  h-full  text-white  relative z-10   beforeImage `} id="home">
        <div className="flex gap-x-2 md:flex-row flex-col items-center justify-between w-full md:w-4/5 mx-auto px-4 md:px-2 py-[100px]">
          <HeaderParaComp
            className="w-[100%]"
            heading={'Pt. Abhishek Narayan Upadhyay'}
            headingClassName="text-white text-[50px]"
            description={
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      'Welcome to My Portfolio <div style="padding-top:20px" className="mt-3"><div/>As an experienced advocate, I am passionate about inspiring change and helping communities thrive. Let me share my experience and insights with you.',
                  }}
                />
              </>
            }
            descriptionClassName="text-white "
            Component={<span></span>}
          />
          <div className="w-[40%]">
            <img src={Image9} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* About me */}
      <div className="sm:w-[65%] w-[90%] mx-auto py-[90px]" id="about">
        <HeaderParaComp
          className=""
          heading={'About Me'}
          description={
            'I have been advocating for social justice and equity for over a decade. My education and experience has given me a unique understanding of how to effect change. I am dedicated to the betterment of my community and the empowerment of marginalized groups.'
          }
          Component={
            <div className="grid grid-cols-1 md:grid-cols-2">
              {data.map((value, index) => {
                return (
                  <>
                    <div key={value.id} className="p-1 mb-1">
                      <div className="md:w-[30vw] md:h-[28vw] sm:w-[400px] sm:h-[350px] w-full max-w-[400px] max-h-[350px] mx-auto object-inherit">
                        <img
                          src={value.imageUrl}
                          alt=""
                          className="object-cover h-full w-full rounded-xl "
                        />
                      </div>
                      <div className="text-center py-4 text-black3 font-Roboto font-normal text-[24px]">
                        {value.heading}
                      </div>
                      <p className="px-2 text-center text-black2 font-Roboto font-light text-[20px]">
                        {value.description}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          }
        />
      </div>

      {/* My Advocacy work */}
      <div className="sm:w-[65%] w-[90%] mx-auto py-[90px]" id="work">
        <HeaderParaComp
          className=""
          heading={'My Advocacy Work'}
          description={
            'I have been advocating for social justice and equity for over a decade. My education and experience has given me a unique understanding of how to effect change. I am dedicated to the betterment of my community and the empowerment of marginalized groups.'
          }
          Component={
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
              {data2.map((value, index) => {
                return (
                  <>
                    <div key={index} className="p-4 mb-1 bg-red1 rounded-xl text-RedHat">
                      <div className="text-start py-4 text-black3  font-normal text-[24px]">
                        {value.heading}
                      </div>
                      <p className=" text-start text-black2 font-Roboto font-light text-[20px]">
                        {value.description}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          }
        />
      </div>

      {/* My Portfolio */}
      <div className="sm:w-[65%] w-[90%] mx-auto py-[90px]" id="portfolio">
        <HeaderParaComp
          className=""
          heading={'Portfolio'}
          headingClassName=""
          description={'My portfolio showcases some of my most successful advocacy work.'}
          descriptionClassName="text-[20px] font-light"
          Component={
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-2 ">
              {data3.map((value, index) => {
                return (
                  <>
                    <div key={index} className=" mb-1 rounded-xl text-RedHat">
                      <div className="text-start py-4 text-black3  font-normal text-[24px]">
                        {value.heading}
                      </div>
                      <p className=" text-start text-black2 font-Roboto font-light text-[20px]">
                        {value.description}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          }
        />
      </div>

      {/* Testimonials */}
      <div className="sm:w-[65%] w-[90%] mx-auto py-[90px]" id="testimonials">
        <HeaderParaComp
          className=""
          heading={'Testimonials'}
          description={
            'I have been advocating for social justice and equity for over a decade. My education and experience has given me a unique understanding of how to effect change. I am dedicated to the betterment of my community and the empowerment of marginalized groups.'
          }
          Component={
            <div className="grid grid-cols-1 md:grid-cols-2">
              {TestimonialsData.map((value, index) => {
                return (
                  <>
                    <div key={value.id} className="p-1 mb-1">
                      <div className="md:w-[30vw] md:h-[28vw] sm:w-[400px] sm:h-[350px] w-full max-w-[400px] max-h-[350px] mx-auto object-inherit">
                        <img
                          src={value.imageUrl}
                          alt=""
                          className="object-cover h-full w-full rounded-xl "
                        />
                      </div>
                      <div className="text-center py-4 text-black3 font-Roboto font-normal text-[24px]">
                        {value.heading}
                      </div>
                      <p className="px-2 text-center text-black2 font-Roboto font-light text-[20px]">
                        {value.description}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          }
        />
      </div>

      {/* Contacts */}
      <div className="sm:w-[65%] w-[90%] mx-auto py-[90px]" id="contact">
        <HeaderParaComp
          className=""
          heading={'Contacts'}
          headingClassName=""
          description={'My portfolio showcases some of my most successful advocacy work.'}
          descriptionClassName="text-[20px] font-light"
          Component={
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2">
                <div className="p-4 rounded-xl mb-4 bg-red1">
                  <div className="text-start py-4 text-black3  font-normal text-[24px]  sm:text-[20px]">
                    Email
                  </div>
                  <p className=" text-start text-black2 font-Roboto font-light text-[20px] sm:text-[14px]">
                    advocate@email.com
                  </p>
                </div>
                <div className="p-4 rounded-xl mb-4 bg-red1">
                  <div className="text-start py-4 text-black3  font-normal text-[24px]  sm:text-[20px]">
                    Phone
                  </div>
                  <p className=" text-start text-black2 font-Roboto font-light text-[20px] sm:text-[14px]">
                    advocate@email.com
                  </p>
                </div>
                <div className="p-4 rounded-xl mb-4 bg-red1">
                  <div className="text-start py-4 text-black3  font-normal text-[24px]  sm:text-[20px]">
                    Address
                  </div>
                  <p className=" text-start text-black2 font-Roboto font-light text-[20px] sm:text-[14px]">
                    advocate@email.com
                  </p>
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Home;




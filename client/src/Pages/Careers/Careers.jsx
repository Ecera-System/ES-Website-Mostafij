import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Careers = () => {

    return (<>
        <PageTitle title='Find your dream job - ES Careers'></PageTitle>
        <Header isEnlistco={true} />
        <section className='bg-no-repeat bg-center text-center bg-[#020820]'
            style={{ backgroundImage: `url(/Images/globe-banner.png)` }}
        >
            <div className='md:py-44 py-20'>
                <h1 className='md:text-[42px] text-3xl font-bold text-center text-white'>
                    With Ecera System
                </h1>
                <p className='text-lg font-medium text-white py-3'>
                    find the career you deserve
                </p>
            </div>
        </section>
        <section className='py-8 flex justify-center'>
            <div className='lg:w-max w-[90%] bg-blue-50 flex md:flex-row flex-col justify-center md:gap-16 gap-5 lg:px-16 lg:py-12 p-10 mt-10 mb-32 rounded-xl'>
                <div>
                    <h1 className='text-xl font-medium text-gray-600'>To apply jobs in India :</h1>
                    <p className='text-base font-medium mt-3 text-gray-600'>
                        Email your CV
                        <a href="mailto:career@ecersystem.com" className='ml-2 text-blue-600'>
                            career@ecersystem.com
                        </a>
                    </p>
                </div>
                <div className='md:h-full h-0.5 md:w-0.5 w-full bg-gray-300' />
                <div>
                    <h1 className='text-xl font-medium text-gray-600'>To apply jobs in US :</h1>
                    <p className='text-base font-medium mt-3 text-gray-600'>
                        Email your CV
                        <a href="mailto:ushire@ecerasystem.com" className='ml-2 text-blue-600'>
                            ushire@ecerasystem.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default Careers;
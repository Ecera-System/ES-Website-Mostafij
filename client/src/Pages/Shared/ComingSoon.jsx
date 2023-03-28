import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PageTitle from './PageTitle';

const ComingSoon = () => {
    return (<>
        <PageTitle title='Help Center'></PageTitle>
        <Header></Header>
        <section className='flex items-center justify-center h-[calc(100vh-100px)]'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl text-gray-400 text-center'>Coming soon.....</h1>
        </section>
        <Footer></Footer>
    </>);
};

export default ComingSoon;
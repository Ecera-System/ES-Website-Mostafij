// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import Header from "../Shared/Header/Header";
import eceraLogo from "./images/ecera-logo.png";
import Footer from "../Shared/Footer/Footer";

// H1BVisaProcess component
const H1BVisaProcess = () => {
  return (
    <>
      {/* Page Title */}
      <PageTitle title="H1B Visa Process - ES"></PageTitle>
      {/*  */}
      <Header></Header>
      {/*  */}
      {/* Header Section */}
      <section className="text-center bg-gradient-to-r from-violet-700 to-blue-600">
        {/* Navigation Bar */}
        {/* <nav className="w-full flex items-center justify-between lg:px-14 px-5 py-2 duration-300 ease-out">
          <div>
          
            <Link to={"/"}>
              <img className="w-14 h-14" src={eceraLogo} alt="ecera logo" />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-x-8 text-base font-medium text-gray-50">
            <li className="py-4 cursor-pointer hover:text-blue-400">
              <Link to="/">Home</Link>
            </li>
  
          </ul>
        </nav> */}

        {/* Page Content */}
        <div className="md:py-20 py-10 md:w-3/4 w-11/12 mx-auto">
          <h1 className="md:text-5xl text-3xl text-center text-white">
            H1B Visa Process Information
          </h1>
          <div className="text-gray-100 md:text-lg text-base tracking-wide md:pt-10 pt-5 pb-5">
            {/* Add your content for the H1B visa process page */}
            <p>
              Here you can have information about the H1B visa process and any
              related details.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="lg:w-3/5 md:w-4/5 w-11/12 mx-auto text-center">
          <h1 className="text-3xl font-medium text-gray-700">
            Details of H1B Visa Process
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            The H1B Visa is one of the most competitive visas to apply for. Due
            to there being an annual visa cap, there is a huge demand from US
            employers applying for this visa. Additionally, since it is a route
            to a Green Card, it is one of the best visas to apply to work in the
            US.
          </p>
          <h2>Validity of the Visa</h2>
          <p>
            Visa has a validity of three years with the option to extend it up
            to a maximum of six years. Once the validity is over, a foreign
            worker must either leave the U.S. or obtain a different visa. If he
            does not comply, he can lose his legal status and can even be
            deported.
          </p>
        </div>
      </section>
      {/* Add additional sections/content as needed for the H1B visa process page */}
      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
};

export default H1BVisaProcess;

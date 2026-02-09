import React from "react";
import PageTitle from "../Shared/PageTitle";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Careers = () => {
  return (
    <>
      <PageTitle title="Find your dream job - ES Careers"></PageTitle>
      <Header isEnlistco={true} />
      <section
        className="bg-no-repeat bg-center text-center bg-[#020820]"
        style={{ backgroundImage: `url(/Images/globe-banner.png)` }}
      >
        <div className="md:py-44 py-20">
          <h1 className="md:text-[42px] text-3xl font-bold text-center text-white">
            With Ecera System
          </h1>
          <p className="text-lg font-medium text-white py-3">
            find the career you deserve
          </p>
        </div>
      </section>

      <section className="2xl:w-[1100px] lg:w-4/5 w-11/12 mx-auto py-14 flex md:flex-row flex-col items-start md:gap-0 gap-10">
        <div className="md:w-2/6 w-full">
          <div className="w-max">
            <h2 className="text-3xl font-medium text-blue-600">
              Quick Links
              <i className="fa-solid fa-link ml-2"></i>
            </h2>
            <div className="w-full h-0.5 bg-gray-200 my-5" />
            <ul className="flex flex-col gap-3 text-base font-medium text-gray-500">
              <li>
                <a
                  href="/career-overview"
                  className="duration-300 hover:text-blue-600"
                >
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2" />
                  Career Overview
                </a>
              </li>
              <li>
                <a
                  href="/employee-benefits"
                  className="duration-300 hover:text-blue-600"
                >
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2" />
                  Employee Benefit
                </a>
              </li>
              <li>
                <a
                  href="/immigration"
                  className="duration-300 hover:text-blue-600"
                >
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2" />
                  Immigration
                </a>
              </li>
              <li>
                <a href="/careers" className="text-blue-600">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2" />
                  Current-Opening
                </a>
              </li>
              <li>
                <a href="/about" className="duration-300 hover:text-blue-600">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 inline-block mt-2 mr-2" />
                  Join-Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-4/6 w-full">
          <h1 className="text-4xl font-medium text-blue-600">
            Current Openings
          </h1>
          <h4 className="text-lg font-medium text-gray-500 my-5">
            Join our dynamic team of technology professionals and be part of
            innovative projects that shape the future of IT solutions.
          </h4>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Software Engineer
            </h2>

            <p className="text-base text-gray-500 mb-4">
              Software Engineer responsibilities include gathering user
              requirements, defining system functionality, and writing code in
              various programming languages such as Java, Ruby on Rails, or .NET
              technologies (e.g., C++ or JScript.NET). The ideal candidate is
              well-versed in the software development life cycle (SDLC), from
              initial system analysis through testing and deployment. The
              Software Engineer is expected to develop high-quality, innovative,
              and fully functional software in compliance with coding standards
              and technical design.
            </p>

            <p className="text-base text-gray-500 mb-6">
              The role includes executing the full software development life
              cycle, creating flowcharts, layouts, and documentation to identify
              solutions, writing efficient and testable code, and integrating
              components into a complete software system. Responsibilities also
              encompass developing verification plans, maintaining software
              functionality, troubleshooting issues, and deploying systems with
              user feedback consideration. Candidates must ensure all software
              remains compliant with industry standards and up to date with the
              latest features.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Responsibilities
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Execute full software development life cycle (SDLC)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Develop flowcharts, layouts and documentation to identify
                    requirements and solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Write well-designed, testable code
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Produce specifications and determine operational feasibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Integrate software components into a fully functional
                    software system
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Develop software verification plans and quality assurance
                    procedures
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Document and maintain software functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Troubleshoot, debug and upgrade existing systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Deploy programs and evaluate user feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Comply with project plans and industry standards
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ensure software is updated with latest features
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Skills
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Proven work experience as a Software Engineer or Software
                    Developer
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Experience designing interactive applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ability to develop software in Java, Ruby on Rails, C++ or
                    other programming languages
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Excellent knowledge of relational databases, SQL and ORM
                    technologies (JPA2, Hibernate)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Experience developing web applications using at least one
                    popular web framework (JSF, Wicket, GWT, Spring MVC)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Experience with test-driven development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Proficiency in software engineering tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ability to document requirements and specifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    BSc degree in Computer Science, Engineering or relevant
                    field
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-base text-gray-500 mb-3">
            We are always looking for talented individuals to join our team. If
            you don't see a position that matches your skills, feel free to send
            us your resume and we'll keep it on file for future opportunities.
          </p>
        </div>
      </section>

      <section className="py-8 flex justify-center">
        <div className="lg:w-max w-[90%] bg-blue-50 flex md:flex-row flex-col justify-center md:gap-16 gap-5 lg:px-16 lg:py-12 p-10 mt-10 mb-32 rounded-xl">
          <div>
            <h1 className="text-xl font-medium text-gray-600">
              To apply jobs in India :
            </h1>
            <p className="text-base font-medium mt-3 text-gray-600">
              Email your CV
              <a
                href="mailto:career@ecerasystem.com"
                className="ml-2 text-blue-600"
              >
                us.hr@ecerasystem.com
              </a>
            </p>
          </div>
          <div className="md:h-full h-0.5 md:w-0.5 w-full bg-gray-300" />
          <div>
            <h1 className="text-xl font-medium text-gray-600">
              To apply jobs in US :
            </h1>
            <p className="text-base font-medium mt-3 text-gray-600">
              Email your CV
              <a
                href="mailto:ushire@ecerasystem.com"
                className="ml-2 text-blue-600"
              >
                us.hr@ecerasystem.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Careers;

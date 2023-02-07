import React from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import tac from '../../Images/terms-and-conditions.png';
import Footer from '../Shared/Footer/Footer';

const TermsOfServices = () => {
    return (<>
        <PageTitle title='Terms Of Service - Ecera System'></PageTitle>
        <Header />
        <section className='py-16 bg-gradient-to-r from-blue-600 to-cyan-500'>
            <div className='2xl:w-[800px] xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col-reverse items-center justify-between gap-10'>
                <div>
                    <h1 className='md:text-5xl text-3xl text-white font-medium text-center'>
                        Terms of Services
                    </h1>
                </div>
                <div>
                    <img src={tac} alt="" className='md:w-52 w-32 mx-auto h-auto' />
                </div>
            </div>
        </section>
        <section className='bg-blue-50 py-12'>
            <div className='lg:w-[800px] md:w-4/5 w-[96%] mx-auto'>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        OVERVIEW
                    </h1>
                    <p>
                        Ecerasystem.com DOES NOT PROVIDE SERVICES TO ANYONE OR COMPANY THAT PROMOTES PORNOGRAPHIC MATERIAL, NUDITY, GAMBLING, ALCOHOL, TOBACCO, ILLEGAL DRUGS, FIREARMS, EXPLOSIVES, WEAPONS, FIREWORKS, SCAMS, HACKING & CRACKING, SPAM BOTS, FAKE DOCUMENTS, FRAUD, COPYRIGHTED MATERIALS, MIRACLE CURES & MIND READERS, MAGIC, HATE, VIOLENCE, RACISM, OFFENSIVE MATERIAL, DISCRIMINATIVE CONTENT, INVASION OF PRIVACY, & ILLEGAL ACTIVITIES.
                    </p>
                    <p>
                        Even if you do not promote the above content directly on your website, but you link to such materials, then you are still in violation of our terms. If you fall under any of these categories, please do not contact us for performing services.
                    </p>
                    <p>
                        Ecerasystem.com strives to offer the best possible services, so we require certain policies and guidelines that must govern our efforts and protect our relationships with clients, as well as the State and Federal government.
                    </p>
                    <p>
                        Practices that are in violation of our guidelines and policies are strictly unacceptable and may result in the immediate termination of services.
                    </p>
                    <p>
                        If you are hosting with us, Ecerasystem.com reserves the right to terminate your account at any time without a refund. Reasons for termination include, but is not limited to:
                    </p>
                    <p>
                        *Abuse of the machines – either intentional or due to improper coding
                    </p>
                    <p>
                        *Committing or Promoting any type of illegal activity including fraud, mailbombing, denial of service attacks, storing and/or housing and/or linking to illegal content, including but not limited to, “warez”, “hacking”/”cracking”/”key generators”.
                    </p>
                    <p>
                        *The Services to traffic in illegal drugs, gambling and/or obscene materials.
                    </p>
                    <p>
                        *The Services to misappropriate or infringe the patents, copyrights, trademarks or other intellectual property rights of any third party.
                    </p>
                    <p>
                        *Additionally, Ecerasystem.com reserves the right to terminate your account if at any time your site has pornography and/or nudity of any kind, including but not limited to, adult pornography, Anime, child pornography, “adult content” and/or the written word of a sexual nature.
                    </p>
                    <p>
                        *Use of ad-servers, attempts to circumvent quota system owned by ‘nobody’, certain podcasting sites, use of torrent software, proxies, excessive resource usage or ‘core dumping’.
                    </p>
                    <p>
                        *Attempts to circumvent any of our security policies, procedures or systems.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        1. ACCEPTANCE OF TERMS
                    </h1>
                    <p>
                        This Terms of Service (TOS) agreement is between you (Client) and Internet Marketing Elites, LLC (imelites.com or ecerasystem.com s.net), a Nevada limited liability company, and its legal successors and assigns. Internet Marketing Elites, LLC may do business under the names imelites.com, IM Elites, ecerasystem.com and Ecerasystem.com s.
                    </p>
                    <p>
                        By accepting this Terms of Service (TOS) electronically or in writing, and/or by using Ecerasystem.com services, including but not limited to, web hosting, domain name registration, web design and development, search engine optimization, social media marketing, pay per click advertising, display advertising, banner ads, conversion optimization, and consulting, you (Client) agree to be bound by the following terms and conditions. You, the Client also agrees that electronic acceptance of this TOS shall have the same force and effect as Client agreeing to this TOS in hand written signature.
                    </p>
                    <p>
                        Ecerasystem.com provides its services to Client subject to the following TOS, which may be updated from time to time without notice. Client should periodically review the most current version of the TOS at Ecerasystem.com s.net/terms-of-service/. Failure to comply with the TOS may result in account or service termination or cancelation. By using Ecerasystem.com s.net’s services, Client agrees to (and hereby signs) the most current version of the TOS.
                    </p>
                    <p>
                        Client’s acceptance of the TOS is binding upon all Ecerasystem.com services, including the purchase of additional services at a later date.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        2. DEFINITIONS
                    </h1>
                    <p>
                        <span className='font-medium text-gray-700'>Agreement</span> means the Project Proposal, Terms and Conditions, Statement of Work and any other attached documents.
                    </p>
                    <p>
                        <span className='font-medium text-gray-700'>Project</span> means the scope and purpose of the Client’s identified usage of the work product as described in the Project Proposal.
                    </p>
                    <p>
                        <span className='font-medium text-gray-700'>Services</span> means all services and the work product to be provided to Client by Company as described and otherwise further defined in the Project Proposal.
                    </p>
                    <p>
                        <span className='font-medium text-gray-700'>Final Design</span> means the final versions of Deliverables provided by Company and accepted by Client.
                    </p>
                    <p>
                        <span className='font-medium text-gray-700'>Deliverables</span> means the services and work product specified in the Project Proposal to be delivered by Company to Client.
                    </p>
                    <p>
                        <span className='font-medium text-gray-700'>Client Content</span> means all materials, writing, images or other creative content provided by Client used in preparing or creating the Deliverables.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        3. EVALUATION AND ACCEPTANCE
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>UNIQUE SPECIFICATIONS DOCUMENT :</h2>
                    <p>
                        If Client has specific requirements regarding the Project, Client must write a Unique Specifications Document to inform Company of the overall Project requirements before Company submits an official proposal to Client. The Unique Specifications Document MUST INCLUDE DETAILED and SUFFICIENT EXPLANATIONS DESCRIBING EACH PROJECT REQUIREMENT. Company will not be held responsible for misunderstanding and therefore applying inaccurate details in Client Project if the misunderstanding was due to insufficient, improper, or erroneous information in the Unique Specifications Document. Any newly Unique Specifications Document delivered to Company after Client received a quote from Company WILL NOT be associated with the former quote sent and Company may reevaluate the newly detailed Unique Specifications Document for an additional or renewed quote. Company will not increase or change former quotes without first presenting new quotes to Client.
                    </p>
                    <p>
                        Unique Specifications Document will be accepted in the form of a text or word document, email or messaging application, or an online web form such as a
                        <a
                            className='text-blue-600 ml-1'
                            target={'blank'}
                            href="https://seowebdesigners.net/web-design-questionnaire/"
                        >web design questionnaire
                        </a>.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>TESTING :</h2>
                    <p>
                        Company will test and correct Deliverables using commercially reasonable efforts before providing Deliverables to Client to ensure there are no defects. If Client found a defect, Client will have Thirty (30) days from the time of Deliverables to write a detailed explanation of defect(s) to Company for fixing. If Company has determined that defects were not caused by or not part of the original Deliverables, Company will not be obligated to perform any actions without additional costs.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>FINAL DESIGN :</h2>
                    <p>
                        The Final Design Policy ensures that all Project requirements were met by Company. Upon completion and testing of a Project, Company will present full Deliverables to Client. Once a Project is fully presented to Client, the Project is set as complete by default and Company will not be obligated to perform further services beyond this agreement. Any payments pertaining to the final Deliverables shall be paid in full by Client within seven (7) days from the time of being presented with Deliverables.
                    </p>
                    <p>
                        If Client wishes to request additional changes after the final Deliverables, Client agrees to inform Company in a written text document (such as Microsoft Word) of any further changes (if any) according to the REVISION POLICY below, within fourteen days of being fully presented with Deliverables. If Client does not notify Company of any further changes within fourteen (14) days of being fully presented with Deliverables, then Project will remain AS IS and any additional changes requested by Client after the fourteen (14) day period will be subject to ADDITIONAL COSTS. If Client wishes to request additional changes after being presented with Deliverables, Client may do so without delaying any invoices pertaining to the Deliverables. Company will continue to work with Client according to the REVISIONS POLICY below and within the boundaries of this agreement.
                    </p>
                    <p>
                        Company holds full ownership of Deliverables until Client has paid in full.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>REVISIONS :</h2>
                    <p>
                        Company will allow one (1) complementary revision round to be requested by Client anytime during fourteen days (14) after being fully presented with final Deliverables. Client may only request changes pertaining to the front-end visual design. If Client used the one (1) complimentary revision round and wishes to request additional changes, Client will be billed at an hourly rate according to the ADDITIONAL COSTS section below. All change requests MUST be in written form and emailed to Company. If Client does not request any changes and the fourteen day period has expired, then the one (1) complementary revision round will automatically become void with NO EXCEPTIONS.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>REVISION POLICY :</h2>
                    <p>
                        The complimentary revision round is subject to the following :
                    </p>
                    <p>
                        A.) Client acknowledges that the complementary revision round is NOT part of the main Project requirements or Scope of Work and is only offered to Client as a means for removing or replacing any non-pleasing design elements as well as making enhancements or making additions in the overall design.
                    </p>
                    <p>
                        B.) Client may request changes they feel is needed to more accurately represent their brand visually, or may request for elements to be removed, or may request for color changes of any design element, or may request additional visual design elements.
                    </p>
                    <p>
                        C.) The complementary revision round is limited to the front-end visual design, and requests may only be used for elements achieved with HTML and CSS, and may not be used for back-end functions or any element that was achieved by PHP, JQuery, Java, and Ajax (or any other programing function).
                    </p>
                    <p>
                        D.) The complementary revision round is limited to this agreement and must stay within the original Scope of Work; Client may not request additional features that were not included in the Scope of Work with the exception of visual design details using CSS and HTML.
                    </p>
                    <p>
                        E.) The revision round may not exceed 25 percent of the time required to produce Deliverables and not to exceed 25 percent of the work required to produce Deliverables. For example, if the total time-frame of the total Project is four (4) weeks, each revision round may not exceed one (1) week or one quarter of the work that was needed to produce the final Project.
                    </p>
                    <p>
                        F.) Any requests that are not included in the original Project Scope is subject to a new proposal from Company. See number 7. CHANGES TO PROJECT SCOPE
                    </p>
                    <p>
                        G.) Further change requests after the initial complementary round is used will be subject to an hourly rate according to the ADDITIONAL COSTS section below.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>TYPOGRAPHY :</h2>
                    <p>
                        Typography is the art and technique of arranging type to make written language most appealing to learning, recognition and easy reading. The arrangement of type involves carefully selecting typefaces, point size, line length, line-spacing, and adjusting the space within letters pairs based on a mathematical formula to achieve the perfect golden ratio. The golden ratio provides the optimal proportional relationship between typographical variables.
                    </p>
                    <p>
                        With respect to Client, Company does not wish to be associated with bad practices. Therefore, Company adopts a golden ratio typography formula based on the mathematical variables mentioned above, all to achieve the perfect typography for the best possible viewing. This is a best practice widely used in web design and therefore we will not change the elements needed to make the typography work, especially in regards to letter spacing and line height. It is guaranteed to be set at the perfect ratio and applying typography in a manner other than what we practice is simply not practical and will ultimately degrade the visual design and make it harder for users to read Client content.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>FONT TYPE :</h2>
                    <p>
                        By default, we choose a font type that may best fit your project needs, but If client wishes to use a custom font, client is responsible for providing the font files needed to install onto the website before the project starts. Font formats to be provided to us include .TT, .OTF, .TTF and .EOT. If Client wishes to change the font type after the project has already started, changing it will incur ADDITIONAL COSTS as described below.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        4. COMPANY RESPONSIBILITIES
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>REPRESENTATION :</h2>
                    <p>
                        Company shall use all reasonable efforts pertaining to this agreement to meet all Deliverables listed in Scope of Work, Unique Specifications Document, or Web Design Questionnaire, whichever is used to present Client Project requirements to Company. Company will provide the Services identified in the Agreement in a professional and workmanlike manner.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>PROJECT TIME FRAME :</h2>
                    <p>
                        The Time Frame is as specified in the Proposal, Scope of Work, or Quote provided to Client. The estimated time frame written in the Clients Proposal, Scope of Work or Quote is governed by this agreement.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>COMPANY DELAYS :</h2>
                    <p>
                        Company shall use all reasonable efforts to meet the delivery schedule. Company may extend the due date for any Deliverable by giving written notice to Client with a specified time frame.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        5. CLIENT RESPONSIBILITIES
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>ACKNOWLEDGMENT :</h2>
                    <p>
                        Client acknowledges that it is responsible for performing the following in a reasonable and timely manner: (a) Provide Client Content in a form suitable for use in the Deliverables without further preparation by Company, unless otherwise specified in the Project Proposal; (b) Proofread all Deliverables. Client will be charged for correcting errors after the acceptance of any Deliverable; © Make decisions regarding other parties.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>CLIENT DELAYS :</h2>
                    <p>
                        Client shall use all reasonable efforts to provide needed information, materials and approvals. Any delay by Client will result in a day-for-day extension of the due date for all Deliverables. If certain materials or content is needed from Client to complete the Project and Client delays the delivery of such content for thirty (30) days, then Company may terminate services or deliver Project AS IS and all monies paid will be retained by Company and if applicable, an additional cost will be charged to the CLIENT for all work completed beyond what was already paid for.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        6. GENERAL
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>GENERAL DELAYS :</h2>
                    <p>
                        Any delay caused be conditions beyond the reasonable control of the parties shall not be considered a breach and will result in a day-for-day extension any performance due. Each party shall use reasonable efforts to notify the other party, in writing, of a delay. Conditions beyond the reasonable control of the parties include, but are not limited to, natural disasters, acts of government after the date of agreement, power failure, fire, flood, acts of worship, labor disputes, riots, acts of war, terrorism and epidemics.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>TERMINATION :</h2>
                    <p>
                        Either party may terminate this agreement at any time, on fourteen (14) days prior written notice if the other party breaches any of its material responsibilities or obligations under this Agreement and fails to cure that breach during that fourteen (14) day period.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>TERMINATION FEES :</h2>
                    <p>
                        In the event of termination, Client shall pay Company for the Services performed through the date of termination in the amount of a prorated portion of the fees due. Client shall pay all Expenses, Fees, and Additional Costs incurred through the date of termination.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>DISPUTE RESOLUTION :</h2>
                    <p>
                        Parties agree to attempt to resolve any dispute by negotiation between the parties.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>LEGAL FEES :</h2>
                    <p className='font-medium underline'>
                        Client agrees to pay any and all legal fees that was a result of any claim, lawsuit or dispute that client pursues, including lawyer fees, travel expense as a result of any lawsuit and all non-legal expenses that were as a result of any lawsuit or claim, regardless of the winning party.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        7. CHANGES TO PROJECT SCOPE
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>CHANGE REQUEST :</h2>
                    <p>
                        If Client wants to change the Scope of Work after acceptance of this Agreement, Client shall send Company a written Change Order describing the requested changes in detail. Within seven (7) days of receiving a Change Order, Company will respond with a statement proposing Company’s availability, additional fees, changes to delivery dates, and any modification to the Terms and Conditions. Company will evaluate each Change Order at its standard rate and charges.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>MAJOR CHANGE :</h2>
                    <p>
                        If Client requests are at or near 25 percent of the time required to produce Deliverables, or the value of the Scope of Services, Company shall be entitled to submit a new and separate Proposal to Client for written approval. Company shall not begin work on the revised services until it receives a fully signed revised proposal and any additional fees.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>MINOR CHANGE :</h2>
                    <p>
                        If Client requests are Minor Changes, Client will be billed on a time and materials basis at Company’s hourly rate of $75 per hour. Such charges shall be in addition to all other amount payable under this Agreement, despite any maximum budget, contract price or final price identified. Company may extend or modify any delivery schedule or deadlines in the Agreement as may be required by such changes.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>ACCEPTANCE / REJECTION :</h2>
                    <p>
                        Client will have fourteen (14) days to respond in writing accepting or rejecting the new proposal. If Client rejects the proposal, Company will not be obligated to perform any services beyond those in the original Agreement.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        8. ACCREDITATION AND PROMOTION
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>ACCREDITATION :</h2>
                    <p>
                        Company shall be entitled to place accreditation, as a hyperlink and/or image or otherwise, in the form, size and location as incorporated by Company in the Deliverables within the bottom footer of the Final Deliverables. In all cases, this is normally in the form of a small and almost non-visible hyper-link.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>PROMOTION :</h2>
                    <p>
                        Company retains the right to reproduce, publish and display the Deliverables in Company’s portfolios and websites, in galleries, design periodicals and other media or exhibits for the purposes of recognition of creative excellence or professional advancement, and to be credited with authorship of the Deliverables in connection with such uses.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>PROMOTIONAL APPROVAL :</h2>
                    <p>
                        Either party, subject to the others reasonable approval, may describe its role in the Project on its website and in other promotional and marketing materials, and, if not expressly objected to, include a link to the other party’s website.
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        9. CONFIDENTIAL INFORMATION
                    </h1>
                    <p>
                        Client’s “Confidential Information” includes information that Company should reasonably believe to be confidential. Company’s “Confidential Information” includes the source code of any Company Tools. All material considered confidential by either party shall be designated as confidential. Confidential Information shall not be disclosed to third parties and shall only be used as needed to perform this Agreement. Confidential Information shall not include any information that is already known by the recipient, becomes publicly known through no fault of the recipient, or is received from a third party without a restriction on disclosure
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] mb-5'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        10. COMPENSATION
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>INVOICES :</h2>
                    <p>
                        All invoices are payable within seven (7) days of receipt. Invoices shall list any expenses and additional costs as separate items.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>FEES :</h2>
                    <p>
                        Client agrees to pay Company the fees listed in the invoice, including all taxes if applicable.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>PAYMENT SCHEDULE :</h2>
                    <p>
                        Client agrees to follow the payment schedule presented by Company.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>ACCEPTED PAYMENTS :</h2>
                    <p>
                        Accepted methods of payments are Visa, Mastercard, Discover, Paypal and Amex. All payment types must be submitted through our secure website or secure invoice system. All payments except PayPal are processed securely through Bank Of America.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>ADDITIONAL PAYMENT TERMS :</h2>
                    <p>
                        WE DO NOT TAKE CREDIT INFO OVER THE PHONE OR EMAIL. WE DO NOT ACCEPT CHECKS, WIRE TRANSFERS OR MONEY ORDERS.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>ADDITIONAL COSTS :</h2>
                    <ul>
                        <li>
                            Any non-invoiced services (not included in the Project Proposal/Scope of Work) that Client requests as an addition to the original project scope will incur additional costs. Company may choose to bill Client at an hourly rate or provide a total estimate/quote. Our standard rates below may apply.
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                Copy writing/Content Writing: $95 per 500 words or less
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                Additional Design Changes/Revisions: $145/hour ($25 minimum charge if minor change and not exceeding 30/minutes)
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                Programming/Writing Scripts: $250/hour
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                Significant database updates: $75/hour ($35 minimum charge fee if under 30/minutes)
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                Search engine optimization consulting: $350/hour
                            </p>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className="mt-1">*</span>
                            <p>
                                There is a $50 website migration fee when new projects on a temporary domain are not migrated within the Revision time period
                            </p>
                        </li>
                    </ul>
                    <h2 className='text-lg font-medium text-gray-600'>REFUND & CANCELLATION :</h2>
                    <p>
                        Please read our
                        <a
                            className='text-blue-600 ml-1'
                            target={'blank'}
                            href="https://seowebdesigners.net/refund-policy/"
                        >REFUND & CANCELLATION POLICY.
                        </a>
                    </p>
                </div>
                <div className='flex flex-col gap-5 text-base text-gray-500 bg-white md:p-10 p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]'>
                    <h1 className='text-2xl text-gray-700 font-medium uppercase'>
                        11. INDEMNIFICATION AND LIABILITY
                    </h1>
                    <h2 className='text-lg font-medium text-gray-600'>BY CLIENT :</h2>
                    <p>
                        Client shall indemnify Company from any and all damages, liabilities, costs, losses, expenses or attorney fees arising out of any claim, demand, or action by a third party arising out of any breach of Client’s responsibilities or obligations, representations or warranties under this Agreement. Company shall promptly notify Client in writing of any third party claim or suit. Client shall have the right to fully control the defense and any settlement of such claim or suit.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>BY COMPANY :</h2>
                    <p>
                        In the case of a third party lawsuit or proceeding based on a claim that Deliverables breach the third party’s intellectual property rights, and it is determined that such infringement has occurred, Company may at its own expense, replace any infringing content with non-infringing content.
                    </p>
                    <h2 className='text-lg font-medium text-gray-600'>LIMITATION OF LIABILITY :</h2>
                    <p>
                        THE SERVICES AND THE WORK PRODUCT OF COMPANY ARE SOLD “AS IS.” IN ALL CIRCUMSTANCES, THE MAXIMUM LIABILITY OF COMPANY, ITS DIRECTORS, OFFICERS, EMPLOYEES, DESIGN AGENTS AND AFFILIATES (“COMPANY PARTIES”), TO CLIENT FOR DAMAGES FOR ANY AND ALL CAUSES WHATSOEVER, AND CLIENT’S MAXIMUM REMEDY, REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT OR OTHERWISE, SHALL BE LIMITED TO THE NET PROFIT OF COMPANY. IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY LOST DATA OR CONTENT, LOST PROFITS, BUSINESS INTERRUPTION OR FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO THE MATERIALS OR THE SERVICES PROVIDED BY COMPANY, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>);
};

export default TermsOfServices;
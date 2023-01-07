import { Route, Routes } from "react-router-dom";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import GetEstimate from "./Pages/GetEstimate/GetEstimate";
import Home from "./Pages/Home/Home";
import ITConsultancy from "./Pages/ITConsultancy/ITConsultancy";
import PackWebDesign from "./Pages/Packages/PackWebDesign";
import RemoteEmployees from "./Pages/RemoteEmployees/RemoteEmployees";
import WebDevelopment from "./Pages/Services/WebDevelopment";
import NotFound from "./Pages/Shared/NotFound";
import PackDigitalMarketing from "./Pages/Packages/PackDigitalMarketing";
import PackageInINR from "./Pages/Packages/PackageInINR";
import PackOffers from "./Pages/Packages/PackOffers";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BlogPage from "./Pages/Blog/BlogPage";
import FAQ from "./Pages/FAQ/FAQ";
import Careers from "./Pages/Careers/Careers";
import PayInvoice from "./Pages/PayInvoice/PayInvoice";
import Trainings from "./Pages/Trainings/Trainings";
import TermsOfServices from "./Pages/TermsOfServices/TermsOfServices";

function App() {  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/get-estimate' element={<GetEstimate />} />
      <Route path='/website-development' element={<WebDevelopment />} />
      <Route path='/digital-marketing' element={<DigitalMarketing />} />
      <Route path='/remote-employees' element={<RemoteEmployees />} />
      <Route path='/IT-consultancy' element={<ITConsultancy />} />
      <Route path='/package/web-design' element={<PackWebDesign />} />
      <Route path='/package/digital-marketing' element={<PackDigitalMarketing />} />
      <Route path='/package/in-INR' element={<PackageInINR />} />
      <Route path='/package/offers' element={<PackOffers />} />

      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/invoice' element={<PayInvoice />} />
      {/* <Route path='/trainings' element={<Trainings />}></Route> */}
      <Route path='/terms-of-services' element={<TermsOfServices />} />

      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;

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
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ActivateEmail from "./Pages/Auth/ActivateEmail";
import StripeCheckoutMsg from "./Pages/Shared/PaymentButton/StripeCheckoutMsg";
import RequireAuth from "./AuthHook/RequireAuth";
import UserProfile from "./Pages/UserProfile/UserProfile";
import OrderHistory from "./Pages/UserProfile/OrderHistory";
import Registration from "./Pages/Registration/Registration";
import ComingSoon from "./Pages/Shared/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/get-estimate' element={<GetEstimate />} />
      <Route path='/website-development' element={<WebDevelopment />} />
      <Route path='/digital-marketing' element={<DigitalMarketing />} />
      <Route path='/remote-employees' element={<RemoteEmployees />} />
      <Route path='/IT-staffing' element={<ITConsultancy />} />
      <Route path='/package/web-design' element={<PackWebDesign />} />
      <Route path='/package/digital-marketing' element={<PackDigitalMarketing />} />
      <Route path='/package/in-INR' element={<PackageInINR />} />
      <Route path='/package/offers' element={<PackOffers />} />

      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/coming-soon' element={<ComingSoon />} />
      <Route path='/invoice' element={<PayInvoice />} />
      {/* <Route path='/trainings' element={<Trainings />}></Route> */}
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/terms-of-services' element={<TermsOfServices />} />
      <Route path='/stripe/checkout' element={<StripeCheckoutMsg />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/user/activate/:activation_token' element={<ActivateEmail></ActivateEmail>}></Route>

      {/* <-- User Profile --> */}
      <Route path="/profile" element={
        <RequireAuth>
          <UserProfile></UserProfile>
        </RequireAuth>}
      >
        <Route path='/profile/order-history' element={<OrderHistory />}></Route>
      </Route>

      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;

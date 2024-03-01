import ContactInfo from "../Components/Contact/ContactInfo";
import CommonBanner from "../Shared/Banner/CommonBanner";

const ContactPage = () => {
  return (
    <div>
      <CommonBanner
        bgImg="https://i.ibb.co/BBSQXjf/photo-1496412705862-e0088f16f791.jpg"
        heading="Contact Us"
        description="Would you like to try a dish?"
      ></CommonBanner>
      <ContactInfo />
    </div>
  );
};

export default ContactPage;

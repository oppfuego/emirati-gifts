import Top1 from "../components/Top1";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <Top1
        yourCart="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Account;

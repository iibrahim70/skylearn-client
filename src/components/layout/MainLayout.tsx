import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ExamNotice from "../shared/ExamNotice";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <ExamNotice />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;

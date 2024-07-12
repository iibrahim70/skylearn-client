import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ExamReminder from "../shared/ExamReminder";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <ExamReminder />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;

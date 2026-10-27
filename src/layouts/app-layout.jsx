import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-background"></div>
      <main className="min-h-screen container flex-1">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

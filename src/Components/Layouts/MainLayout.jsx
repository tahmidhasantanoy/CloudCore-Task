import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";

const MainLayout = () => {
  const location = useLocation();

  const excludedPaths = ["/login"];

  const isExcluded = excludedPaths.includes(location.pathname);

  return (
    <>
      {!isExcluded && <Header />}
      <Outlet />
      {!isExcluded && <Footer />}
    </>
  );
};

export default MainLayout;

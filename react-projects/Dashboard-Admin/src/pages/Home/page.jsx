import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";

const Home = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

  const CTAButton = () => {
    const clickHandler = () => {
      toggle();
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    };

    return (
      <button
        onClick={clickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "در حال انتقال" : "ایجاد محصول"}
      </button>
    );
  };

  return (
    <>
      <SectionTitle title="داشبورد" buttons={<CTAButton />} />
      {/* <Summaries /> */}

      <div className="">
        {/* <DetailsCharts />
        <ProductsTable />
        <QuickOverview /> */}
      </div>
    </>
  );
};

export default Home;

import SectionTitle from "../../components/common/SectionTitle";

const Products = ({title , buttons}) => {


  const CTAButton = () => {

      return (
        <button
          onClick={""}
          className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
        >
          {/* {isRedirecting ? "در حال انتقال" : "ایجاد محصول"} */}
          Buttons
        </button>
      );
  };

  return <div>
    <SectionTitle title="محصولات" buttons={<CTAButton />} />
  </div>;
};

export default Products;

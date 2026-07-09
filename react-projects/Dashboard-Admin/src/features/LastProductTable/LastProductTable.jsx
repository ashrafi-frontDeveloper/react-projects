import { Link } from "react-router";
import Table from "../../components/common/Table/Table";

const LastProductTable = () => {
  const Buttons = () => {
    return <Link>صفحه محصولات</Link>;
  };

  return (
    <div>
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}>
        {/* Children */}
      </Table>
    </div>
  );
};

export default LastProductTable;

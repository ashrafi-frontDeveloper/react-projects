import { Link } from "react-router";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableCell from "../../components/common/Table/elements/TableHead";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import { MdOpenInNew } from "react-icons/md";
import { productsTableHeadRow } from "../../data/products";
import { products } from "../../data/products";
import clsx from "clsx";
import { FcDeleteDatabase } from "react-icons/fc";
import RemoveProductIcon from "./components/RemoveProductIcon"
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon"
import EditProducttIcon from "./components/EditProducttIcon"

const LastProductTable = () => {
  const Buttons = () => {
    return <Link 
              to={"/products"}
              className=" underline hover:text-blue-400 text-blue-500 flex-center gap-1">
                <span className="">لیست محصولات</span>
                <MdOpenInNew />
            </Link>;
  };

  return (
    <div>
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}>
        <TableHead>
          {
            productsTableHeadRow.map((row) => (
              <TableHeadCell key={row}>{row}</TableHeadCell>
            ))
          }
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge"
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>
              <TableCell>
                <span>{product.price.toLocaleString("fa-IR")}</span>
                <span className="">تومان</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProductIcon />
                  <ChangeVisibilityIcon />
                  <EditProducttIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LastProductTable;
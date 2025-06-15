import { useState } from "react";
import ProductCreateForm from "../product/product.create.form";
import ProductTable from "../product/product.table2";
import { Button, Drawer, Input, notification } from "antd";
import productAPI from "../../services/api/productAPI";
import {
  CloseCircleOutlined,
  CompressOutlined,
  DeleteFilled,
  EditFilled,
  FilterFilled,
  FilterOutlined,
  FilterTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleProductCreateForm,
  toggleProductUpdateForm,
} from "../../redux/product/product.slice";
import { Typography } from "antd";
const { Text } = Typography;

const Product = () => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const { isDisabledEditButton, isDisabledDeleteButton } = useSelector(
    (state) => state.product,
  );
  const selectedIds = useSelector(
    (state) => state.product.productTableData.selectedIds,
  );
  const { pageIndex, pageSize } = useSelector(
    (state) => state.product.productTableData,
  );

  const handleDeleteProduct = async () => {
    const res = await productAPI.deleteProduct(selectedIds);
    if (res) {
      notification.success({
        title: "Success",
        message: "Xoa san pham thanh cong",
      });

      dispatch(fetchProducts({ pageIndex, pageSize }));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Quản lý sản phẩm</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "0.5em" }}>
          <Button
            type="primary"
            style={{ alignSelf: "flex-end" }}
            onClick={() => dispatch(toggleProductCreateForm())}
          >
            <PlusOutlined />
            Create
          </Button>
          <Button
            disabled={isDisabledEditButton}
            type="primary"
            style={{ alignSelf: "flex-end" }}
            onClick={() => dispatch(toggleProductUpdateForm())}
          >
            <EditFilled />
            Edit
          </Button>
          <Button
            disabled={isDisabledDeleteButton}
            danger
            style={{ alignSelf: "flex-end" }}
            onClick={() => handleDeleteProduct()}
          >
            <DeleteFilled /> Delete
          </Button>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1em",
          }}
        >
          <FilterOutlined
            style={{ fontSize: "1.5em", cursor: "pointer" }}
            onClick={() => setIsFilterDrawerOpen(true)}
          />
          <Search
            style={{ width: "40%" }}
            placeholder="Search by name or description..."
            enterButton
          />
        </div>
        <Drawer
          title="Filter Product"
          open={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
      {selectedIds.length > 0 && (
        <Text code>{selectedIds.length} hang da chon</Text>
      )}
      <ProductTable />
    </div>
  );
};

export default Product;

import { Image, Table } from "antd";
import { theme } from "antd";
import { useEffect, useState } from "react";
import productAPI from "../../services/api/productAPI";
import { render } from "nprogress";
import ProductCreateForm from "./product.form";
import Checkbox from "antd/es/checkbox/Checkbox";
import ManageTable from "../base/base.managetable";

const ProductTable = ({
  products,
  setProducts,
  isProductCreateFormOpen,
  setIsProductCreateFormOpen,
  selectedIds,
  setSelectedIds,
  isCheckedClickAllCheckBox,
  setIsCheckedClickAllCheckBox,
}) => {
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(10);

  const handleClickAllCheckBox = (e) => {
    setIsCheckedClickAllCheckBox(!isCheckedClickAllCheckBox);
    if (e.target.checked) {
      setSelectedIds(products.map((p) => p.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleClickSingleCheckBox = (id) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((p) => p.id === id));
    }
  };

  const columns = [
    {
      title: (
        <Checkbox
          onClick={(e) => handleClickAllCheckBox(e)}
          checked={isCheckedClickAllCheckBox}
        />
      ),
      render: (_, record, index) => {
        return (
          <Checkbox
            checked={selectedIds.includes(record.id)}
            onClick={() => handleClickSingleCheckBox(record.id)}
          />
        );
      },
    },
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{(current - 1) * pageSize + index + 1}</>;
      },
    },
    {
      title: "Ten san pham",
      dataIndex: "name",
    },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (_, record, index) => {
        return (
          <Image
            src={`/images/productthumbnail.jpg`}
            style={{ width: "3em" }}
          />
        );
      },
    },
    {
      title: "Gia",
      dataIndex: "price",
      render: (_, record, index) => {
        return <>{new Intl.NumberFormat("vi-VN").format(record.price)}</>;
      },
    },
    {
      title: "Mo ta",
      dataIndex: "description",
    },
    {
      title: "Thuộc danh mục",
      dataIndex: "description",
    },
  ];

  useEffect(() => {
    fetchProducts();
  }, [current, pageSize]);

  const fetchProducts = async () => {
    setIsTableLoading(true);
    const result = await productAPI.fetchProducts(current, pageSize);
    if (result) {
      setCurrent(result.pageIndex);
      setPageSize(result.pageSize);
      setTotal(result.totalCount);
    }

    setIsTableLoading(false);
    setProducts(result.data);
    return result;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    setSelectedIds([]);
    setIsCheckedClickAllCheckBox(false);
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }

    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <ProductCreateForm
        isProductCreateFormOpen={isProductCreateFormOpen}
        setIsProductCreateFormOpen={setIsProductCreateFormOpen}
        fetchProducts={fetchProducts}
      />
      <ManageTable
        dataSource={products}
        columns={columns}
        scroll={{ x: "max-content" }}
        loading={isTableLoading}
        pagination={{
          current,
          pageSize,
          total,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default ProductTable;

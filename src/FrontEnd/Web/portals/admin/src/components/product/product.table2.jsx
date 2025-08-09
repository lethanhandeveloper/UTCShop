import { Image, Table } from "antd";
import { theme } from "antd";
import { useEffect, useState } from "react";
import { render } from "nprogress";
import ProductCreateForm from "./product.create.form";
import Checkbox from "antd/es/checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  clickAllCheckBox,
  clickSingleCheckBox,
  resetCheckBoxes,
  setPageIndex,
  setPageSize,
  toggleEditButtonStatus,
} from "../../redux/product/product.slice";
import { current } from "@reduxjs/toolkit";
import ProductUpdateForm from "./product.update.form";

const ProductTable = ({ isCheckedClickAllCheckBox }) => {
  const {
    data,
    pageIndex,
    pageSize,
    totalCount,
    selectedIds,
    isAllCheckBoxClicked,
  } = useSelector((state) => state.product.productTableData);

  // const [isTableLoading, setIsTableLoading] = useState(false);

  // const [current, setCurrent] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  // const [total, setTotal] = useState(10);

  const handleClickAllCheckBox = () => {
    dispatch(clickAllCheckBox());
    dispatch(toggleEditButtonStatus());
  };

  const handleClickSingleCheckBox = (id) => {
    dispatch(clickSingleCheckBox(id));
    dispatch(toggleEditButtonStatus());
  };

  useEffect(() => {
    dispatch(fetchProducts({ pageIndex, pageSize }));
  }, [pageIndex, pageSize]);

  const columns = [
    {
      title: (
        <Checkbox
          onClick={() => handleClickAllCheckBox()}
          checked={isAllCheckBoxClicked}
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
        return <>{(pageIndex - 1) * pageSize + index + 1}</>;
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
        return <Image src={record.imageUrl} style={{ width: "3em" }} />;
      },
    },
    {
      title: "Gia",
      dataIndex: "price",
      render: (_, record, index) => {
        return <>{record.price.toLocaleString("vi-VN")} d</>;
      },
    },
    {
      title: "Mo ta",
      dataIndex: "description",
    },
    {
      title: "Thuoc danh muc",
      dataIndex: "categoryName",
    },
  ];

  const dispatch = useDispatch();

  const onChange = (pagination, filters, sorter, extra) => {
    dispatch(resetCheckBoxes());
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        dispatch(setPageIndex(+pagination.current));
      }
    }

    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        dispatch(setPageSize(+pagination.pageSize));
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
      <ProductCreateForm />
      {selectedIds.length > 0 && <ProductUpdateForm />}
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: "max-content" }}
        //   loading={isTableLoading}
        pagination={{
          current: pageIndex,
          pageSize: pageSize,
          showSizeChanger: true,
          total: totalCount,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default ProductTable;

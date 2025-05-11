import { Table } from "antd";
import { theme } from "antd";
import CategoryForm from "./category.form";
import { useQuery } from "@tanstack/react-query";
import categoryAPI from "../../services/api/categoryAPI";
import { useState } from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Thuoc danh muc",
    dataIndex: "categoryname",
    key: "categoryname",
  },
];

const CategoryTable = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: async () => {
      const res = await categoryAPI.fetchCategories(pageIndex, pageSize);
      console.log(res.data);
      return res.data;
    },
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Table
        dataSource={categories}
        columns={columns}
        scroll={{ x: "max-content" }}
        pagination={{
          current: 1,
          pageSize: 10,
          showSizeChanger: true,
          total: 10,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default CategoryTable;

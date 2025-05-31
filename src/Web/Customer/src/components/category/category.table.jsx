import { Checkbox, Table } from "antd";
import { theme } from "antd";
import CategoryForm from "./category.form";
import { useQuery } from "@tanstack/react-query";
import categoryAPI from "../../services/api/categoryAPI";
import { useState } from "react";
import BaseTable from "../base/base.table";

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
    dataIndex: "parentName",
    key: "categoryname",
  },
];

const CategoryTable = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedIds, setSelectedIds] = useState([]);

  const { data: data } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: async () => {
      const res = await categoryAPI.fetchCategories(pageIndex, pageSize);
      return res;
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
      {data && (
        <BaseTable
          dataSource={data.data}
          columns={columns}
          pagination={{
            current: data.pageIndex,
            pageSize: data.pageSize,
            total: data.totalCount,
          }}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      )}
    </div>
  );
};

export default CategoryTable;

import { Checkbox, Table } from "antd";
import { theme } from "antd";
import { useQuery } from "@tanstack/react-query";
import categoryAPI from "../../services/api/categoryAPI";
import { useEffect, useState } from "react";
import ManageTable from "../base/base.managetable";

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

const CategoryTable = ({ selectedIds, setSelectedIds, categories, setCategories, setIsCreateCategoryFormOpen, setIsUpdateCategoryFormOpen }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
     fetchCategories();
  }, [])

  const fetchCategories = async () => {
    const res = await categoryAPI.fetchCategories(pageIndex, pageSize);
    setCategories(res.data);
    setPageIndex(res.pageIndex);
    setPageIndex(res.pageSize);
    setTotalCount(res.totalCount);
  }

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {categories.length > 0 && (
        <ManageTable
          dataSource={categories}
          columns={columns}
          pagination={{
            current: pageIndex,
            pageSize: pageSize,
            total: totalCount,
          }}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          setIsCreateFormOpen={setIsCreateCategoryFormOpen}
          setIsUpdateFormOpen={setIsUpdateCategoryFormOpen}
        />
      )}
    </div>
  );
};

export default CategoryTable;

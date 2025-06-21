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
    title: "Thuộc danh mục",
    dataIndex: "parentName",
    key: "parentName",
  },
];

const CategoryTable = ({
  selectedIds,
  setSelectedIds,
  categories,
  pageIndex,
  setPageIndex,
  pageSize,
  setPageSize,
  totalCount,
  setTotalCount,
  setIsCreateCategoryFormOpen,
  setIsUpdateCategoryFormOpen,
  handleDeleteCategories,
}) => {
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
      {categories.length > 0 && (
        <ManageTable
          dataSource={categories}
          columns={columns}
          pagination={{
            current: pageIndex,
            pageSize: pageSize,
            total: totalCount,
          }}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
          setTotalCount={setTotalCount}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          setIsCreateFormOpen={setIsCreateCategoryFormOpen}
          setIsUpdateFormOpen={setIsUpdateCategoryFormOpen}
          handleDelete={handleDeleteCategories}
        />
      )}
    </div>
  );
};

export default CategoryTable;

import { Button, Checkbox, Drawer, Dropdown, message } from "antd";
import CategoryTable from "../category/category.table";
import { useEffect, useState } from "react";
import CategoryForm from "../category/category.form";
import {
  DeleteFilled,
  EditFilled,
  FilterOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import TableActions from "../base/base.tableactions";
import Search from "antd/es/transfer/search";
import { FORM_TYPES } from "../../constants/formTypes";
import categoryAPI from "../../services/api/categoryAPI";

const Category = () => {
  const [isCreateCategoryFormOpen, setIsCreateCategoryFormOpen] =
    useState(false);
  const [isUpdateCategoryFormOpen, setIsUpdateCategoryFormOpen] =
    useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    fetchCategories();
  }, [pageIndex, pageSize, totalCount]);

  const fetchCategories = async () => {
    setSelectedIds([]);
    const res = await categoryAPI.fetchCategories(pageIndex, pageSize);
    setCategories(res.data);
    setPageIndex(res.pageIndex);
    setPageSize(res.pageSize);
    setTotalCount(res.totalCount);
  };

  const handleDeleteCategories = async () => {
    const res = await categoryAPI.deleteCategories(selectedIds);

    messageApi.open({
      type: "success",
      content: "Xóa danh mục thành công",
    });
    fetchCategories();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Quản lý danh mục</h2>
      <CategoryForm
        isCategoryFormOpen={isCreateCategoryFormOpen}
        setIsCategoryFormOpen={setIsCreateCategoryFormOpen}
        selectedCategory={categories.find((x) => x.id === selectedIds[0])}
        formType={FORM_TYPES.CREATE}
        formTitle="Thêm danh mục"
        fetchTableData={fetchCategories}
      />
      {selectedIds.length > 0 && isUpdateCategoryFormOpen && (
        <CategoryForm
          isCategoryFormOpen={isUpdateCategoryFormOpen}
          setIsCategoryFormOpen={setIsUpdateCategoryFormOpen}
          fetchTableData={fetchCategories}
          formType={FORM_TYPES.UPDATE}
          selectedCategory={categories.find((x) => x.id === selectedIds[0])}
          formTitle="Cập nhật danh mục"
        />
      )}
      {contextHolder}
      <CategoryTable
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        categories={categories}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        setIsCreateCategoryFormOpen={setIsCreateCategoryFormOpen}
        setIsUpdateCategoryFormOpen={setIsUpdateCategoryFormOpen}
        handleDeleteCategories={handleDeleteCategories}
      />
    </div>
  );
};

export default Category;

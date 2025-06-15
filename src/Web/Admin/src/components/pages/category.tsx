import { Button, Checkbox, Drawer, Dropdown } from "antd";
import CategoryTable from "../category/category.table";
import { useState } from "react";
import CategoryForm from "../category/category.form";
import { DeleteFilled, EditFilled, FilterOutlined, PlusOutlined, SettingOutlined } from "@ant-design/icons";
import TableActions from "../base/base.tableactions";
import Search from "antd/es/transfer/search";
import { FORM_TYPES } from "../../constants/formTypes";

const Category = () => {
  const [isCreateCategoryFormOpen, setIsCreateCategoryFormOpen] = useState(false);
  const [isUpdateCategoryFormOpen, setIsUpdateCategoryFormOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > 
         <h2>Category List</h2> 
         <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Dropdown
            open={columnOptionsVisible}
            onOpenChange={setColumnOptionsVisible}
            dropdownRender={() => (
              <div
                style={{
                  padding: 8,
                  background: "#fff",
                  borderRadius: 4,
                  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                }}
              >
                <Checkbox.Group
                  value={checkedColumns}
                  onChange={handleCheckboxChange}
                >
                  <div>
                    <Checkbox value="Hang">Name</Checkbox> <br />
                    <Checkbox value="Hang">Description</Checkbox> <br />
                    <Checkbox value="Hang">Image</Checkbox> <br />
                    <Checkbox value="Hang">Hang</Checkbox> <br />
                    <Checkbox value="Hang">Hang</Checkbox> <br />
                    <Button style={{ float: "right" }}>Ok</Button>
                  </div>
                </Checkbox.Group>
              </div>
            )}
          >
            <Button>
              <SettingOutlined />
            </Button>
          </Dropdown>
          <Button type="primary" onClick={() => setIsCategoryFormOpen(true)}>
            Create category
          </Button>
        </div> 
      </div> */}
      {/* <h2>Quản lý danh mục</h2>
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
            onClick={() => setIsCategoryFormOpen(true)}
          >
            <PlusOutlined />
            Create
          </Button>
          <Button
            // disabled={isDisabledEditButton}
            type="primary"
            style={{ alignSelf: "flex-end" }}
            // onClick={() => dispatch(toggleProductUpdateForm())}
          >
            <EditFilled />
            Edit
          </Button>
          <Button
            // disabled={isDisabledDeleteButton}
            danger
            style={{ alignSelf: "flex-end" }}
            // onClick={() => handleDeleteProduct()}
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
            // onClick={() => setIsFilterDrawerOpen(true)}
          />
          <Search
            // style={{ width: "40%" }}
            placeholder="Search by name or description..."
            // enterButton
          />
        </div>
        <Drawer
          title="Filter Product"
          // open={isFilterDrawerOpen}
          // onClose={() => setIsFilterDrawerOpen(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div> */}
      <h2>Quản lý danh mục</h2>
      <CategoryForm
        isCategoryFormOpen={isCreateCategoryFormOpen}
        setIsCategoryFormOpen={setIsCreateCategoryFormOpen}
        formType={FORM_TYPES.CREATE}
        formTitle="Thêm danh mục"
      />
      {
        selectedIds.length > 0 && isUpdateCategoryFormOpen && 
        <CategoryForm
          isCategoryFormOpen={isUpdateCategoryFormOpen}
          setIsCategoryFormOpen={setIsUpdateCategoryFormOpen}
          formType={FORM_TYPES.UPDATE}
          selectedCategory={categories.find(x => x.id === selectedIds[0] )}
          formTitle="Cập nhật danh mục"
      />
      }
      <CategoryTable selectedIds={selectedIds} setSelectedIds={setSelectedIds} categories={categories} 
            setCategories={setCategories} setIsCreateCategoryFormOpen={setIsCreateCategoryFormOpen}
            setIsUpdateCategoryFormOpen={setIsUpdateCategoryFormOpen}
      />
    </div>
  );
};

export default Category;

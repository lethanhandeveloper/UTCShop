import { Button, Checkbox, Dropdown } from "antd";
import CategoryTable from "../category/category.table";
import { useState } from "react";
import CategoryForm from "../category/category.form";
import { SettingOutlined } from "@ant-design/icons";

const Category = () => {
  const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
  const [columnOptionsVisible, setColumnOptionsVisible] = useState(false);
  const [checkedColumns, setCheckedColumns] = useState<string[]>([]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedColumns(checkedValues);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
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
      </div>

      <CategoryForm
        isCategoryFormOpen={isCategoryFormOpen}
        setIsCategoryFormOpen={setIsCategoryFormOpen}
      />
      <CategoryTable />
    </div>
  );
};

export default Category;

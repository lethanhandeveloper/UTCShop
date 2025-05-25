import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Input, Modal, Select, Space, Switch } from "antd";
import { useEffect, useState } from "react";
import categoryAPI from "../../services/api/categoryAPI";

const CategoryForm = ({ isCategoryFormOpen, setIsCategoryFormOpen }) => {
  const [isCheckedChildCategorySwitch, setIsCheckedChildCategorySwitch] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [isOpenedDrawer, setIsOpenDrawer] = useState(false);

  const handleSubmitForm = async () => {
    const res = await categoryAPI.createCategory(name, description, null, selectedCategoryId);
  }

  useEffect(() => {
    fetchAllCategories();
  }, [isCheckedChildCategorySwitch])

  const fetchAllCategories = async () => {
    const res = await categoryAPI.fetchAllCategories();
    setCategories(res);
  }

  return (
    <Drawer
        title="Thêm danh mục mới"
        width={720}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setIsCategoryFormOpen(!isCategoryFormOpen)}
        open={isCategoryFormOpen}
      >
        <div>
           <span>Tên danh mục</span>
           <Input value={name} onChange={(e) => setName(e.target.value)}/>
         </div>
         <div>
           <span>Mô tả</span>
           <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)}/>
         </div>
         
         <div style={{ marginTop: "2em", display: "flex", gap: "1em" }}>
            <span>Là danh mục con?</span>
            <Space direction="vertical">
              <Switch checkedChildren="Yes" unCheckedChildren="No" checked={isCheckedChildCategorySwitch}
                      onClick={() => setIsCheckedChildCategorySwitch(!isCheckedChildCategorySwitch)}
              />
            </Space>
         </div>
         
          {
            isCheckedChildCategorySwitch &&
            <Select style={{ width: '100%', marginTop: "2em" }} placeholder="Chọn loại"
            onChange={(value) => setSelectedCategoryId(value)}>
             {
              categories.map(category => {
                return (
                  <Option value={category.id} >{category.name}</Option>
                )
              })
             }
          </Select>
          }
          <Button
                 style={{ marginTop: "2em", float: "right" }}
                 onClick={() => handleSubmitForm()}
                 type="primary"
               >
                 Lưu
          </Button>
      </Drawer>
  );
};

export default CategoryForm;

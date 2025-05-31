import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Input,
  Modal,
  Select,
  Space,
  Switch,
  Tree,
  TreeSelect,
} from "antd";
import { useEffect, useState } from "react";
import categoryAPI from "../../services/api/categoryAPI";

function convertToTreeSelect(data) {
  const guidEmpty = "00000000-0000-0000-0000-000000000000";

  // Tìm danh mục gốc (parentId null hoặc là guid rỗng)
  const rootCategories = data.filter(
    (c) => !c.parentId || c.parentId === guidEmpty,
  );

  // Hàm đệ quy chuyển danh mục sang dạng treeData
  const buildNode = (category) => {
    return {
      value: category.id,
      title: category.name,
      children: category.childCategories.map((child) => {
        const fullChild = data.find((c) => c.id === child.id);
        return buildNode(fullChild);
      }),
    };
  };

  return rootCategories.map(buildNode);
}

const CategoryForm = ({ isCategoryFormOpen, setIsCategoryFormOpen }) => {
  const [isCheckedChildCategorySwitch, setIsCheckedChildCategorySwitch] =
    useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [isOpenedDrawer, setIsOpenDrawer] = useState(false);
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setSelectedCategoryId(newValue);
  };
  const onPopupScroll = (e) => {
    console.log("onPopupScroll", e);
  };

  const handleSubmitForm = async () => {
    const res = await categoryAPI.createCategory(
      name,
      description,
      null,
      selectedCategoryId,
    );

    setIsOpenDrawer(false);
  };

  useEffect(() => {
    fetchAllCategories();
  }, [isCheckedChildCategorySwitch]);

  const fetchAllCategories = async () => {
    const res = await categoryAPI.fetchAllCategories();
    setCategories(convertToTreeSelect(res));
  };

  const handleChangeCategorySwitch = () => {
    setIsCheckedChildCategorySwitch(!isCheckedChildCategorySwitch);
    if (!isCheckedChildCategorySwitch) {
      setSelectedCategoryId(null);
    }
  };

  return (
    <Drawer
      title="Thêm danh mục mới"
      width={720}
      closable={{ "aria-label": "Close Button" }}
      onClose={() => setIsCategoryFormOpen(!isCategoryFormOpen)}
      open={isCategoryFormOpen}
    >
      <div>
        <span>Tên danh mục</span>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <span>Mô tả</span>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "2em", display: "flex", gap: "1em" }}>
        <span>Là danh mục con?</span>
        <Space direction="vertical">
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            checked={isCheckedChildCategorySwitch}
            onClick={() => handleChangeCategorySwitch()}
          />
        </Space>
      </div>

      {isCheckedChildCategorySwitch && (
        <>
          <lable>Chon danh muc con</lable>
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={categories}
            onPopupScroll={onPopupScroll}
          />
        </>
      )}
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

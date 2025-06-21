import { Button, Drawer, Input, Space, Switch, TreeSelect } from "antd";
import { useEffect, useState } from "react";
import categoryAPI from "../../services/api/categoryAPI";
import { FORM_TYPES } from "../../constants/formTypes";

function convertToTreeSelect(data) {
  const guidEmpty = "00000000-0000-0000-0000-000000000000";

  const rootCategories = data.filter(
    (c) => !c.parentId || c.parentId === guidEmpty,
  );

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

const CategoryForm = ({
  isCategoryFormOpen,
  setIsCategoryFormOpen,
  fetchTableData,
  formType,
  selectedCategory,
  formTitle,
}) => {
  const [isCheckedChildCategorySwitch, setIsCheckedChildCategorySwitch] =
    useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setSelectedCategoryId(newValue);
  };
  const onPopupScroll = (e) => {
    console.log("onPopupScroll", e);
  };

  useEffect(() => {
    if (formType === FORM_TYPES.UPDATE) {
      setSelectedCategoryId(selectedCategory.id);
      setName(selectedCategory.name);
      setDescription(selectedCategory.description);
      setIsCheckedChildCategorySwitch(true);
    }
  }, []);

  const handleSubmitForm = async () => {
    if (formType === FORM_TYPES.CREATE) {
      const res = await categoryAPI.createCategory(
        name,
        description,
        null,
        selectedCategoryId,
      );
    } else if (formType === FORM_TYPES.UPDATE) {
      const res = await categoryAPI.updateCategory(
        selectedCategory.id,
        name,
        description,
        undefined,
        selectedCategoryId,
      );
    }

    setIsCategoryFormOpen(false);
    fetchTableData();
  };

  useEffect(() => {
    fetchAllCategories();
  }, [isCheckedChildCategorySwitch]);

  const fetchAllCategories = async () => {
    const res = await categoryAPI.fetchAllCategories();
    setCategories(convertToTreeSelect(res));
    console.log(categories);
  };

  const handleChangeCategorySwitch = () => {
    setIsCheckedChildCategorySwitch(!isCheckedChildCategorySwitch);
    if (!isCheckedChildCategorySwitch) {
      setSelectedCategoryId(null);
    }
  };

  return (
    <Drawer
      title={formTitle}
      width={720}
      closable={{ "aria-label": "Close Button" }}
      onClose={() => setIsCategoryFormOpen(false)}
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
            value={selectedCategoryId}
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

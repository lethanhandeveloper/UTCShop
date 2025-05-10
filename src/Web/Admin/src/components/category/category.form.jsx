import { Input, Modal } from "antd";

const CategoryForm = ({ isCategoryFormOpen, setIsCategoryFormOpen }) => {
  return (
    <Modal
      title="Thêm danh mục mới"
      maskClosable={false}
      open={isCategoryFormOpen}
      onOk={() => {
        setIsCategoryFormOpen;
      }}
      onClose={() => setIsCategoryFormOpen(false)}
      onCancel={() => setIsCategoryFormOpen(false)}
    >
      <div>
        <span>Tên danh mục</span>
        <Input />
      </div>
      <div>
        <span>Mô tả</span>
        <Input.TextArea />
      </div>
    </Modal>
  );
};

export default CategoryForm;

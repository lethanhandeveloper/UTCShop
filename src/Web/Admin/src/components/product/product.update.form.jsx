import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Image, Input, Modal, notification, Upload } from "antd";
import { useState } from "react";
import utilApi from "../../services/api/fileAPI";
import productAPI from "../../services/api/productAPI";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from "ckeditor5";
import { FormatPainter } from "ckeditor5-premium-features";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleProductCreateForm,
  toggleProductUpdateForm,
} from "../../redux/product/product.slice";

const ProductUpdateForm = () => {
  const productData = useSelector(
    (state) => state.product.productTableData.data,
  );
  const selectedId = useSelector(
    (state) => state.product.productTableData.selectedIds[0],
  );
  const selectedProduct = productData.find((p) => p.id === selectedId);

  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState(selectedProduct.name);
  const [price, setPrice] = useState(selectedProduct.price);
  const [description, setDescription] = useState(selectedProduct.description);

  const isOpenedProductUpdateForm = useSelector(
    (state) => state.product.isOpenedProductUpdateForm,
  );
  const { pageIndex, pageSize } = useSelector(
    (state) => state.product.productTableData,
  );
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmitForm = async () => {
    let res = null;

    if (thumbnail) {
      res = await utilApi.upload(thumbnail);
    }

    await productAPI.updateProduct(
      selectedId,
      name,
      price,
      res && res.data ? res.data : selectedProduct.imageUrl,
      description,
      "",
    );

    dispatch(fetchProducts({ pageIndex, pageSize }));

    setName("");
    setPrice("");
    setDescription("");
    setThumbnail(null);

    notification.success({
      title: "Success",
      message: "Success",
    });

    dispatch(toggleProductUpdateForm());
  };

  const handleCloseModel = () => {
    setName("");
    setPrice("");
    setDescription("");
    setThumbnail(null);

    dispatch(toggleProductUpdateForm());
  };

  return (
    <Modal
      title="Chinh sua danh muc"
      maskClosable={false}
      open={isOpenedProductUpdateForm}
      onOk={() => {
        handleSubmitForm();
      }}
      destroyOnClose={true}
      onClose={() => handleCloseModel()}
      onCancel={() => handleCloseModel()}
    >
      <div>
        <span>Tên san pham</span>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <span>Hinh anh</span>
        {/* <Upload
                        name="Product"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        // beforeUpload={beforeUpload}
                        onChange={handleChangeThumbnailImage}
                    >
                        {thumbnailUrl ? <img src={thumbnailUrl} alt="Product" style={{ width: '100%' }} /> : uploadButton}
                    </Upload> */}
        <Input type="file" onChange={handleChangeImage} />
        {thumbnail && (
          <Image
            style={{ width: "20em" }}
            src={URL.createObjectURL(thumbnail)}
          />
        )}
      </div>
      <div>
        <span>Gia</span>
        <Input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <span>Mô tả</span>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <CKEditor
          editor={ClassicEditor}
          config={{
            licenseKey: "<YOUR_LICENSE_KEY>", // Or 'GPL'.
            plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
            toolbar: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "|",
              "formatPainter",
            ],
            initialData: "<p>Hello from CKEditor 5 in React!</p>",
          }}
        />
      </div>
    </Modal>
  );
};

export default ProductUpdateForm;

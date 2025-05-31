import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Image,
  Input,
  Modal,
  notification,
  Select,
  Space,
  Upload,
} from "antd";
import { useState } from "react";
import productAPI from "../../services/api/productAPI";
import { CKEditor } from "ckeditor4-react";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleProductCreateForm,
} from "../../redux/product/product.slice";
import fileAPI from "../../services/api/fileAPI";
import { NumberFormatBase } from "react-number-format";

const ProductCreateForm = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  );
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const isOpenedProductCreateForm = useSelector(
    (state) => state.product.isOpenedProductCreateForm,
  );
  const { pageIndex, pageSize } = useSelector(
    (state) => state.product.productTableData,
  );
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleChangeThumbnailImage = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      setThumbnailUrl(URL.createObjectURL(file));

      dispatch(toggleProductCreateForm());
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const options = [
    {
      label: "China",
      value: "china",
      emoji: "🇨🇳",
      desc: "China (中国)",
    },
    {
      label: "USA",
      value: "usa",
      emoji: "🇺🇸",
      desc: "USA (美国)",
    },
    {
      label: "Japan",
      value: "japan",
      emoji: "🇯🇵",
      desc: "Japan (日本)",
    },
    {
      label: "Korea",
      value: "korea",
      emoji: "🇰🇷",
      desc: "Korea (韩国)",
    },
  ];

  const handleSubmitForm = async () => {
    alert("ok");
    const res = await fileAPI.upload(thumbnail);
    await productAPI.createProduct(name, price, res.data, description, "");

    dispatch(fetchProducts({ pageIndex, pageSize }));

    notification.success({
      title: "Success",
      message: "Success",
    });

    setName("");
    setPrice("");
    setDescription("");
    setThumbnail(null);

    dispatch(toggleProductCreateForm());
  };

  return (
    <Drawer
      title="Thêm sản phẩm mới"
      width={720}
      onClose={() => dispatch(toggleProductCreateForm())}
      open={isOpenedProductCreateForm}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
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
        <NumberFormatBase
          hidden
          value={price}
          thousandSeparator="."
          decimalSeparator=","
          onValueChange={(values) => {
            setPrice(values.value);
          }}
          className="ant-input"
        />
        <Input
          value={Number(price).toLocaleString("vi-VN") || ""}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <span>Mô tả</span>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <CKEditor initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
      </div>
      <div>
        <span>Thuoc danh muc</span>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Chon mot danh muc"
          defaultValue={["china"]}
          onChange={handleChange}
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </div>
      <Button
        style={{ marginTop: "2em", float: "right" }}
        onClick={() => handleSubmitForm()}
        type="primary"
      >
        Save
      </Button>
    </Drawer>
  );
};

export default ProductCreateForm;

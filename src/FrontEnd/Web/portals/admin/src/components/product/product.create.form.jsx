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
import { useEffect, useState } from "react";
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
import categoryAPI from "../../services/api/categoryAPI";

const ProductCreateForm = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  );
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

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

  useEffect(() => {
    handleFetchLeafCategory();
  }, [])

  const handleFetchLeafCategory = async () => {
    const res = await categoryAPI.fetchLeafCategory();
    const arrOptions = [];
    res.map(item => {
      arrOptions.push({
        value: item.id,
        label: item.name,
        desc: item.name
      },
    )

    setCategoryOptions(arrOptions);

    })
  }

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
    setSelectedCategoryIds(value);
  };

  const handleSubmitForm = async () => {
    const res = await fileAPI.upload(thumbnail);
    await productAPI.createProduct(name, price, res.data, description, selectedCategoryIds[0]);

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
        {
          categoryOptions.length > 0 &&
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Chon mot danh muc"
            defaultValue={categoryOptions[0].name}
            onChange={handleChange}
            options={categoryOptions}
            optionRender={(option) => (
              <Space>
                <span role="img" aria-label={option.data.label}>
                  {option.data.emoji}
                </span>
                {option.data.desc}
              </Space>
            )}
          />
        }
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

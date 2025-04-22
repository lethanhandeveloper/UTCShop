import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Modal, notification, Upload } from "antd"
import { useState } from "react";
import { createProductAPI, uploadFileAPI } from "../../services/api.services";

const ProductForm = ({ isProductFormOpen, setIsProductFormOpen, fetchProducts }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D");
    const [loading, setLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeImage = (e) => {
        setThumbnail(e.target.files[0]);
    }

    const handleChangeThumbnailImage = (info) => {
       
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
          }
          if (info.file.status === 'done') {
            // URL.createObjectURL
            // // Get this url from response in real world.
            // getBase64(info.file.originFileObj, url => {
            //   setLoading(false);
            //   setThumbnailUrl(url);
            //   console.log(url);
            // });
            
            setLoading(false);
            setThumbnailUrl(URL.createObjectURL(file))
          }
    }

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      );
    
    const handleSubmitForm = async () => {
        const res = await uploadFileAPI(thumbnail);
        await createProductAPI(
            name,
            price,
            res.data.data,
            description,
            ""
        );

        await fetchProducts();

        notification.success({
            title: "Success",
            message: "Success"
        })

        setIsProductFormOpen(false);
    }

    return(
        <Modal title="Thêm danh mục mới" maskClosable={false}
         open={isProductFormOpen} onOk={() => {handleSubmitForm();}} 
         onClose={() => setIsProductFormOpen(false)}
         onCancel={() => setIsProductFormOpen(false)}>
            <div>
                <span>Tên san pham</span>
                    <Input onChange={(e) => setName(e.target.value)}/>
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
                    <Input type="file" onChange={handleChangeImage}/>
                </div>
                <div>
                    <span>Gia</span>
                    <Input type="number" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <span>Mô tả</span>
                    <Input.TextArea onChange={(e) => setDescription(e.target.value)}/>
                </div>
        </Modal>
    )
}

export default ProductForm;
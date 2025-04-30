import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Modal, notification, Upload } from "antd"
import { useState } from "react";
import { createProductAPI, uploadFileAPI } from "../../services/api/api.services";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleProductCreateForm, toggleProductUpdateForm } from "../../redux/product/product.slice";

const ProductUpdateForm = () => {
    const productData = useSelector(state => state.product.productTableData.data);
    const selectedId = useSelector(state => state.product.productTableData.selectedIds[0]);
    const selectedProduct = productData.find(p => p.id === selectedId);

    const [thumbnail, setThumbnail] = useState(selectedProduct.thumbnail);
    const [name, setName] = useState(selectedProduct.name);
    const [price, setPrice] = useState(selectedProduct.price);
    const [description, setDescription] = useState(selectedProduct.description);
    
   
    const isOpenedProductUpdateForm = useSelector(state => state.product.isOpenedProductUpdateForm);
    const { pageIndex, pageSize } = useSelector(state => state.product.productTableData);
    const dispatch = useDispatch();

    const handleChangeImage = (e) => {
        setThumbnail(e.target.files[0]);
    }


    const handleSubmitForm = async () => {
        const res = await uploadFileAPI(thumbnail);
        await createProductAPI(
            name,
            price,
            res.data,
            description,
            ""
        );

        dispatch(fetchProducts({pageIndex, pageSize}))
        
        setName("");
        setPrice("");
        setDescription("");
        setThumbnail(null);

        notification.success({
            title: "Success",
            message: "Success"
        })

        dispatch(toggleProductCreateForm());
    }

    return(
        <Modal title="Chinh sua danh muc" maskClosable={false}
         open={isOpenedProductUpdateForm} onOk={() => {handleSubmitForm();}} 
         onClose={() => dispatch(toggleProductUpdateForm())}
         onCancel={() => dispatch(toggleProductUpdateForm())}>
            <div>
                <span>Tên san pham</span>
                    <Input value={name} onChange={(e) => setName(e.target.value)}/>
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
                    <Input value={price} type="number" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <span>Mô tả</span>
                    <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            licenseKey: '<YOUR_LICENSE_KEY>', // Or 'GPL'.
                            plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                            toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
                            initialData: '<p>Hello from CKEditor 5 in React!</p>',
                        }}
                    />
                </div>
        </Modal>
    )
}

export default ProductUpdateForm;
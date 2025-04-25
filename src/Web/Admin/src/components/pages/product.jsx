import { useState } from "react";
import ProductForm from "../product/product.form";
import ProductTable from "../product/product.table";
import { Button, Drawer, Input } from "antd";
import { fetchAllProductsAPI } from "../../services/api.services";
import { CloseCircleOutlined, CompressOutlined, EditFilled, FilterFilled, FilterOutlined, FilterTwoTone, PlusOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h3>Product List</h3>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "0.5em" }}>
                    <Button type="primary" style={{ alignSelf: "flex-end" }} onClick={() => setIsProductFormOpen(true)}>
                        <PlusOutlined />Create
                    </Button>
                    <Button type="primary" style={{ alignSelf: "flex-end" }} onClick={() => setIsProductFormOpen(true)}>
                        <EditFilled />Edit
                    </Button>
                    <Button danger style={{ alignSelf: "flex-end" }} onClick={() => setIsProductFormOpen(true)}>
                        <CloseCircleOutlined /> Deactive
                    </Button>
                </div>
                <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1em" }}>
                    <FilterOutlined style={{ fontSize: "1.5em", cursor: "pointer" }} onClick={() => setIsFilterDrawerOpen(true)}/>
                    <Search  style={{ width: "40%" }} placeholder="Search by name or description..." enterButton/>
                </div>
                <Drawer title="Filter Product" open={isFilterDrawerOpen} onClose={() => setIsFilterDrawerOpen(false)}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
            <ProductTable products={products} setProducts={setProducts}
                isProductFormOpen={isProductFormOpen} setIsProductFormOpen={setIsProductFormOpen}
             />
        </div>
    )
}

export default Product;
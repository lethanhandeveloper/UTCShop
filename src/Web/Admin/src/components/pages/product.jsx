import { useState } from "react";
import ProductForm from "../product/product.form";
import ProductTable from "../product/product.table";
import { Button } from "antd";
import { fetchAllProductsAPI } from "../../services/api.services";

const Product = () => {
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const result = await fetchAllProductsAPI();
        setProducts(result.data.data);
    } 

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h3>Product List</h3>
                <Button type="primary" style={{ alignSelf: "flex-end" }} onClick={() => setIsProductFormOpen(true)}>
                    Create product
                </Button>
            </div>
            <ProductForm isProductFormOpen={isProductFormOpen} setIsProductFormOpen={setIsProductFormOpen} fetchProducts={fetchProducts}/>
            <ProductTable products={products} setProducts={setProducts}  
                fetchProducts={fetchProducts}
            />
        </div>
    )
}

export default Product;
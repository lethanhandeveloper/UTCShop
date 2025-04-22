import { Button } from "antd";
import CategoryTable from "../category/category.table";
import { useEffect, useState } from "react";
import CategoryForm from "../category/category.form";

const Category = () => {
    const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);

   
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h3>Category List</h3>
                <Button type="primary" style={{ alignSelf: "flex-end" }} onClick={() => setIsCategoryFormOpen(true)}>
                    Create category
                </Button>
            </div>
            <CategoryForm isCategoryFormOpen={isCategoryFormOpen} setIsCategoryFormOpen={setIsCategoryFormOpen}/>
            <CategoryTable />
        </div>
    )
}

export default Category;
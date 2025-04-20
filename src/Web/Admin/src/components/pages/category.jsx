import { Button } from "antd";
import CategoryTable from "../category/category.table";

const Category = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h3>Category List</h3>
                <Button type="primary" style={{ alignSelf: "flex-end" }}>Create category</Button>
            </div>
            <CategoryTable />
        </div>
    )
}

export default Category;
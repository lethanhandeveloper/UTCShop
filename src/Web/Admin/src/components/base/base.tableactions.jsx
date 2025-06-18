import {
  DeleteFilled,
  EditFilled,
  FilterOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";

const TableActions = ({
  onClickCreateBtn,
  onClickUpdateBtn,
  onClickDeleteBtn,
  selectedIds,
  filterContent,
}) => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "0.5em" }}>
        <Button
          type="primary"
          style={{ alignSelf: "flex-end" }}
          onClick={() => onClickCreateBtn(true)}
        >
          <PlusOutlined />
          Create
        </Button>
        <Button
          disabled={selectedIds.length !== 1}
          type="primary"
          style={{ alignSelf: "flex-end" }}
          onClick={() => onClickUpdateBtn(true)}
        >
          <EditFilled />
          Edit
        </Button>
        <Button
          disabled={selectedIds.length < 1}
          danger
          style={{ alignSelf: "flex-end" }}
          onClick={() => onClickUpdateBtn()}
        >
          <DeleteFilled /> Delete
        </Button>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1em",
        }}
      >
        <FilterOutlined
          style={{ fontSize: "1.5em", cursor: "pointer" }}
          //   onClick={() => setIsFilterDrawerOpen(true)}
        />
        <Search
          style={{ width: "40%" }}
          placeholder="Search by name or description..."
          enterButton
        />
      </div>
      <Drawer
        title="Filter Product"
        open={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
      >
        {filterContent}
      </Drawer>
    </div>
  );
};

export default TableActions;

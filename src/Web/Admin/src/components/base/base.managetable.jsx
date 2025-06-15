import { Checkbox, Table } from "antd";
import TableActions from "./base.tableactions";
import { useState } from "react";

const ManageTable = ({
  dataSource,
  columns,
  pagination,
  selectedIds,
  setSelectedIds,
  setIsCreateFormOpen,
  setIsUpdateFormOpen
}) => {
  const handleClickAllCheckBox = (e) => {
    if (e.target.checked) {
      setSelectedIds(dataSource.map((x) => x.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleClickSingleCheckBox = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const enhancedColumns = [
    {
      title: (
        <Checkbox
          onChange={(e) => handleClickAllCheckBox(e)}
          // checked={isCheckedClickAllCheckBox}
        />
      ),
      render: (_, record, index) => {
        return (
          <Checkbox
            checked={selectedIds.includes(record.id)}
            onChange={() => handleClickSingleCheckBox(record.id)}
          />
        );
      },
    },
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <>{(pagination.current - 1) * pagination.pageSize + index + 1}</>
        );
      },
    },
    ...columns,
  ];

  return (
    <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
      <TableActions onClickCreateBtn={setIsCreateFormOpen} onClickUpdateBtn={setIsUpdateFormOpen}  
            selectedIds={selectedIds}
            filterContent={<h1>This is filter content</h1>}/>
      <Table
      columns={enhancedColumns}
      dataSource={dataSource}
      scroll={{ x: "max-content" }}
      pagination={{
        ...pagination,
        showSizeChanger: true,
        showTotal: (total, range) => {
          return (
            <div>
              {" "}
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
    />
    </div>
  );
};

export default ManageTable;

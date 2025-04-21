import { Table } from "antd";
import { theme } from 'antd';
import CategoryForm from "./category.form";

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },{
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'age',
      key: 'age',
    }, 
  ];

const CategoryTable = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Table 
              dataSource={dataSource} columns={columns} scroll={{ x: 'max-content' }}
              pagination={{
                current: 1,
                pageSize: 10,
                showSizeChanger: true,
                total: 10,
                showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
              }}
            />
        </div> 
    )
}

export default CategoryTable;
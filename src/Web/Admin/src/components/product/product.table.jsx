import { Table } from "antd";
import { theme } from 'antd';
import { useEffect, useState } from "react";
import { fetchAllProductsAPI } from "../../services/api.services";

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
      title: 'Ten san pham',
      dataIndex: 'name'
    }, 
    {
      title: 'Hinh anh',
      dataIndex: 'image'
    },
    {
      title: 'Gia',
      dataIndex: 'price'
    }, 
    {
      title: 'Mo ta',
      dataIndex: 'description'
    }, 
    {
      title: 'Thuoc danh muc',
      dataIndex: 'description'
    }, 
  ];

const ProductTable = ({ products, fetchProducts }) => {
    const [isTableLoading, setIsTableLoading] = useState(false);

    useEffect(() => {
      setIsTableLoading(true);
      fetchProducts();
      setIsTableLoading(false);
    }, [])

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
              dataSource={products} columns={columns} scroll={{ x: 'max-content' }}
              loading={isTableLoading}
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

export default ProductTable;
import { Image, Table } from "antd";
import { theme } from 'antd';
import { useEffect, useState } from "react";
import { fetchAllProductsAPI } from "../../services/api.services";
import { render } from "nprogress";
import ProductForm from "./product.form";
import Checkbox from "antd/es/checkbox/Checkbox";
  
const ProductTable = ({ products, setProducts, isProductFormOpen, setIsProductFormOpen }) => {
    const [isTableLoading, setIsTableLoading] = useState(false);
    
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(10);
    const [selectedIds, setSelectedIds] = useState([]);
    
    const handleClickAllCheckBox = (e) => {
      if(e.target.checked){
        setSelectedIds(products.map(p => p.id));
      }else{
        setSelectedIds([]);
      }
    }

    const handleClickSingleCheckBox = (id) => {
      if(!selectedIds.includes(id)){
        setSelectedIds([...selectedIds, id]);
      }else{
        setSelectedIds(selectedIds.filter(p => p.id === id));
      }
    }

    const columns = [
      {
        title: <Checkbox onClick={(e) => handleClickAllCheckBox(e) }/>,
        render: (_, record, index) => {
          return(
              <Checkbox checked={selectedIds.includes(record.id)} onClick={() => handleClickSingleCheckBox(record.id)}/>
          )
        }
      }, 
      {
        title: 'STT',
        render: (_, record, index) => {
          return(
            <>{(current-1)*pageSize + index + 1}</>
          )
        }
      }, 
      {
        title: 'Ten san pham',
        dataIndex: 'name'
      }, 
      {
        title: 'Hinh anh',
        dataIndex: 'image',
        render: (_, record, index) => {
          return(
              <Image src={`/images/productthumbnail.jpg`} style={{width: "3em" }}/>
          );
        }
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

    useEffect(() => {
      fetchProducts();
    }, [current, pageSize])

    const fetchProducts = async () => {
      setIsTableLoading(true);
      const result = await fetchAllProductsAPI(current, pageSize);
      if(result.data){
        console.log(result.data);
        setCurrent(result.data.pageIndex);
        setPageSize(result.data.pageSize);
        setTotal(result.data.totalCount)
      }

      setIsTableLoading(false);
      setProducts(result.data.data);
      return result;
    } 

    const onChange = (pagination, filters, sorter, extra) => {
      if(pagination && pagination.current){
        if(+pagination.current !== +current){
          setCurrent(+pagination.current)
        }
      }

      if(pagination && pagination.pageSize){
        if(+pagination.pageSize !== +pageSize){
          setPageSize(+pagination.pageSize)
        }
      }
    }

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
            <ProductForm isProductFormOpen={isProductFormOpen} setIsProductFormOpen={setIsProductFormOpen} fetchProducts={fetchProducts}/>
            <Table 
              dataSource={products} columns={columns} scroll={{ x: 'max-content' }}
              loading={isTableLoading}
              pagination={{
                current: current,
                pageSize: pageSize,
                showSizeChanger: true,
                total: total,
                showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }

              }}
              onChange={onChange}
            />
        </div> 
    )
}

export default ProductTable;
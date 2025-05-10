import React from "react";
import { Card, Col, Row, Statistic, Table, Typography } from "antd";
import {
  DollarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const { Title } = Typography;

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4000 },
  { month: "May", sales: 6000 },
];

const orders = [
  {
    key: 1,
    orderId: "ORD001",
    customer: "Alice",
    amount: "$120.00",
    status: "Pending",
  },
  {
    key: 2,
    orderId: "ORD002",
    customer: "Bob",
    amount: "$320.00",
    status: "Completed",
  },
  {
    key: 3,
    orderId: "ORD003",
    customer: "Charlie",
    amount: "$220.00",
    status: "Shipped",
  },
];

const columns = [
  { title: "Order ID", dataIndex: "orderId", key: "orderId" },
  { title: "Customer", dataIndex: "customer", key: "customer" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Status", dataIndex: "status", key: "status" },
];

const Dashboard = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center", color: "#1890ff" }}>
        E-commerce Dashboard
      </Title>

      <Row gutter={16} style={{ marginBottom: "24px" }}>
        <Col span={8}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              hoverable
              style={{
                background: "linear-gradient(135deg, #1890ff, #40a9ff)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Statistic
                title="Total Sales"
                value={112893}
                prefix={<DollarOutlined />}
                valueStyle={{ color: "#fff" }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              hoverable
              style={{
                background: "linear-gradient(135deg, #52c41a, #73d13d)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Statistic
                title="Orders"
                value={938}
                prefix={<ShoppingCartOutlined />}
                valueStyle={{ color: "#fff" }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col span={8}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              hoverable
              style={{
                background: "linear-gradient(135deg, #cf1322, #e05050)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Statistic
                title="Customers"
                value={562}
                prefix={<UserOutlined />}
                valueStyle={{ color: "#fff" }}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Card title="Sales Overview" style={{ marginBottom: "24px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#1890ff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Recent Orders">
        <Table
          columns={columns}
          dataSource={orders}
          pagination={false}
          rowClassName="hover-row"
          style={{ backgroundColor: "#fff" }}
        />
      </Card>
    </div>
  );
};

export default Dashboard;

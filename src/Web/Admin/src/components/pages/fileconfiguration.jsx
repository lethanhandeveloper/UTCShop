import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";

const FileConfiguration = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const selectAfter = (
    <Select defaultValue="Mb">
      <Option value="Mb">Mb</Option>
      <Option value="Kb">Kb</Option>
    </Select>
  );

  return (
    <div>
      <h2 style={{ marginBottom: "50px" }}>File configuration</h2>
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Allow file types (split by comma)"
              name="username"
              rules={[
                { required: true, message: "Please input allow file types" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Maximum file size"
              name="password"
              rules={[
                { required: true, message: "Please input maximum file size" },
              ]}
            >
              <Input
                type="number"
                addonAfter={selectAfter}
                defaultValue="mysite"
              />
            </Form.Item>
            <Form.Item
              label="Location to save"
              name="password"
              rules={[
                { required: true, message: "Please input location to save" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
};

export default FileConfiguration;

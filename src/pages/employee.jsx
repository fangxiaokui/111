
import { Component, React } from "react";
import list from "../pages/list";
import "antd/dist/antd.css"
import { Form, Input, InputNumber, Button } from "antd";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 1,
      lastName: 2,
      age: 3,
      address: 4
    }
  }

  render() {
    return (
      <Form name="nest-messages" style={{ marginLeft: "20%" }}>
        <Form.Item name={["user", "FirstName"]} label="FirstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={this.state.firstName} />
        </Form.Item>
        <Form.Item
          name={["user", "LastName"]}
          label="LastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={this.state.lastName} />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber value={this.state.age} />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Address">
          <Input.TextArea value={this.state.address} />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
Employee.contextTypes = { router: () => React.PropTypes.func.isRequired };
export default Employee;

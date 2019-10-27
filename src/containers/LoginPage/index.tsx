import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface ILoginPageProps {
  form: any;
  router: any;
}

export function LoginPage(props: ILoginPageProps) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        push('/machines');
        console.log('Received values of form: ', values);
      }
    });
  };
  
  const { getFieldDecorator } = props.form;
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center'}}>
      <Form onSubmit={handleSubmit} className="login-form" style={{width: "80%", maxWidth: '450px'}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          </div>
          <div style={{display: "block", width: "100%"}}>

          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
            Log in
          </Button>
          </div>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
    
  );
}

const mapStateToProps = (state: any) => ({
  router: state.router,
});

export const WrappedNormalLoginForm = connect(
  mapStateToProps
)(Form.create({ name: 'normal_login' })(LoginPage));

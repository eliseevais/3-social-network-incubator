import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'}
               component={'input'}
               name={'login'}/>
      </div>
      <div>
        <Field placeholder={'Password'}
               component={'input'}
               name={'password'}/>
      </div>
      <div>
        <Field type={'checkbox'}
               component={'input'}
               name={'rememberMe'}/>
        Remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
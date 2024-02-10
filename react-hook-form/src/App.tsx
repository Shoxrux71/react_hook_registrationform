import { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  // const [name, setName,] = useState("");
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(name);
  // }


  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (date: any) => {
    console.log(date);
  }

  return (
    <div className='form-container'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input
          id='name'
          type="text"
          {...register("name", { required: "名前は必須です。" })}
        />
        <p>{errors.name?.message as React.ReactNode}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input id='email'
          type="email"
          {...register("email", { required: "email は必須です。" })} />
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input id='password'
          type="password"

          {...register("password", { required: "password は必須です。" })} />
        <p>{errors.password?.message as React.ReactNode}</p>
        <button type='submit'>送信</button>
      </form>
    </div>
  );
}

export default App

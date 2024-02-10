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
          {...register("name")}
        />
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input id='email'
          type="email"
          {...register("email")} />
        <label htmlFor="パスワード">パスワード</label>
        <input id='password'
          type="password"
          {...register("password")} />
        <button type='submit'>送信</button>
      </form>
    </div>
  );
}

export default App

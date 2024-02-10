import { useState } from 'react';
import './App.css'

function App() {
  return <div className='form-container'>
    <form>
      <label htmlFor="名前">名前</label>
      <input id='name' type="text" />
      <label htmlFor="メールアドレス">メールアドレス</label>
      <input id='email' type="email" />
      <label htmlFor="パスワード">パスワード</label>
      <input id='password' type="password" />
      <button type='submit'>送信</button>
    </form>
  </div>
}

export default App

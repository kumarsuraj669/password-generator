import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import InteractiveWindow from './components/InteractiveWindow';

function App() {

  const [password, setPassword] = useState('PASSWORD')

  return (
    <div className='flex justify-center space-y-8 items-center h-screen w-[430px] m-auto flex-col'>
      <Header />
      <Display password={password}/>
      <InteractiveWindow password={password} setPassword={setPassword}/>
    </div>
  );
}

export default App;

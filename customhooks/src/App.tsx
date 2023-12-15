import React from 'react';
import './App.css';
import useCopyToClipBoard from './utility/copytoclipboardhook';
import MemoizeMyProps from './otherHooks/memoiseincounter';

function App() {
  const [isCopied, handleCopy] = useCopyToClipBoard(3000);
  const code: string = `this is to get Copied to Clipborad!`;

  return (
    <div className='text-center'>
      <button className={`max-w-fit mt-1 p-1 border-2 border-blue-300 rounded-md ${isCopied ? 'bg-green-500' : ''}`} onClick={() => handleCopy(code)}>
        {isCopied ? "Copied" : "Copy To Clip"}
      </button>
      <MemoizeMyProps></MemoizeMyProps> 
    </div>
  );
}

export default App;

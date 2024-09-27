import { useState } from 'react';

const FullScreenColorChanger = () => {
  const [color, setColor] = useState('white'); 

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset gap-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded text-3xl'>
          <button className='outline-none px-4 py-1 text-black shadow-lg' onClick={() => setColor('red')}>
            Red
          </button>
          <button className='outline-none px-4 py-1 text-black shadow-lg' onClick={() => setColor('green')}>
            Green
          </button>
          <button className='outline-none px-4 py-1 text-black shadow-lg' onClick={() => setColor('blue')}>
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenColorChanger;

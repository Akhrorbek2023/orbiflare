// src/pages/Home.tsx
import React from 'react';
import TextEditor from '../components/TextEditor';
import RankingTable from '../components/Rangking';

const Home: React.FC = () => {
  return (
   <div className='h-[80vh]'>
      <div className="container px-4 mx-auto">
      <div className='flex justify-between items-center h-[80vh]'>
        <div className='w-[20%]'>
        <RankingTable/>
        </div>
        <div className='w-[75%]'>
        <TextEditor />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Home;

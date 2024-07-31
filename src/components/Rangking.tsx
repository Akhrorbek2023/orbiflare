import React from 'react';

interface RankingData {
  name: string;
  points: number;
  percentage: number;
}

const data: RankingData[] = [
  { name: 'Ken', points: 26, percentage: 87 },
  { name: 'Daryo', points: 19, percentage: 84 },
  { name: 'Dolamp', points: 10, percentage: 70 },
];

const RankingTable: React.FC = () => {
  return (
    <div className="w-[300px] mt-4 border border-1 border-blue-500 h-[100%] text-white p-4">
      <h1 className='text-center py-2 text-blue-500 text-[28px]'>Rangking</h1>
      <div className='grid grid-cols-3 text-center mb-3 bg-blue-500 p-3'>
        <span className='text-start'>Ranging</span>
        <span className=' '>Maqolalar soni</span>
        <span className=''>Umumiy natijalar</span>
      </div>
      {
        data.map((item, i) => (
            <div className='grid grid-cols-3 text-center mb-2 bg-blue-500 p-3 hover:scale-105'>
            <span className='text-start'>{i+1}.{item.name}</span>
            <span className=''>{item.points}</span>
            <span className=''>{item.percentage}%</span>
          </div>
        ))
      }
    </div>
  );
};

export default RankingTable;

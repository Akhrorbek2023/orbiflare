import React from 'react';

interface RankingData {
  name: string;
  points: number;
  percentage: number;
}

const data: RankingData[] = [
  { name: 'Kun.uz', points: 26, percentage: 87 },
  { name: 'Daryo', points: 19, percentage: 84 },
  { name: 'Darakchi', points: 10, percentage: 70 },
];

const RankingTable: React.FC = () => {
  return (
    <div className="w-[300px] mt-4 border border-1 border-blue-gray-200 text-white p-4 rounded-md">
      <h1 className='text-center py-2 text-blue-500 text-[28px]'>Ranking</h1>
      <div className='grid grid-cols-3 text-center mb-3 bg-blue-500 p-3 rounded-md'>
        <span className='text-start'>Sites</span>
        <span className=' '>Amount of Articles</span>
        <span className=''>Overall results</span>
      </div>
      {
        data.map((item, i) => (
            <div className='grid grid-cols-3 text-center mb-2 bg-blue-500 p-3 hover:scale-105 rounded-md'>
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

import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const TextEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    for (let i = 0; i < 84; i++) {
      setTimeout(() => setResult(i), i * 80);
    }
  };

  const handleRestart = () => {
    setResult(null);
    setTitle('');
    setValue('');
  };

  return (
    <div>
      {result !== null ? (
        <div>
          <h1 className="text-center mb-5">Result</h1>
          <p className="text-center text-[30px] mb-5">{result}%</p>
          <div className="flex justify-center mb-5">
            <button
              onClick={handleRestart}
              className="px-5 py-2 bg-blue-500 text-white rounded-md"
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-4 mb-10 w-[80%] mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 w-72 mb-10">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-500 focus:border-blue-500"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                    Site name
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    rows={10}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-500 focus:border-blue-500"
                    placeholder=" "
                  ></textarea>
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                    Site name
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center w-[80%] mx-auto py-2">
            <h1></h1>
            <button
              onClick={handleClick}
              className="bg-blue-500 p-2 rounded text-white"
            >
              Calculate result
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextEditor;

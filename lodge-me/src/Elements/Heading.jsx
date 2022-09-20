import React from 'react'

const Heading = ({title, line, summary}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="md:text-2xl text-lg font-semibold">{title}</h1>
        <img src={line} alt="" className="w-auto" />
      </div>
      <div className='flex justify-center'>
        <p className="text-center md:text-sm text-xs leading-3 py-4 px-4 md:px-0 md:w-1/4">{summary}</p>
      </div>
    </div>
  );
}

export default Heading
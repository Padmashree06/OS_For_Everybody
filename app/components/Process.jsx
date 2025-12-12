import React from 'react'

function Process({ p = [], algorithm, rmProcess }) {
  return (
    <div className="space-y-4">
      {p.map(process => (
        process.id !== 0 && (
         
  <div 
  key={process.id} 
  className="flex flex-col justify-center w-full max-w-50 mb-2 overflow-hidden">
  
  <div className="flex items-center justify-between mx-auto w-full">
    <div className="flex items-center gap-2 mx-auto md:mx-0 min-w-0">
      <div className={`w-3 h-3 rounded-full ${process.color}`}></div>
      <p className="truncate ">Process {process.id}</p>
    </div>

    <p
      title='remove process' 
      onClick={() => rmProcess(process.id)} 
      className="text-red-400 cursor-pointer ml-2"
    >
     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9 3v1H4v2h1v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9zm-2 3h10v15H7V6zm2 2v11h2V8H9zm4 0v11h2V8h-2z"/>
   </svg>

    </p>
  </div>

 
  <div className="flex flex-wrap gap-x-3 gap-y-1 mx-auto text-sm mt-1">

    
    <span>Arrival: {process.arrival}</span>
    <span>Burst: {process.burst}</span>

    {process.extra !== 0 && (algorithm.input_req[2]!=='timeQuantum' &&
      <span>{algorithm.input_req[2]}: {process.extra}</span>)
    }
     

  </div>
</div>

)
      ))}
    </div>
  );
}

export default Process;

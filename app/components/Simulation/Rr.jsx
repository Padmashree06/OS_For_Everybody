import React from "react";

export default function RR({ np = [], timeQuantum }) {

  if (!np || !Array.isArray(np)) return <div>No processes</div>;
  if (!timeQuantum || timeQuantum === "0") 
    return <div>Please enter time quantum</div>;

  const tq = Number(timeQuantum);

  const arr = np
    .map(p => ({
      id: p.id,
      arrival: Number(p.arrival),
      burst: Number(p.burst),
      color: p.color 
    }))
    .sort((a, b) => a.arrival - b.arrival);

  let time = 0;
  let completed = [];
  let queue = [...arr];
  let added = new Set();

  queue.push({ ...arr[0] });
  added.add(arr[0].id);
  let idx = 1;

  while (queue.length > 0) {
    let nextQueue = [];

    for (let p of queue) {

      
      if (p.arrival > time) {
        completed.push({
          id: "idle",
          start: time,
          end: p.arrival,
          burst: p.arrival - time,
          color: "bg-gray-300"
        });
        time = p.arrival;
      }

      if (p.burst <= tq) {
        
        completed.push({
          ...p,
          start: time,
          end: time + p.burst,
          burst: p.burst
        });
        time += p.burst;

      } else {
        
        completed.push({
          ...p,
          start: time,
          end: time + tq,
          burst: tq
        });

        nextQueue.push({
          ...p,
          arrival: time + tq,
          burst: p.burst - tq
        });

        time += tq;
      }

     
    }

    queue = nextQueue;
  }


  const totalTime = completed.reduce((a, p) => a + p.burst, 0);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex h-20 min-w-[600px]">
        {completed.map((p, i) => {
          const pct = (p.burst / totalTime) * 100;

          return (
            <div
              key={i}
              title={
                p.id === "idle"
                  ? `Idle: ${p.start} - ${p.end}`
                  : `P${p.id}: ${p.start} - ${p.end}`
              }
              style={{ width: `${pct}%` }}
              className={`h-20 rounded-sm flex items-center justify-center text-black ${p.color} text-xs font-semibold truncate px-1"`}
            >
              {p.id !== "idle" && <span>P{p.id}</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-2 text-xs text-gray-400">
        Total timeline length: {totalTime}
      </div>
    </div>
  );
}

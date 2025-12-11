import { FaSeedling, FaCogs, FaMemory, FaLock, FaProjectDiagram } from "react-icons/fa";
import {MdMemory} from "react-icons/md"
import Link from "next/link"
export default function Menu() {
 const modules = [
  { title: "Operating Systems Basics", icon: <FaSeedling />, route:'/basics' },
  { title: "Scheduling Algorithms", icon: <FaCogs />, route:"/scheduling" },
  { title: "Paging & Memory Management", icon: <MdMemory />, route:"/" },
  { title: "Deadlocks & Prevention", icon: <FaLock />, route:"/" },
  { title: "Threads & Concurrency", icon: <FaProjectDiagram />, route:"/" },
];

return (
  <div className="min-h-screen bg-black text-white px-6 py-10">
    <h1 className="text-4xl md:text-5xl font-bold flex justify-center mb-4">
      OS For Everybody
    </h1>
    <p className="text-gray-400 text-lg mt-1 flex justify-center">
      Where do you want to start?
    </p>

    <div className="flex justify-center">
      <div className="mt-4 space-y-5 max-w-2xl">
        {modules.map((item, index) => (
          <Link href={item.route} key={index}>
            <div className="border border-white/30 rounded-2xl mt-3 py-6 px-5 flex items-center gap-4 cursor-pointer hover:bg-gray-300 hover:text-black transition-all duration-300">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)
}
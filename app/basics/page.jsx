import Link from "next/link"

export default function Basics() {

  const sections = [
    {
      title: "What is an Operating System?",
      analogy:
        "The Operating System is the manager of a restaurant, who acts as the interface between the customers and the kitchen. Apps are customers, and hardware is the kitchen.",
      definition:
        "An Operating System is software that manages hardware resources and provides services to applications.",
      examples: "Windows, Linux,  macOS, Android, iOS",
    },
    {
      title: "What is a Process?",
      analogy:
        "A process is like a dish currently being cooked, its is active, using resources, and constantly changing.",
      definition:
        "A process is a running program currently being executed by the system.",
      examples:
        "Opening Spotify, using a browser tab, running VS Code all these are  separate processes.",
    },
    {
      title: "Process Memory",
      analogy:
        "Just like every dish being cooked has its own plate and ingredients, every process has its own memory space",
      definition:
        "Each process gets its own isolated memory space to prevent interference and corruption.",
    },
    {
      title: "User Mode vs Kernel Mode",
      analogy:
        "User mode is like the dining area where there is limited access, but our kernal mode is like the kitchen where all the cooking and modifying dishes is allowed.",
      definition:
        "User mode has limited acesss to the system whereas kernel mode has full system permissions.",
    },
    {
      title: "System Calls",
      analogy:
        "A system call is like placing an order through a waiter, apps request services via the OS.",
      definition:
        "System calls allow programs to interact safely with hardware through the OS.",
      examples: "read(), write(), open(), fork(), exec()",
    },
    {
      title: "Traps & Trap Handlers",
      analogy:
        "When something unexpected happens, like dividing by zero,  the OS steps in to decide what happens next.",
      definition:
        "A trap transfers control to the OS when exceptions or special events occur.",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 ">
      
      <h1 className="text-4xl flex justify-center md:text-4xl font-bold">OS Basics</h1>
      <p className="text-gray-400 mt-2  flex justify-center">
        Learn the fundamentals of OS
      </p>

      
      <div className="mt-12 space-y-10 max-w-4xl mx-auto">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="border border-white/30 rounded-2xl p-6  "
          >
            <h2 className="text-2xl font-semibold">{sec.title}</h2>
            <div className="max-w-2xl ">
              {sec.analogy && (
              <p className="mt-3 text-gray-300 text-lg">
                <span className="italic">{sec.analogy}</span>
              </p>
            )}

            {sec.definition && (
              <p className="mt-4 leading-relaxed">{sec.definition}</p>
            )}

            {sec.examples && (
              <p className="mt-3 text-s ">
                <b>Example:</b> {sec.examples}
              </p>
            )}
            </div>
            
            
          </div>
        ))}
      </div>

      
      
        <Link href="/scheduling">
        <div className="mt-16 flex justify-center mx text-center">
             <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                   Next →
             </button>
             </div>
        </Link>
       
      </div>
    
  );
}

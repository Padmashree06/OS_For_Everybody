import Link from "next/link";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
    
      <h1 className="text-3xl md:text-7xl font-medium  text-center leading-tight">
        OS For Everyone <br />
      </h1>

      <p className="text-lg text-gray-200 text-center max-w-xl mt-6">
        No complicated theory.  
        No waste of time.
        <br />
        Learn with <b>visuals</b>, <b>simulations</b>, and <b>real-world examples</b>.
      </p>

     <Link href='/menu'>
        <button className="mt-10 border border-white text-white px-8 py-3 text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300">
        Start Exploring
      </button>

    </Link>
      
     
    </div>
  );
}

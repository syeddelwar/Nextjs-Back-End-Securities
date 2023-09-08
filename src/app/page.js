import Image from "next/image";


export default function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 login-background bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 py-32 px-4 z-10 text-white">
        <h1 className="text-2xl lg:text-3xl font-bold leading-9  dark:text-gray-200 pb-4 text-center">
          হোম পেজ
        </h1>
        <p className="text-2xl lg:text-3xl font-bold text-white text-gray-800 text-center">এসাইনমেন্ট (Next.js Back-End & Securities)</p>
        
      </div>
    </main>
  );
}

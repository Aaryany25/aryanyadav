import bg from "./assets/bg.jpg"
import hero from "./assets/hero.jpeg"
function App() {

  return (
   <div className="bg-black min-h-screen text-white ">
<main className="max-w-xl mx-auto py-10 relative">
<img src={bg} alt="Background" className="rounded h-1/2"/>
<div className="absolute top-2/3 text-white flex">
  <img src={hero} alt="hero" className="rounded-xl border-2 white w-32"/>
  <p className="text-2xl font-bold mt-4">
    Aryan Yadav
  </p>
</div>
</main>
   </div>
  )
}

export default App

import bg from "./assets/bg.jpg"
import Hero from "./components/Hero"
function App() {

  return (
   <div className="bg-black min-h-screen text-white ">
<main className="max-w-xl mx-auto py-10 relative">
  <div className="relative">
    <img src={bg} alt="Background" className="w-full h-64 object-cover rounded"/>
    <Hero/>
  </div>

  <div className="mt-28 max-w-prose text-gray-300 leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, facilis nostrum? Dignissimos, enim placeat quae libero fuga optio. Deleniti, nesciunt.
  </div>
</main>

   </div>
  )
}

export default App

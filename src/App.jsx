import bg from "./assets/bg.jpg"
import Exprience from "./components/Exprience";
import GithubMap from "./components/GithubCalender"
import Hero from "./components/Hero"
import "@fontsource/geist"; // Defaults to weight 400

function App() {

  return (
   <div className="bg-black min-h-screen text-white ">
<main className="max-w-xl mx-auto py-10 relative">
  <div className="relative">
    <img src={bg} alt="Background" className="w-full h-54 object-cover rounded "/>
     <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent rounded-b" />
    <Hero/>
  </div>

  <div className="mt-16 max-w-prose text-gray-300 leading-relaxed mb-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, facilis nostrum? Dignissimos, enim placeat quae libero fuga optio. Deleniti, nesciunt.
  </div>
  <hr></hr>
  <div className="mt-5 mb-5">
    <GithubMap/>
  </div>
   <hr></hr>
   <Exprience/>
</main>

   </div>
  )
}

export default App

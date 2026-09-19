import bg from "./assets/bg.jpg"
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Exprience from "./components/Exprience";
import Footer from "./components/Footer";
import GithubMap from "./components/GithubCalender"
import Hero from "./components/Hero"
import "@fontsource/geist"; // Defaults to weight 400

function App() {

  return (
   <div className="bg-black min-h-screen text-white px-4">
<main className="max-w-3xl mx-auto py-10 relative">
  <div className="relative">
    <img src={bg} alt="Background" className="w-full h-54 object-cover rounded "/>
     <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent rounded-b" />
    <Hero/>
  </div>

  <div className="mt-16 mb-6">
    <About />
  </div>
  <hr className="border-neutral-800" />
  <div className="mt-5 mb-5">
    <GithubMap/>
  </div>
   <hr className="border-neutral-800" />
   <Exprience/>
   <AllProjects/>
</main>
   <hr className="border-neutral-800" />
   <Footer/>
   </div>
  )
}

export default App

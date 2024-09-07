import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  )
}
export default HomePage
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <InfiniteMovingCardsDemo/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  )
}

export default Home;
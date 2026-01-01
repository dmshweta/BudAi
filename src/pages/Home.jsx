
import Header from "../components/Header";
import Hero from "../components/Hero";
import AiIdeasSection from "../components/AiIdeasSection";
import CreativeSlider from "../components/CreativeSlider";
import AiServices from "../components/AiServices";
import CurvedCarousel from "../components/CurvedCarousel";
import WhyDidAIWorld from "../components/WhyDidAIWorld";
import TalkAI from "../components/TalkAI";
import Footer from "../components/Footer";




export default function Home() {
return (
<div className="min-h-screen bg-[#0b0b12] text-white font-sans">

<Header/>
<Hero/>
<AiIdeasSection />
<CreativeSlider/>
<AiServices/>
<CurvedCarousel/>
<WhyDidAIWorld/>
<TalkAI/>
<Footer/>

</div>
);
}
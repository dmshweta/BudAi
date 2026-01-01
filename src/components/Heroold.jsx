import { motion } from "framer-motion";
import { Button } from "./Button";


export default function Hero() {
return (
<section
className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-4"
style={{
backgroundImage: "url('/hero-dark-bg.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
>
<motion.h1
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-4xl md:text-6xl font-bold"
>
<span className="text-orange-500">AI</span> POWERED BY
</motion.h1>


<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 }}
className="mt-4 text-xl text-gray-300"
>
Human Intelligence
</motion.p>


<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.6 }}
className="mt-8"
>
<Button>Book A Demo</Button>
</motion.div>
</section>
);
}
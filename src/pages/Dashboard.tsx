import { motion } from "framer-motion";
import heroImg from "../data/hero.jpg";
import progressionImg from "../data/progression.jpg";
import repasImg from "../data/repas.jpg";

const cards = [
  {
    title: "Journal alimentaire",
    desc: "Ajoutez vos repas quotidiens et suivez votre alimentation facilement.",
    img: repasImg,
  },
  {
    title: "Parcours progressif",
    desc: "Débloquez des contenus éducatifs, vidéos et exercices au fil de votre progression.",
    img: progressionImg,
  },
  {
    title: "Espace personnel sécurisé",
    desc: "Créez votre compte et accédez à votre espace personnel en toute sécurité.",
    img: heroImg,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-100 flex flex-col">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight drop-shadow-xl"
          >
            Plateforme de Suivi Diététique
          </motion.h1>
          <nav className="flex gap-6 text-lg font-medium">
            <motion.a whileHover={{ scale: 1.1, color: "#059669" }} href="#journal" className="transition-colors duration-200">Journal</motion.a>
            <motion.a whileHover={{ scale: 1.1, color: "#059669" }} href="#parcours" className="transition-colors duration-200">Parcours</motion.a>
            <motion.a whileHover={{ scale: 1.1, color: "#059669" }} href="#espace" className="transition-colors duration-200">Espace</motion.a>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-x-hidden">
        <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Suivez votre alimentation, progressez, apprenez.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Un outil digital immersif pour un suivi diététique moderne et motivant.
            </p>
          </motion.div>
          <motion.img
            src={heroImg as string}
            alt="Visuel plateforme diététique"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full max-w-2xl rounded-3xl shadow-xl object-cover mx-auto mb-8 mt-4"
          />
        </section>
        <motion.section
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center group hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              whileHover={{ y: -10, boxShadow: "0 8px 32px 0 rgba(16,185,129,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img src={card.img as string} alt={card.title} className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-green-100 group-hover:border-green-400 transition-all duration-300" />
              <h3 className="text-xl font-bold text-green-700 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </motion.section>
        <section className="w-full max-w-6xl mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-2xl shadow-md p-8 flex flex-col justify-between"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="text-2xl font-bold text-blue-700 mb-4">Progression</h4>
            <img src={progressionImg as string} alt="Progression" className="w-full rounded-xl mb-4" />
            <div className="flex items-center gap-4">
              <span className="block h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-700 font-semibold">Module validé !</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-blue-100 via-white to-green-100 rounded-2xl shadow-md p-8 flex flex-col justify-between"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="text-2xl font-bold text-green-700 mb-4">Journal alimentaire</h4>
            <img src={repasImg as string} alt="Repas" className="w-full rounded-xl mb-4" />
            <div className="flex items-center gap-4">
              <span className="block h-3 w-3 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-700 font-semibold">Entrée ajoutée</span>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="mt-16 bg-white/90 backdrop-blur-lg shadow-inner py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-green-100">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-green-700 text-lg"
          >
            &copy; 2025 Plateforme Diététique
          </motion.span>
          <nav className="flex gap-5 ml-0 md:ml-8 mt-2 md:mt-0">
            <motion.a whileHover={{ scale: 1.2, color: "#2563eb" }} href="#" className="transition-colors duration-200">Mentions légales</motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#2563eb" }} href="#" className="transition-colors duration-200">Contact</motion.a>
          </nav>
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="#"
            className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-md hover:bg-green-400 transition-all duration-300"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-green-700"><path d="M22 4.01c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1V20c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4.01zM7 9h10M7 13h6"/></svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3, rotate: -10 }}
            href="#"
            className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md hover:bg-blue-400 transition-all duration-300"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-700"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

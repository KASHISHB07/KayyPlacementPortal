import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    { title: 'Daily Aptitude Quizzes', route: '/quiz' },
    { title: 'Resume Templates', route: '/resume' },
    { title: 'Interview Question Bank', route: '/questions' },
    { title: 'Application Tracker', route: '/tracker' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-36 h-36 mb-8 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
        <h1 className="text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          KayyPlacement Portal
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-2xl cursor-pointer shadow-lg transition-all duration-300"
              onClick={() => navigate(card.route)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-center">{card.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

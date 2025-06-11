import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp('IP topilmadi'));
  }, []);

  const user = {
    name: 'Azico',
    birthdate: '2009-01-25',
    location: 'Toshkent, O‘zbekiston',
    hobbies: ['Frontend dasturlash', 'Musiqa tinglash', 'Compyuter games'],
    favorites: ['React', 'Js', 'Next.js'],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Salom, men {user.name}!
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
      >
        <p className="mb-4"><strong>🎂 Tug‘ilgan kun:</strong> {user.birthdate}</p>
        <p className="mb-4"><strong>📍 Manzil:</strong> {user.location}</p>
        <p className="mb-4"><strong>🌐 IP manzil:</strong> {ip}</p>
        <p className="mb-4"><strong>❤️ Hobbilari:</strong> {user.hobbies.join(', ')}</p>
        <p className="mb-4"><strong>🔥 Yoqqan texnologiyalar:</strong> {user.favorites.join(', ')}</p>
      </motion.section>
    </main>
  );
}

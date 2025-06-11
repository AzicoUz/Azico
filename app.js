const { useEffect, useState } = React;
const { motion } = window['framer-motion'];

function App() {
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
    <main>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}
      >
        Salom, men {user.name}!
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p><strong>🎂 Tug‘ilgan kun:</strong> {user.birthdate}</p>
        <p><strong>📍 Manzil:</strong> {user.location}</p>
        <p><strong>🌐 IP manzil:</strong> {ip}</p>
        <p><strong>❤️ Hobbilari:</strong> {user.hobbies.join(', ')}</p>
        <p><strong>🔥 Yoqqan texnologiyalar:</strong> {user.favorites.join(', ')}</p>
      </motion.section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

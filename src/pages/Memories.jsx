import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import vidioBunga from "../assets/videos/vidioBungadudu.mp4";
import fotoKenangan from "../assets/images/couple.jpg";

const HEARTS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 24 + 14,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 4,
  emoji: ["❤️", "💕", "💖", "💗", "💓", "💞", "🩷"][Math.floor(Math.random() * 7)],
}));

const Memories = ({ isIOS }) => {
  const [loveShow, setLoveShow] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!loveShow) { setHearts([]); return; }
    setHearts(HEARTS);
  }, [loveShow]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Floating Hearts Animation */}
      <AnimatePresence>
        {loveShow && hearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ y: "110vh", opacity: 1, scale: 0.5 }}
            animate={{ y: "-10vh", opacity: [1, 1, 0], scale: [0.5, 1.2, 0.8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: h.duration, delay: h.delay, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: `${h.left}%`,
              bottom: 0,
              fontSize: h.size,
              pointerEvents: "none",
              zIndex: 50,
              userSelect: "none",
            }}
          >
            {h.emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full text-center"
      >
        <motion.div whileHover={{ scale: isIOS ? 1 : 1.02 }} className="mb-8">
          <img
            src={fotoKenangan}
            alt="Kita Berdua"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-white"
            style={{ transform: "translateZ(0)" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8 border border-pink-100"
        >
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">
            Wish Spesial
          </h2>

          <div className="text-left text-pink-800 space-y-4 leading-relaxed">
            <p>
              💌 <strong>Sayangku...</strong>
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Setiap hari aku menunggumu pulang dengan semangat.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Jangan jadikan penghalang jarak kita saat ini menjadi hambatan
              untuk kita saling menyayangi, mencintai, dan melindungi satu sama
              lain.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Semoga kita bisa segera pulang kerumah yang sama. Sehat selalu
              gantengku.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Terimakasih untuk segala kasih sayangmu selama ini.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Tetap sama sama belajar menjadi lebih baik bersama ya...
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Semangat LDR 🇺🇸🇮🇩
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              I love U
            </motion.p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: isIOS ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLoveShow(!loveShow)}
          className="relative overflow-hidden bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-white/30"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="button-text">
            {loveShow ? "Tutup Cinta 💔" : "Kirim Cinta ❤️"}
          </span>
        </motion.button>

        {loveShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
          >
            {/* Romantic Video Bubble */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-rose-200"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                className="w-72 h-72 object-cover"
              >
                <source src={vidioBunga} type="video/mp4" />
              </video>
            </motion.div>

            {/* Big Pulsing Heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                style={{ fontSize: 100, lineHeight: 1 }}
              >
                ❤️
              </motion.span>
              <div className="flex gap-2 flex-wrap justify-center max-w-xs">
                {["💕", "💖", "💗", "💓", "💞", "🩷", "💝", "💘"].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 + i * 0.2, delay: i * 0.15, ease: "easeInOut" }}
                    style={{ fontSize: 28 }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {loveShow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center text-pink-600 mt-6 italic text-lg"
          >
            ❤️ Cinta ini untukmu sayang... I Love Uuu 🥺💕
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Memories;

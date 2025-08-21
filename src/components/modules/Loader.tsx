import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Spinner */}
        <motion.div
          className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Glow Text */}
        <motion.p
          className="text-2xl font-semibold text-orange-600 drop-shadow-md"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Loading ....
        </motion.p>
      </div>
    </div>
  );
}

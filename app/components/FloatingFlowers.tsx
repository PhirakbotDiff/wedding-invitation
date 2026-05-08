"use client";

import { motion } from "framer-motion";

function FloralVectorA() {
  return (
    <svg viewBox="0 0 180 180" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M91 166V96" />
        <path d="M91 120C79 116 73 106 73 94C83 94 90 100 91 111" />
        <path d="M91 132C103 128 109 118 109 106C99 106 92 112 91 123" />
        <path d="M90 72C72 72 58 58 58 40C76 40 90 54 90 72Z" />
        <path d="M90 72C108 72 122 58 122 40C104 40 90 54 90 72Z" />
        <path d="M72 90C54 90 40 76 40 58C58 58 72 72 72 90Z" />
        <path d="M108 90C126 90 140 76 140 58C122 58 108 72 108 90Z" />
        <circle cx="90" cy="82" r="10" fill="#D8C7A0" stroke="#A67C52" />
      </g>
    </svg>
  );
}

function FloralVectorB() {
  return (
    <svg viewBox="0 0 180 180" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 165V95" />
        <path d="M90 119C78 113 71 102 69 90C81 91 89 98 90 109" />
        <path d="M90 130C102 124 109 113 111 101C99 102 91 109 90 120" />
        <path d="M90 70C76 66 66 52 67 36C82 40 90 54 90 70Z" />
        <path d="M90 70C104 66 114 52 113 36C98 40 90 54 90 70Z" />
        <path d="M72 86C57 82 46 68 46 52C62 56 72 70 72 86Z" />
        <path d="M108 86C123 82 134 68 134 52C118 56 108 70 108 86Z" />
        <circle cx="90" cy="80" r="9" fill="#E2D4B4" stroke="#A67C52" />
      </g>
    </svg>
  );
}

export default function FloatingFlowers() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * 1000, rotate: Math.random() * 45 - 22.5 }}
          animate={{ y: "110vh", rotate: Math.random() * 120 - 60 }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-sage opacity-30"
        >
          {i % 2 === 0 ? <FloralVectorA /> : <FloralVectorB />}
        </motion.div>
      ))}
    </div>
  );
}

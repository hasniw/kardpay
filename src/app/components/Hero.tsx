'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export const Hero = () => {
  const brands = [
    'all', 'boss', 'deliveroo', 'emmar', 'fiveguys',
    'ita', 'katman', 'lastminute', 'nespresso', 'netflix',
    'samsung', 'shein', 'turo', 'visa',
  ]
  const repeatedBrands = [...brands, ...brands, ...brands]

  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 10
    const rotateX = -((y - centerY) / centerY) * 10

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 10
    const rotateX = -((y - centerY) / centerY) * 10

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`
    }
  }

  const [viewportHeight, setViewportHeight] = useState('100vh')
  const [scrollLogos, setScrollLogos] = useState(true)

  useEffect(() => {
    // On fixe la hauteur au premier render (pour iOS)
    setViewportHeight(`${window.innerHeight}px`)
    // On détermine si on doit activer le scroll des logos (>=768px)
    setScrollLogos(window.innerWidth >= 768)
  }, [])

  return (
    <section
      className="w-full text-white flex flex-col justify-between pb-10"
      style={{ minHeight: viewportHeight }}
    >
      <header className="w-full px-6 py-6 flex items-center justify-around mb-[36px]">
        <div className="relative w-[90px] sm:w-[110px] lg:w-[138px] h-auto aspect-[147/35]">
          <Image
            src="/images/brands/kardpay-logo.svg"
            alt="kardpay-logo"
            fill
            className="object-contain"
          />
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-white font-poppins text-[14px] sm:text-[18px] lg:text-[20px] font-semibold leading-[24px] sm:leading-[40px] cursor-pointer"
        >
          Download now
        </motion.a>
      </header>

      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-center font-poppins text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] font-semibold leading-[32px] md:leading-[60px] mb-[-42px]"
        >
          Your money, your rules.
        </motion.h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="transition-transform duration-300 ease-out"
          style={{ perspective: 1000 }}
        >
          <div
            ref={ref}
            className="w-fit mx-auto transition-transform duration-200 ease-out"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              src="/images/kardpayCard.png"
              alt="kardpay-card"
              width={717}
              height={573}
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-[40px] px-6"
          style={{ minWidth: 'max-content' }}
          animate={
            scrollLogos
              ? { x: ['0%', '-33.333%'] }
              : { x: '0%' }
          }
          transition={
            scrollLogos
              ? { repeat: Infinity, duration: 30, ease: 'linear' }
              : {}
          }
        >
          {repeatedBrands.map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[40px] flex items-center justify-center"
            >
              <Image
                src={`/images/brands/${name}.svg`}
                alt={name}
                width={80}
                height={40}
                className="h-auto w-auto opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

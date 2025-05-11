'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const discover = [
  { text: 'Wallets', icon: '/images/wallet.svg' },
  { text: 'Cards', icon: '/images/card.svg' },
  { text: 'Earn', icon: '/images/earn.svg' },
  { text: 'Cashback', icon: '/images/cashback.svg' },
  { text: 'eSIM', icon: '/images/esim.svg' },
]

export const DiscoverSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-24 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-white font-poppins text-[30px] font-semibold not-italic leading-[60px] mb-[36px] text-center"
      >
        Spend, share, and earn, all from one powerful app.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full bg-[#0B0B0B] rounded-[28px] flex flex-col lg:flex-row items-center justify-between max-w-[1147px] px-6 sm:px-10 lg:px-[90px] py-12 gap-12"
      >
        {/* Texte + icônes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 w-full lg:max-w-md"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center lg:text-left font-poppins text-[24px] md:text-[30px] font-semibold leading-[60px]"
          >
            Discover kardpay
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-center lg:text-left font-poppins text-[16px] md:text-[20px] font-semibold not-italic leading-normal mb-[24px]"
          >
            More than just an app, your everyday <br className="hidden sm:block" />
            companion, always at your fingertips.
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-[32px] pt-4">
            {discover.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-[6px] w-[36px]"
              >
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-[#7C7C7C] font-poppins text-[12px] font-normal text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-row gap-[12px] mt-8 justify-center lg:hidden">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/apple.svg"
                alt="Apple logo"
                width={30}
                height={30}
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/android.svg"
                alt="Android logo"
                width={30}
                height={30}
                className="h-[30px] w-[30px]"
              />
            </a>
          </div>
        </motion.div>

        {/* Visuel main + QR + logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-row items-center justify-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/images/hand_kardpay.png"
              alt="hand holding kardpay card"
              width={310}
              height={498}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Image src="/images/qr-code.svg" alt="QR code" width={104} height={104} />
            <div className="flex flex-row gap-[12px]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/apple.svg"
                  alt="Apple logo"
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/android.svg"
                  alt="Android logo"
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

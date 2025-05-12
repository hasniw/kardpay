'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const EarnInfo = () => {
  return (
    <section className="text-white w-full px-6 py-20 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-white font-poppins text-[30px] font-semibold leading-[60px] not-italic mb-[36px] text-center lg:text-left"
      >
        Even when you spend, you earn through cashback and investments.
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-[30px] lg:text-left items-center lg:items-start lg:justify-between w-full max-w-[1147px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative h-[496px] w-full max-w-[554px] rounded-[28px] overflow-hidden flex flex-col justify-end bg-lightgray bg-cover bg-center bg-no-repeat pb-[65px] px-[28px]"
        >
          <Image
            src="/images/girl-background.png"
            alt="Background"
            fill
            className="object-cover z-0"
          />
          <Image
            src="/images/cashback.svg"
            alt="Cashback"
            width={48}
            height={48}
            className="z-10 brightness-0 invert mb-[6px] ml-[28px]"
          />
          <div className="relative z-10 px-[28px]">
            <p className="text-white font-poppins text-[24px] md:text-[30px] font-semibold not-italic">
              Cashback
            </p>
            <p className="text-white font-poppins text-[16px] md:text-[20px] font-semibold not-italic leading-normal">
              Earn up to 8% on all your purchases.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center justify-center relative gap-[24px] w-full max-w-[554px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row justify-center lg:justify-between w-full gap-6"
          >
            <div className="flex flex-col bg-[rgba(217,217,217,0.1)] rounded-[28px] p-[29px] w-full max-w-[550px] h-[236px] items-center justify-center lg:items-start lg:justify-end">
              <Image
                src="/images/earn.svg"
                alt="Earn"
                width={46}
                height={50}
                className="mb-[6px] brightness-0 invert"
              />
              <p className="text-white font-poppins text-[24px] md:text-[30px] font-semibold">Earn</p>
              <p className="text-white text-[16px] md:text-[20px]">Up to 26% APR</p>
            </div>

            <Image
              src="/images/water-background.png"
              alt="water background"
              width="260"
              height="236"
              className="hidden lg:block"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center lg:items-start justify-center bg-[rgba(217,217,217,0.1)] rounded-[28px] pt-[28px] px-[28px] w-full max-w-[550px] min-h-[236px] text-center lg:text-left"
          >
            <p className="text-white font-poppins text-[24px] md:text-[30px] font-semibold not-italic ">
              kardpay for Business
            </p>
            <p className="text-white font-poppins text-[16px] md:text-[20px] font-semibold not-italic leading-normal">
              Share the gift of everything Kardpay with those who matter most to your business.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

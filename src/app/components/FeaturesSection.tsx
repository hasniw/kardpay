'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const FeaturesSection = () => {
  const giftCardBrands = [
    'nike', 'lastminute-light', 'spotify', 'uber', 'grab',
    'samsung-light', 'airbnb', 'hotels', 'amazon', 'careem',
    'havaianas', 'avis', 'burger-king', 'bonvoy', 'all-light',
    'dubai-autodrome',
  ]

  const crypto = ['avax', 'usdc', 'usdt', 'kardpay-crypto']

  const features = [
    {
      title: 'Virtual cards',
      text: 'Order now your virtual cards without KYC.',
      content: (
        <>
          <Image
            src="/images/kardpay-card.png"
            alt="kardpay-card"
            width={450}
            height={300}
            className="mb-4"
          />
          <div className="flex justify-between w-full mt-auto">
            <div className="flex flex-row gap-[6px]">
              <Image src="/images/brands/googlepay.svg" alt="google-pay" width={300} height={200} className="h-auto w-auto mr-2" />
              <Image src="/images/brands/apple-pay.svg" alt="apple-pay" width={300} height={200} className="h-auto w-auto" />
            </div>
            <div>
              <Image src="/images/brands/visa-light.svg" alt="visa" width={60} height={40} className="h-auto w-auto" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Gift cards',
      text: "Every card is more than a payment, it's a gift. With over 1,500 cards available.",
      content: (
        <div className="grid grid-cols-4 gap-5 w-full pb-10">
          {giftCardBrands.map(brand => (
            <div key={brand} className="flex justify-center items-center">
              <Image
                src={`/images/brands/${brand}.svg`}
                alt={`${brand} logo`}
                width={0}
                height={0}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Crypto wallets',
      text: 'Secure your crypto and keep it ready whenever you need it.',
      content: (
        <div className="flex flex-col gap-[10px] justify-center items-center flex-1">
          {crypto.map(coin => (
            <Image
              key={coin}
              src={`/images/${coin}.svg`}
              alt={`${coin} logo`}
              width={347}
              height={59}
              className="object-contain"
            />
          ))}
        </div>
      ),
    },
    {
      title: 'Cashback',
      text: 'Enjoy up to 8% cashback on all your purchases.',
      content: (
        <div className="flex flex-1 items-end justify-center -mb-8">
          <Image src="/images/cashback-iphone.png" alt="cashback" width={266} height={339} />
        </div>
      ),
    },
  ]

  return (
    <section className="text-white w-full py-20 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white font-poppins text-[20px] sm:text-[28px] font-semibold leading-[36px] sm:leading-[40px] text-center mb-[36px]"
      >
        Unlock amazing features, anywhere in the world.
      </motion.h2>

      <div className="w-full overflow-x-auto hide-scrollbar pl-4 pr-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            },
          }}
          className="mx-auto flex snap-x snap-mandatory gap-[30px] w-max flex-row justify-start"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[459px] max-w-[459px] h-auto lg:h-[549px] rounded-[28px] bg-[rgba(217,217,217,0.1)] p-8 pt-[0px] flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-white font-poppins text-[22px] sm:text-[30px] font-semibold leading-[40px] sm:leading-[60px] mt-[42px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-white font-poppins text-[16px] sm:text-[20px] font-semibold leading-normal mb-4">
                  {feature.text}
                </p>
              </div>
              {feature.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

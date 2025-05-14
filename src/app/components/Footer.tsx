'use client'

import Image from 'next/image'
import Link from 'next/link'

const sections = {
  Features: ['Virtual cards', 'Gift cards', 'Wallets', 'Earn', 'Cashback'],
  Company: ['About us', 'Press kit', 'Medias'],
  Legal: ['Privacy Policy', 'Terms & Conditions'],
  Connect: ['X (Twitter)', 'Arena.social', 'Telegram', 'Medium', 'LinkedIn'],
}

const linksMap = {
  Features: ['#', '#', '#', '#', '#'],
  Company: [
    'https://www.kardpay.app/about-us',
    'https://drive.google.com/drive/folders/1To7OzM3LUsASFvqqgEcAlqHQIHVjER2?usp=drive_link',
    '#',
  ],
  Legal: [
    'https://www.kardpay.app/privacy-policy',
    'https://www.kardpay.app/terms-of-service',
  ],
  Connect: [
    'https://x.com/kardpay',
    'https://arena.social/kardpay',
    'https://t.me/kardpayapp',
    'https://medium.com/@kardpay',
    'https://www.linkedin.com/company/kardpayapp',
  ],
}

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-16 pt-20 max-md:px-6 max-sm:px-4 font-poppins">
      <div className="w-full h-[0.2px] bg-[#606060]" />

      <div className="w-full py-[50px] px-[150px] max-xl:px-[80px] max-lg:px-[40px] max-md:px-0">
        <div className="flex justify-center items-start gap-12 max-md:flex-col">
          <div className="w-[26%] max-md:w-full max-md:text-center">
            <section className="flex flex-col items-start max-md:items-center mt-3 w-full">
              <Image
                src="/images/brands/kardpay-logo.svg"
                alt="Kardpay Logo"
                width={147}
                height={35}
                className="object-contain mb-[2px]"
              />
              <h1 className="text-white font-poppins text-[10px] font-semibold leading-normal">
                Your money, your rules.
              </h1>
              <div className="flex gap-[12px] mt-[23px] mb-[28px] max-md:justify-center">
                <Image src="/images/app-store.svg" alt="App Store" width={97.5} height={28.6} />
                <Image src="/images/google-play.svg" alt="Play Store" width={100.1} height={28.6} />
              </div>
              
              <div>
                <Image src="/images/pci.svg" alt="PCI DSS" width={80} height={31} className='my-1.5'/>
                <div className="flex flex-col items-start gap-[4px] max-md:justify-center text-[10px] font-semibold">
                  <p className="text-white">
                    ©kardpay. All rights reserved.
                  </p>
                  <span className="inline-flex items-center gap-[4px] whitespace-nowrap">
                    Powered by
                    <Image
                      src="/images/avalanche.svg"
                      alt="Avalanche Logo"
                      width={60}
                      height={16}
                      className="inline-block object-contain"
                    />
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className="w-[74%] max-md:w-full">
            <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8 max-md:justify-center max-md:text-center">
              {Object.entries(sections).map(([sectionTitle, links], index) => (
                <div key={index} className="max-md:text-center">
                  <h2 className="text-[18px] font-semibold mb-2">{sectionTitle}</h2>
                  <nav className="space-y-1">
                    {links.map((text, i) => (
                      <Link
                        key={i}
                        href={linksMap[sectionTitle as keyof typeof linksMap]?.[i] || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-arial text-[14px] font-normal leading-[25px] hover:text-gray-300 transition-colors break-words"
                      >
                        {text}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

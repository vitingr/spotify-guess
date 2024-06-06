
import Link from 'next/link'
import React from 'react'
import { FooterData, FooterLink } from './types'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import Image from 'next/image'
import { footerLinks } from '@/src/constants/footer'

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="border-slate-700 px-8 bg-slate-900 border-t-2 min-h-[360px] flex w-full py-16 flex-col">
        <article className="w-full xs:mb-12 max-w-6xl mx-auto">
          <span className="flex w-full justify-start font-[700] text-lg cursor-pointer lg:text-3xl">
            <span
              className="font-[700] text-transparent text-lg lg:text-3xl bg-clip-text
              bg-gradient-to-r from-green-600 to-green-500 flex"
            >
              spotify
            </span>
            <span className="font-[700] text-white text-lg lg:text-3xl cursor-pointer">
              GUESS
            </span>
          </span>
          <p className="mt-2 text-[#a2adce]">Impulsionando sua empresa</p>
          <p className="text-sm text-[#a2adce]">
            Se torne referência no seu nicho
          </p>
        </article>
        <article className="flex-row max-w-6xl mx-auto mt-12 w-full">
          <ul className="w-full flex gap-6 flex-wrap sm:flex-nowrap mt-16 sm:mt-0">
            {footerLinks.map((link: FooterData, index: number) => (
              <li
                key={`${link.title}-${index}`}
                className="w-full flex flex-col gap-4 text-base min-w-[140px] justify-center items-center sm:justify-normal sm:items-start"
              >
                <span className="text-white text-xl">{link.title}</span>
                {link.links.map((link: FooterLink, index: number) => (
                  <Link
                    key={`${link.label}-${index}`}
                    href={link.href}
                    className="text-[#a2adce] text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </li>
            ))}
            <div className=" min-w-[140px] w-full flex flex-col sm:justify-normal items-center justify-center sm:items-start gap-4">
              <span className="text-white text-xl">Social Media</span>
              <p className="text-[#a2adce] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quia perferendi!
              </p>
              <div className="flex justify-center mt-4 items-center gap-4">
                <FaFacebook size={22} className="white-icon" />
                <FaInstagram size={22} className="white-icon" />
                <FaTwitter size={22} className="white-icon" />
                <FaYoutube size={22} className="white-icon" />
                <FaLinkedin size={22} className="white-icon" />
                <FaGithub size={22} className="white-icon" />
              </div>
              <figure className="mt-4">
                <Image
                  src={
                    'https://vtp.ifsp.edu.br/images/CDI/Identidade_Visual/IFSP-VTP-Logo-Color-5.png'
                  }
                  alt="ifsp-logo"
                  width={160}
                  height={80}
                />
              </figure>
            </div>
          </ul>
        </article>
      </div>
    </footer>
  )
}

export default Footer

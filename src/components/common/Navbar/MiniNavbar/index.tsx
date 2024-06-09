import Link from "next/link";
import React from "react";
import { IoHomeOutline, IoDocumentsOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";
import type { MiniNavbarProps } from "./types";
import { revalidateTag } from "next/cache";
import { Button } from "../../Buttons/Button";
import { signOut } from "next-auth/react";

export const MiniNavbar = ({ showMenu, setShowMenu }: MiniNavbarProps) => {
	return (
    <div className="animate__animated animate__fadeInDown z-20 fixed right-0 bg-[#fff] shadow-md h-[565px] sm:h-[560px] w-[325px] border border-[#f7f7f7] translate-y-2 transition-all rounded-lg sm:mt-[25px] drop-shadow-md mt-[25px] lg:left-[70%]">
      <div className="px-10 py-6">
        <h1 className="text-xl font-semibold text-center">
          Bem-Vindo ao nosso jogo
        </h1>
      </div>
      <div className="w-full flex gap-4 p-6 bg-[#f7f7f7] items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
          className="w-[50px] h-[50px] selection:bg-transparent"
          alt="cellphone-picture"
        />
        <div>
          <h4 className="text-sm font-semibold">Código-fonte</h4>
          <p className="text-xs mt-1 text-slate-500">
          Confira o nosso projeto! Acesse o nosso repositório no GitHub
          e dê uma estrela para nos apoiar no desenvolvimento.
          </p>
          <Link
            href={'https://github.com/vitingr/spotify-guess'}
            target="_blank"
            className="mt-6 text-green-600 font-semibold text-xs"
          >
            Conferir
          </Link>
        </div>
      </div>
      <div className="px-8 py-6 gap-6 w-full flex flex-col">
        <Link
          href={'/'}
          className="flex w-full justify-between items-center gap-4 cursor-pointer"
          id="home"
          onClick={() => setShowMenu(false)}
        >
          <IoHomeOutline size={27.5} className="gray-icon" />
          <h3 className="w-full text-sm">Início</h3>
        </Link>
        <Link
          href={'/'}
          className="flex w-full justify-between items-center gap-4 cursor-pointer"
          id="feed"
          onClick={() => setShowMenu(false)}
        >
          <BsGrid
            size={27.5}
            className="gray-icon"
            // onClick={() => {
            // 	revalidateTag("get-all-posts");
            // }}
          />
          <h3 className="w-full text-sm">Feed</h3>
        </Link>
        <Link
          href={'/'}
          className="flex w-full justify-between items-center gap-4 cursor-pointer"
          id="purchases"
          onClick={() => setShowMenu(false)}
        >
          <IoDocumentsOutline size={27.5} className="gray-icon" />
          <h3 className="w-full text-sm">Artigos</h3>
        </Link>
        <Link
          href={'/'}
          className="flex w-full justify-between items-center gap-4 cursor-pointer"
          id="coupons"
          onClick={() => setShowMenu(false)}
        >
          <MdOutlineLocalFireDepartment size={27.5} className="gray-icon" />
          <h3 className="w-full text-sm">Em Alta</h3>
        </Link>
        <Button label="Sign out" onClick={() => signOut()} />
      </div>
    </div>
  )
};

export default MiniNavbar;

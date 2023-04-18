import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import { AiOutlineLogout } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import Logo from "../utils/d36bf4b8d4155f743245bc805febd26d.png"
const Navbar = () => {
	return (
		<div className="flex py-2 px-4 bg-[#1D1D1F] xl:border-gray-200">
			<Link href={"/"}>
				<div className="w-[100px] md:w-[140px]">
					<Image
						className="cursor-pointer"
						src={Logo}
						width={100}
						height={100}
						alt="TikTok"
						layout="responsive"
					/>
				</div>
			</Link>
		</div>
	)
}

export default Navbar

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import { AiOutlineLogout } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import Logo from "../utils/tiktik-logo.png"
const Navbar = () => {
	return (
		<div className="w-full flex justifiy-between items-center px-4 py-2 border-b-2 border-gray-200">
			<Link href={"/"}>
				<div className="w-[100px] md:w-[130px]">
					<Image
						className="cursor-pointer"
						src={Logo}
						alt="TikTok"
						layout="responsive"
					/>
				</div>
			</Link>
		</div>
	)
}

export default Navbar

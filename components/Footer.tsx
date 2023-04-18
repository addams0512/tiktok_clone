import React from "react"
import { footerList1, footerList2, footerList3 } from "../utils/constants"
import { GiHellCrosses } from "react-icons/gi"
const List = ({ items, mt }: { items: string[]; mt: boolean }) => {
	return (
		<div className={`flex flex-wrap gap-3 ${mt && "mt-5"}`}>
			{items.map((item) => (
				<p
					className="text-gray-400 text-sm hover:underline cursor-pointer"
					key={item}>
					{item}
				</p>
			))}
		</div>
	)
}

const Footer = () => {
	return (
		<div className="mt-6 hidden xl:block">
			<List
				items={footerList1}
				mt={false}
			/>
			<List
				items={footerList2}
				mt
			/>
			<List
				items={footerList3}
				mt
			/>
		</div>
	)
}

export default Footer

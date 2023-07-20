import { Cards } from "@/globalTypes"
import { Detail, Title } from "@/mui/customize"

function Card({ title, detail, icon }: Cards) {
    return (
        <li
            className="p-5 border border-dark-300 rounded-2xl overflow-hidden relative after:absolute after:bottom-0
            after:right-0  after:w-12 after:h-12 after:bg-light-tertiary after:opacity-60 after:hover:w-32 cursor-pointer
            after:hover:h-32 after:hover:transition-all after:hover:duration-700 after:hover:ease-in-out after:rounded-tl-full
            before:absolute before:bottom-0 before:right-0  before:w-8 before:h-2 before:bg-light-100-tertiary before:opacity-60 
            before:hover:w-28 before:hover:h-16 before:hover:transition-all before:hover:duration-500 before:hover:ease-in-out before:rounded-tl-full"
        >
            <Detail className="!text-dark-500 z-10">{title}</Detail>
            <div className="flex items-center justify-between mt-3 z-10">
                <span className="bg-dark-400 z-10 p-2 rounded-full border-4 border-primary shadow-md">
                    {icon}
                </span>
                <Title className="!text-dark-200 z-10">{detail}</Title>
            </div>
        </li>
    )
}

export default Card
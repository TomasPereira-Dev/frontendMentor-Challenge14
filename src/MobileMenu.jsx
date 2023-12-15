import { useCallback, useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const MobileMenu = ({isOpen}) => {

    const [visibility, setVisibility] = useState("hidden")

    const visibilityHandler = useCallback(() => {
        if (isOpen) {
            setVisibility("block")
        }
    }, [isOpen])

    useEffect(() => {
        visibilityHandler()
    }, [visibilityHandler])

    return (
        <>
            <div className={`absolute top-20 left-8 z-20 flex flex-col items-center gap-4 text-white text-lg font-bold py-10 px-4 w-10/12 bg-violet2 ${visibility} rounded-lg`} >
                <ul className="flex flex-col items-center gap-6 text-white pb-6 w-full border-b-[1px] border-b-violet1">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <a className="mt-6" href="#">Login</a>
                <a className="text-center bg-cyan px-8 py-2 rounded-full w-11/12" href="#">Sign Up</a>
            </div>
        </>
    )
}

export default MobileMenu
import Image from "next/image";
import logo from "../../../public/logo.png";
export const Logo = () => {
    return(
        <div className="flex items-center space-x-4">
    <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full logo" />
    <div className=" text-2xl font-bold m-2">
        Infernape
    </div>
</div>
    )
}
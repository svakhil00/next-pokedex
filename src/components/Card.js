import { getPicture } from "@/app/helpers";
import React from "react"
import Image from "next/image";

const card = (info, text) => {
    return (
        <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
            {/* Image */}
            <div className="flex bg-gray-700 rounded-xl items-center justify-center">
                <Image src={getPicture(info.Item)} width={250} height={250} alt="Image Not Found"></Image>
            </div>

            {/* Info */}
            <div className="p-2 border-b-2 items-center justify-center">
                <h6>{text}</h6>
            </div>
        </div>
    );
};

export default card;
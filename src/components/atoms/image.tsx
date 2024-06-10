import React from "react";
import ImageProps from "./interfaces/image.interface";

const Image = ({src,alt,width,height}:ImageProps) => {
    return <div>
        <img
        src={src}
        alt={alt}
        width={width}
        height={height} >
        </img>
    </div>
};

export default Image;
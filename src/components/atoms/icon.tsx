import {FC, SVGProps} from "react";
import icons from "../../assets/icons";
import { IconProps,IconTypes,IconNames,SVGIconsInterface } from "./interfaces/icon.interface";
//Esta es una función de envoltorio, pa poder meterle los íconos y no tener que hacer un componente 
//por cada svg
const withProps = (iconType: IconTypes,iconName: IconNames ) => ({...props}) => {
    //esto esta buscando los icons en el index por tipo, y de ahi el nombre específico del ícono
    const SvgIcons= icons[iconType] as SVGIconsInterface;
    const SvgIcon= SvgIcons[iconName] as unknown as FC<SVGProps<SVGSVGElement>>;
    return <SvgIcon {...props}/>;
}
const Icon = ({width,height,fill,stroke,strokeWidth,iconName,iconType,className}:IconProps) => {
    const IconWithProps = withProps(iconType,iconName)
   
    return <IconWithProps
        className={`${iconType} ${iconName} ${className||''}`} 
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
    />
};

export default Icon;
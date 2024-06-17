import {FC, SVGProps} from "react";
import icons from "../../assets/icons";
import { IconProps,IconTypes,IconNames,SVGIconsInterface } from "./interfaces/icon.interface";
//Esta es una función de envoltorio, pa poder meterle los íconos y no tener que hacer un componente
//por cada svg
const withProps = (iconType: IconTypes,iconName: IconNames ) => ({theme, ...props}: Partial<IconProps>) => {
    //esto esta buscando los icons en el index por tipo, y de ahi el nombre específico del ícono
    const SvgIcons= icons[iconType] as SVGIconsInterface;
    const SvgIcon= SvgIcons[iconName] as unknown as FC<SVGProps<SVGSVGElement>>;
    return <SvgIcon {...props}/>;
}
const Icon = ({ width, height, theme, iconName, iconType, className, onClick }:IconProps) => {
    const IconWithProps = withProps(iconType,iconName)
    const defaultOnClick = () => {};
    return <IconWithProps
        className={`${iconType} ${iconName} theme-${theme} ${className||''}`}
        width={width || '24px'}
        height={height || '24px'}
        theme={theme}
        onClick={onClick || defaultOnClick}
        
    />
};

export default Icon;
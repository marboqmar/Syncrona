import {FC, SVGProps} from "react";
import Logos from '../../assets/logo';
import {LogoProps, LogoThemes} from './interfaces/logo.interface';

const withProps = (logoTheme: LogoThemes) => ({...props}) => {
    //esto esta buscando los icons en el index por tipo, y de ahi el nombre específico del ícono
    const SvgLogo= Logos[logoTheme] as unknown as FC<SVGProps<SVGSVGElement>>;
    return <SvgLogo {...props}/>;
}

const Logo = ({width,height,logoTheme}:LogoProps) => {
   const LogoWithProps = withProps(logoTheme)
    return <LogoWithProps
        width={width}
        height={height}
        className={`${logoTheme}`}
    />
};

export default Logo;
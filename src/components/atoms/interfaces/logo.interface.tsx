import LogoTheme from "../../../assets/logo";
import { FC, SVGProps } from "react";

export type LogoThemes= keyof typeof LogoTheme;

interface LogoThemeInterface {
    Pastel: FC<SVGProps<SVGSVGElement>>; 
    MixedColors1: FC<SVGProps<SVGSVGElement>>; 
    MixedColors2: FC<SVGProps<SVGSVGElement>>; 
    MixedColors3: FC<SVGProps<SVGSVGElement>>; 
    OrangeTheme: FC<SVGProps<SVGSVGElement>>; 
    PinkTheme: FC<SVGProps<SVGSVGElement>>; 
    YellowTheme: FC<SVGProps<SVGSVGElement>>; 
}

export interface SVGIconsInterface extends Partial<LogoThemeInterface> 
{

}

export interface LogoProps {    
    width?:string;
    height?:string;
    logoTheme: LogoThemes;
}


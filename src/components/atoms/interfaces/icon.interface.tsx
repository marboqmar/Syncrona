import ActionIcons from "../../../assets/icons/action";
import SettingsIcons from "../../../assets/icons/settings";
import SocialIcons from "../../../assets/icons/social";
import NavigationIcons from "../../../assets/icons/navigation";
import { FC, SVGProps } from "react";

export type IconTypes='action'|'navigation'|'settings'|'social';
export type IconNames= keyof typeof ActionIcons 
    | keyof typeof SettingsIcons 
    | keyof typeof SocialIcons 
    | keyof typeof NavigationIcons;

interface ActionIconsInterface {
    AddImage: FC<SVGProps<SVGSVGElement>>;
    AddList: FC<SVGProps<SVGSVGElement>>;
    AddNew: FC<SVGProps<SVGSVGElement>>;
    AddPostIt: FC<SVGProps<SVGSVGElement>>;
    AddText: FC<SVGProps<SVGSVGElement>>;
    AddTransparence: FC<SVGProps<SVGSVGElement>>;
    Add: FC<SVGProps<SVGSVGElement>>;
    Approve: FC<SVGProps<SVGSVGElement>>;
    Attach: FC<SVGProps<SVGSVGElement>>;
    Close: FC<SVGProps<SVGSVGElement>>;
    Draw: FC<SVGProps<SVGSVGElement>>;
    Edit: FC<SVGProps<SVGSVGElement>>;
    Erase: FC<SVGProps<SVGSVGElement>>;
    Fill: FC<SVGProps<SVGSVGElement>>;
    Highlight: FC<SVGProps<SVGSVGElement>>;
    OpenMenu: FC<SVGProps<SVGSVGElement>>;
    Trashcan: FC<SVGProps<SVGSVGElement>>;
    Upload: FC<SVGProps<SVGSVGElement>>;
}

interface SettingsIconsInterface {
    Bell: FC<SVGProps<SVGSVGElement>>;
    Calendar: FC<SVGProps<SVGSVGElement>>;
    Clock: FC<SVGProps<SVGSVGElement>>;
    Equalizer: FC<SVGProps<SVGSVGElement>>;
    ExclamationMark: FC<SVGProps<SVGSVGElement>>;
    LanguageChange: FC<SVGProps<SVGSVGElement>>;
    Love: FC<SVGProps<SVGSVGElement>>;
    Star: FC<SVGProps<SVGSVGElement>>;
    Typing: FC<SVGProps<SVGSVGElement>>;
    User: FC<SVGProps<SVGSVGElement>>;
    Warning: FC<SVGProps<SVGSVGElement>>;
}

interface NavigationIconsInterface {
    Close: FC<SVGProps<SVGSVGElement>>; 
    Home: FC<SVGProps<SVGSVGElement>>; 
    Link: FC<SVGProps<SVGSVGElement>>; 
    Reload: FC<SVGProps<SVGSVGElement>>; 
    LeftArrow2: FC<SVGProps<SVGSVGElement>>; 
    LeftArrow1: FC<SVGProps<SVGSVGElement>>; 
    LeftArrow3: FC<SVGProps<SVGSVGElement>>; 
    RightArrow1: FC<SVGProps<SVGSVGElement>>; 
    RightArrow2: FC<SVGProps<SVGSVGElement>>; 
    RightArrow3: FC<SVGProps<SVGSVGElement>>; 
    UpperArrow1: FC<SVGProps<SVGSVGElement>>; 
    UpperArrow2: FC<SVGProps<SVGSVGElement>>; 
}

interface SocialIconsInterface {
    Twitter: FC<SVGProps<SVGSVGElement>>;  
    LinkedIn: FC<SVGProps<SVGSVGElement>>;  
    Instagram: FC<SVGProps<SVGSVGElement>>;  
}
export interface SVGIconsInterface extends Partial<SocialIconsInterface>,
    Partial<NavigationIconsInterface>,
    Partial<SettingsIconsInterface>,
    Partial<ActionIconsInterface>
{

}
export interface IconProps {    
    className?: string;
    width?:string;
    height?:string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    iconName: IconNames;
    iconType: IconTypes;
    
}


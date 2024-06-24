export type SetSelectedTool = (selectedTool: string) => void;
export type OnClick = () => void;
export type OpenSelectThemeModal = () => void;

export interface TaskTool {
    name: string;
    type: string;
    isDraggable: boolean;
    onClick?: OnClick
}

export interface TaskToolBarProps {
    theme: string;
    selectedTool: string;
    setSelectedTool: SetSelectedTool;
    openSelectThemeModal: OpenSelectThemeModal;
}
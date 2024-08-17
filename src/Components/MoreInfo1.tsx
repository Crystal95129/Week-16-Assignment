import React from 'react';

interface Props{
    children: string;
    color?:"primary" | "secondary" | "success" | "danger";
    onClick: () => void;
}
const MoreInfo1 = ({children, onClick, color}: Props) =>{
    return <button ref="https://travel.usnews.com/Maui_HI/" className={"btn btn-"+color} onClick={onClick}>{children}</button>
};

export default MoreInfo1;  
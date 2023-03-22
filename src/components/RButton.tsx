import React from 'react'

interface props {
    pageUp: () => void
    pageNum: number
}

const RButton: React.FC<props> = (props) => {
    const handl = () => {
        props.pageUp();
        const control: HTMLElement | null = document.querySelector('.control');
        control!.style.background = 'red'
        setTimeout(() => {
            control!.style.background = 'black'
        }, 300)
    }
    return (
        <img onClick={handl} src={require("../img/tv/televisor/right_btn.png")} className="r_btn" />
    )
}

export default RButton
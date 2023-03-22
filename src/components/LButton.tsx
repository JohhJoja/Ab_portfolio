import React from 'react'

interface props {
    pageDown: () => void
    pageNum: number
}

const LButton: React.FC<props> = (props) => {
    const handl = () => {
        const control: HTMLElement | null = document.querySelector('.control');
        control!.style.background = 'red'
        setTimeout(() => {
            control!.style.background = 'black'
        }, 300)
        if (props.pageNum > 0) {
            props.pageDown();
        }
    }
    return (
        <img onClick={handl} src={require("../img/tv/televisor/left_btn.png")} alt="" className="l_btn" />
    )
}

export default LButton
import React, { useState } from 'react'
import ImgItem from '../components/ImgItem'
import LButton from '../components/LButton'
import Plue from '../components/Plue'
import RButton from '../components/RButton'
import './styles/page2.css'

const Page2: React.FC = () => {
    const [items, setItems] = useState<Array<any>>([
        { id: 1, title: 'Пинг-понг' },
        { id: 2, title: 'Магазин кроссовок' },
        { id: 3, title: 'Архитектура' },
    ])
    const [pageNum, setPageNum] = useState<number>(20)
    const pageUp = () => {
        setPageNum(p => p + 1)
    }
    const pageDown = () => {
        setPageNum(p => p - 1)
    }
    return (
        <div className="projects_wrapper">
            <Plue />
            <div className="projects_projects">
                <div className="block">
                    <div className="block_img_wrap">
                        <div className="project_title___">{items[pageNum % items.length].title}</div>
                        <img className="block_img" src={require("../img/tv/televisor/tv1.png")} alt="" />
                        <div className="control"></div>
                        <RButton pageNum={pageNum} pageUp={pageUp} />
                        <LButton pageNum={pageNum} pageDown={pageDown} />
                        <div className="img_cont">
                            <img className="proj_noice" src={require("../img/noice/transl.gif")} alt="" />
                            <ImgItem id={items[pageNum % items.length].id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2
import './styles/preloader.css';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Letter from '../components/Letter';

export const Preloader: React.FC = () => {
    let text: string = `Добро пожаловать на мой сайт! В нем я использовал свои
    навыки владения Photoshop, использовал preloader, gif, animation, transform; React, R-router, TS, TSX и тд. 
    На главной странице вас встретит телевизор с превью проектов, к каждому из которых можно перейти`
    const navigate = useNavigate();

    const control = (e: KeyboardEvent) => {
        navigate('/tv', { replace: true });
        removeEv();
    }
    const removeEv = () => {
        document.removeEventListener('keydown', control)
    }

    setTimeout(() => {
        const letterWrap: HTMLElement | null = document.querySelector('.letterWrapper');
        if (letterWrap) letterWrap.style.display = 'flex';
        document.addEventListener('keydown', control)
    }, 1000)
    setTimeout(() => {
        navigate('/tv', { replace: true });
    }, 10000)


    return (
        <div className="prel_wrapper">
            <Letter text={text} />
            <div className="preloader">
                <div className="pre_loader_text">Loading</div>
                <div className="dots"><span id='d1'>.</span><span id='d2'>.</span><span id='d3'>.</span></div>
            </div>
            <div className="state">
                <div className="state2"></div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import './styles/letter.css'

interface props {
    text: string
}

const Letter: React.FC<props> = (props) => {
    const [arr, setArr] = useState<string>('')
    let q: number = 0;
    const handl = () => {
        let trueText: any[] = props.text.split('')
        let splArr: any[] = [];

        setInterval(() => {
            if (q == 0 || trueText[q - 1]) {
                setArr(splArr.join(''))
                splArr.push(trueText[q])
                q += 1;
            } else return
        }, 10)
        setTimeout(() => {
            const text_2: HTMLElement | null = document.querySelector('.text_2')
            if (text_2) text_2!.style.display = 'block';
        }, 200)
    }
    useEffect(() => {
        handl()
    }, [])

    return (
        <div className='letterWrapper'>
            <div className="textWrap">
                <div className="text">
                    {arr || '***'}
                </div>
            </div>
            <div className="text_2">
                Нажмите любую кнопку, <br /> чтобы продолжить
            </div>
        </div>
    )
}

export default Letter
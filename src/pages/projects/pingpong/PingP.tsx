import React, { useEffect } from 'react'
import { handlPingPong } from '../../../js/pingpongScript'
import './main.css'


const PingP: React.FC = () => {
    useEffect(() => {
        handlPingPong()
    }, [])

    return (
        <div className='pp'>
            <div className="all">
                <div className="game_wrapper">
                    <div className="text3">
                        press W & S
                    </div>
                    <div className="text">
                        0
                    </div>
                    <div className="game">
                        <div className="ball"></div>
                        <div className="padL"></div>
                        <div className="padR"></div>
                    </div>
                    <div className="text2">
                        best score: <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PingP
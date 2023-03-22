import React from 'react'
import CaruselItem from '../components/CaruselItem';
import Intro_Item from '../components/Intro_Item';
import CaruselText from '../components/style/CaruselText';
import cl from '../style/home.module.css'

function Home() {
    let order = 0;
    const caruselArr = [
        { text: 'Brandblack', image: '1' },
        { text: 'Brandblack#2', image: '2' },
        { text: 'Q4 Sports', image: '3' },
        { text: 'In The Lab', image: '4' },
        { text: 'Ektio', image: '5' },
        { text: '361 Degrees', image: '6' },
        { text: 'Xtep', image: '7' },
        { text: 'Crossover Culture', image: '8' },
        { text: 'Stria', image: '9' },
        { text: 'Athletic Propulsion Labs (APL)', image: '10' },
    ]
    const move = (side) => {
        const carusel = document.getElementById('carusel');

        const carWidth = parseFloat(getComputedStyle(carusel).width);

        if (side == 'left') {
            if (order > 0) {
                order--;
            } else order = 9
        } else {
            if (order < 9) {
                order++;
            } else order = 0
        }
        carusel.style.left = `${-carWidth * order}px`
    }

    return (

        <div className={cl.main_info} style={{ position: 'relative' }}>

            <div className={cl.intro}>
                <div className={cl.intro_title}>Акции <p style={{ fontSize: "18px" }}>скидки до 70%</p></div>
                <div className={cl.intro_info_continer}>
                    <Intro_Item id={'adidas1'} imgSrc='adidas/s1.jpg' snikName='ADIDAS Neo 10k' />
                    <Intro_Item id={'adidas2'} imgSrc='adidas/s2.jpg' snikName='ADIDAS Ultra Boost' />
                    <Intro_Item id={'fila3'} imgSrc='fila/s3.jpg' snikName='FILA 96 Low Latest trends OFF' />
                    <Intro_Item id={'nike4'} imgSrc='nike/s4.jpg' snikName='NIKE Air Force 1' />
                    <Intro_Item id={'nike2'} imgSrc='nike/s2.jpg' snikName='NIKE Jordan Air Force 1' />
                    <Intro_Item id={'reebok3'} imgSrc='reebok/s3.jpg' snikName='REEBOK Classic Leather HW BS' />
                </div>
                <p>
                    Приветствуем вас в разделе акции. Тут собраны са-а-амые клевые товары.
                    Многие из них уже заканбчиватся. Успей купить! Но если вы не успели,
                    то не стоит сильно переживать, в нашем каталоге вы сможете найти еще больше
                    товаров. И цена у них - ниже некуда! Заходите сюда каждую субботу
                    и встречайте еще больше ништяков!
                </p>
            </div>

            <CaruselText></CaruselText>
            <div className={cl.title_head_cripto}>
                <div className={cl.title_head_cripto_text}>
                    Обзор нoвинок
                </div>

                <div className={cl.caruselWrapper}>
                    <div className={cl.leftButt} onClick={() => move('left')}>left</div>
                    <div className={cl.rightButt} onClick={() => move('right')}>right</div>
                    <div className={cl.carusel} id='carusel'>
                        {caruselArr.map((item, index) => (
                            <CaruselItem key={item.text} index={index} text={item.text} image={index + 1} />
                        ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Home
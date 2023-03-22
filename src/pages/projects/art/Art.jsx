import React, { useEffect } from 'react'
import { handleArt } from './page_2'
import './css/page_2.css'
import './css/footer__.css'
import './css/footer.css'
import { Link } from 'react-router-dom'

const Art = () => {
    useEffect(() => {
        handleArt();
    }, [])

    return (
        <div>
            <div className="bg_image"></div>
            <div className="main">
                <div className="content_wrapper">
                    <div className="first_part">
                        <div className="headerr">
                            <div className="header_text">architecture <br />by Johh_Joja
                            </div>
                            <div className="menu_wrapper">
                                <div className="menu_circle"></div>
                                <div className="menu_wrap_wrap_">
                                    <div className="menu_head">Координация по сайту</div>
                                    <div className="menu_li menu_lili"><a href="#q">Вступление</a></div>
                                    <div className="menu_li menu_lili"><a href="#z">Исторические периоды</a></div>
                                    <div className="menu_li">
                                        <a href="#w">Мезолит в Японии</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#e">Неолит в Японии - период Яёй</a>
                                    </div>
                                    <div className="menu_li menu_lili">
                                        <a href="#y">Стили мировой архитектуры</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#u">Модерн</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#i">Экспрессионизм</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#o">Модернизм</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#p">Конструктивизм</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#a">Органическая архитектура</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#s">Интернациональный стиль</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#d">Постмодернизм</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#f">Хай-тек</a>
                                    </div>
                                    <div className="menu_li">
                                        <a href="#g">Деконструктивизм</a>
                                    </div>
                                    <div className="menu_li">
                                        <Link to='/tv'>Вернуться к проектам</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gal_wrapper">
                            <div className="gal">
                                <div className="gal_text">Как менялась архитектурная мода на протяжении столетий</div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                                <div className="img_item"></div>
                            </div>
                        </div>
                    </div>
                    <div className="second_part">
                        <div className="menu_wrapper">
                            <div className="menu_wrap_wrap">
                                <a name="q"></a>
                                <div className="header_2">
                                    <span className="m_s_y">История архитектуры</span> — наука и академическая дисциплина,
                                    исследующая функциональное, конструктивное и эстетическое развитие архитектуры во времени и
                                    пространстве в соответствии с социальными потребностями
                                    и научно-техническими условиями.
                                    <br /> История архитектуры охватывает изучение закономерностей развития архитектуры в связи с
                                    общими закономерностями исторического процесса культуры и общества
                                </div>
                                <a name="z"></a>
                                <div className="r" style={{ position: 'relative', width: '100vw', left: '50%', transform: 'translateX(-50%)' }}>
                                    <div className="header_2 m_d_r two">Исторические периоды</div>
                                    <div className="header_2 m_d_r">Исторические периоды</div>
                                    <div className="header_2 m_d_r three">Исторические периоды</div>
                                </div>
                                <a name="w"></a>
                                <div className="header_3">
                                    <div className="m_d_r">Мезолит в Японии</div>
                                </div>
                                <div className="sec_p_content">
                                    В течение всего периода Дзёмон жители Японского архипелага жили в землянках и полуземлянках,
                                    традиционных жилищах докерамической эпохи. Жильё было погружено в землю, имело земляные
                                    стены и пол, а также каркас из деревянных столбов, который поддерживал
                                    крышу из шкур животных, травы и хвороста. Землянки периода Дзёмон различались по регионам.

                                    <br /><span className="m_s_y">Жилища начала периода Дзёмон имели простую конструкцию. Они были
                                        прямоугольные или круглые в плане.</span> Центром жилья был очаг, который был нескольких
                                    типов: земляным, горшковым и каменным. Первый
                                    изготовляли путём простого выкапывания неглубокой ямки в полу, в которой жгли хворост и
                                    дрова; второй мастерили из нижней части горшка, который вкапывали в пол; третий сооружали из
                                    гальки или маленьких камней, которыми обкладывалось
                                    место для костра. <span className="m_s_y">Начиная со среднего Дзёмона они
                                        имели сложную конструкцию</span>, которая предусматривала
                                    <span className="m_s_y">нескольких очагов в одном доме.</span> в одном доме.
                                    <div className="img_name">Современная реконструкция древнейших японских построек</div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/140913_Sannai-Maruyama_site_Aomori_Japan01bs6bs6.jpg/1024px-140913_Sannai-Maruyama_site_Aomori_Japan01bs6bs6.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/SannaiCommun.jpg/1024px-SannaiCommun.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/SannaiPiloti.jpg/1024px-SannaiPiloti.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a name="e"></a>
                                <div className="header_3">Неолит в Японии - период Яёй</div>

                                <div className="sec_p_content">
                                    Самые ранние стоянки культуры Яёй найдены в Западной Японии на островах Кюсю и Хонсю.
                                    Классический пример — городище Йосиногари (совр. префектура Сага). Археологи находят много
                                    укреплённых поселений с богатым археологическим материалом — керамическая
                                    посуда, бронзовые ритуальные изделия (украшения и колокольчики дотаку) и разнообразное
                                    металлическое оружие (мечи, наконечники стрел, наконечники гэ и копий). Историки считают,
                                    что перераспределение прибавочного продукта, полученного
                                    благодаря высоким для первобытного общества урожаям риса, привело к социальной стратификации
                                    Японского архипелага. Среди общинников выделились богатые слои шаманов и военных. <span
                                        className="m_s_y">Появились первые рабы.</span>
                                    <div className="img_name">Постройки неолита</div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Pfahlbauten_Unteruhldingen_2005_05.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Skara_Brae_house_1_4.jpg/1024px-Skara_Brae_house_1_4.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Loch_tay_crannog_02.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a name="y"></a>
                                <div className="r" style={{ position: 'relative', width: '100vw', left: '50%', transform: 'translateX(-50%)' }}>
                                    <div className="header_2 m_d_r two">Стили мировой архитектуры</div>
                                    <div className="header_2 m_d_r">Стили мировой архитектуры</div>
                                    <div className="header_2 m_d_r three">Стили мировой архитектуры</div>
                                </div>
                                <a name="u"></a>
                                <div className="header_3">Модерн</div>
                                <div className="sec_p_content">
                                    Aрхитектуру модерна отличает отказ от прямых линий и углов в пользу более естественных,
                                    «природных» линий, использование новых технологий (металл, стекло). <br /> Как и ряд других
                                    стилей, архитектуру модерна отличает также стремление
                                    к созданию одновременно и эстетически красивых, и функциональных зданий. Большое внимание
                                    уделялось не только внешнему виду зданий, но и интерьеру, который тщательно прорабатывался.
                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/1024px-Sagrada_Familia_01.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wien_Kirche_am_Steinhof.jpg/1024px-Wien_Kirche_am_Steinhof.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/ru/e/e3/Дом_со_слонами.jpg" alt=""
                                            />
                                        </div>
                                    </div>
                                </div>

                                <a name="i"></a>
                                <div className="header_3">Экспрессионизм</div>

                                <div className="sec_p_content">
                                    Экспрессионизм — архитектура Первой мировой войны и 1920-х годов в Германии («кирпичный
                                    экспрессионизм»), Нидерландах (амстердамская школа) и сопредельных странах, для которой
                                    свойственно искажение традиционных архитектурных форм
                                    <span className="m_s_y">
                                        с целью достижения максимального эмоционального воздействия на зрителя
                                    </span>. Предпочтение нередко отдаётся архитектурным формам, вызывающим в памяти природные
                                    ландшафты (горы, скалы, пещеры, сталактиты и т. п.).
                                    <br />Ввиду тяжёлого финансового состояния Веймарской республики наиболее смелые проекты
                                    сооружений в духе экспрессионизма остались на бумаге.
                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dornach_-_Goetheanum_-_Westtreppenhaus6.jpg/1024px-Dornach_-_Goetheanum_-_Westtreppenhaus6.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Pv_jensen-klint_05_grundtvig_memorial_church_1913-1940.jpg/800px-Pv_jensen-klint_05_grundtvig_memorial_church_1913-1940.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Amsterdam_Het_Schip_007.JPG/1024px-Amsterdam_Het_Schip_007.JPG"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="o"></a>
                                <div className="header_3">Модернизм</div>

                                <div className="sec_p_content">
                                    Архитектурный модернизм (фр. modernisme, от фр. moderne — новейший, современный; «англ.
                                    modern» — современный, новый) — движение в архитектуре двадцатого века, переломное по
                                    содержанию, связанное с решительным обновлением форм и конструкций, отказом от
                                    стилей прошлого. Охватывает период с начала 1900-х годов по 1970—80-е годы (в Европе), когда
                                    в архитектуре возникли новые тенденции. <br /> Развитие промышленности в XIX веке открыло<span
                                        className="m_s_y">
                                        возможность масштабного
                                        применения стали, бетона и стекла.
                                    </span> Использование стального или железобетонного каркаса означает отделение несущего
                                    остова здания от ограждающих конструкций.
                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bauhaus.JPG/1024px-Bauhaus.JPG"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Weissenhof_Corbusier_03.jpg/1024px-Weissenhof_Corbusier_03.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://i.pinimg.com/originals/35/61/c5/3561c5abba79a80c0c3466b1c2deb893.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a name="p"></a>

                                <div className="header_3">Конструктивизм</div>

                                <div className="sec_p_content">
                                    Конструктивизм — советский авангардистский метод (стиль, направление) в изобразительном
                                    искусстве, архитектуре, фотографии и декоративно-прикладном искусстве, получивший развитие в
                                    1920 — нач. 1930 годов.
                                    <br /> Характеризуется строгостью, геометризмом, лаконичностью форм и монолитностью внешнего
                                    облика. В 1924 году была создана официальная творческая организация конструктивистов — ОСА,
                                    представители которой разработали так называемый
                                    функциональный метод проектирования.
                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Kharkov_Freedom_Square.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Zuev_Workers%27_Club_in_MSK.jpg/1024px-Zuev_Workers%27_Club_in_MSK.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Moscow_Vozdvizhenka6_7978.jpg/1024px-Moscow_Vozdvizhenka6_7978.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="a"></a>
                                <div className="header_3">Органическая архитектура</div>

                                <div className="sec_p_content">
                                    <span className="m_s_y">Органическая архитектура — течение архитектурной мысли</span>, впервые
                                    сформулированное Луисом Салливеном на основе положений эволюционной биологии в 1890-х годах
                                    и нашедшее наиболее полное воплощение в
                                    трудах его последователя Фрэнка Ллойда Райта в 1920—1950 годах.
                                    <br /> В противоположность функционализму, органическая архитектура видит свою задачу в
                                    раскрытии свойств естественных материалов и органичном взаимодействии здания с окружающей
                                    средой.

                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/FallingwaterWright.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alvar_Aalto_Library_Vyborg3.jpg/1024px-Alvar_Aalto_Library_Vyborg3.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://thearchitecturedesigns.com/wp-content/uploads/2019/07/Organic-Architecture-1.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="s"></a>
                                <div className="header_3">Интернациональный стиль</div>

                                <div className="sec_p_content">
                                    Интернациональный стиль получил распространение в 1930—1960 годах и был основан на идеях
                                    модернизма.
                                    <br /> Инициаторами направления были архитекторы, использовавшие принципы функционализма:
                                    например, Вальтер Гропиус, Петер Беренс и Ханс Хопп, а также Ле Корбюзье (Франция), Мис ван
                                    дер Роэ (Германия — США), Фрэнк Ллойд Райт
                                    (США) Якобус Ауд (Нидерланды), Алвар Аалто (Финляндия)
                                    <div className="img_name">Интернациональный стиль</div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/ONU21.jpg" alt=""
                                            />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Placevillemarie.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Seagrambuilding.jpg/800px-Seagrambuilding.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="d"></a>
                                <div className="header_3">Постмодернизм</div>

                                <div className="sec_p_content">
                                    Архитектурный постмодернизм зародился в США как протест против модернизма. Основой послужил
                                    язык коммерческой рекламы, который несёт информацию для обывателей, работает на задачи
                                    постиндустриального общества. В Европе постмодернизм (в том числе и архитектурный
                                    постмодернизм) возник в результате изменения отношения к историческому наследию.
                                    <br /> Точкой отсчёта стала монография Роберта Вентури «Сложность и противоречия в
                                    архитектуре» (1966). В Европе биеннале, посвящённое постмодернизму.
                                    <br /> <span className="m_s_y">Отрицание модернизма.</span>

                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/VVenturi_House_Highsmith.jpeg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Portland_Building_1982.jpg/800px-Portland_Building_1982.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Oneppgplace.jpg/800px-Oneppgplace.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="f"></a>
                                <div className="header_3">Хай-тек</div>

                                <div className="sec_p_content">
                                    Стиль хай-тек представляет собой символическое отражение века «высоких технологий».
                                    Происходит радикальное обновление языка архитектуры под влиянием технического прогресса.
                                    <br /> <span className="m_s_y">Для стиля хай-тек характерно: </span><br />
                                    <ul>
                                        <li>образ здания-машины;</li>
                                        <li>введение символических форм в промышленность и технологию;</li>
                                        <li>создание большого количества индивидуальных объектов, использование работающих
                                            технических устройств как знаков;</li>
                                        <li>вынос коммуникаций и конструкций на фасад, структурные плиты, металлические арки,
                                            купола, висячие и подвесные системы;</li>
                                        <li>полностью стеклянные фасады и сочетание светопрозрачных элементов с непрозрачными;
                                        </li>
                                        <li>функциональность пространства; залы, атриумы, имеющие большие площади и объёмы;</li>
                                        <li>движущиеся конструкции: эскалаторы, траволаторы, панорамные лифты, раздвижные крыши.
                                        </li>
                                    </ul>
                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">

                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HK_HSBC_Main_Building_2008.jpg/800px-HK_HSBC_Main_Building_2008.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Lloyds_building_taken_2011.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Lloyd%27s_building_interior.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a name="g"></a>
                                <div className="header_3">Деконструктивизм</div>

                                <div className="sec_p_content">
                                    Деконструктивизм возник как литературно-критическое направление Йельской школы в 1979 и
                                    позже был распространён на сферы науки, религии, искусства. В 1988 году в Нью-Йорке
                                    проведена выставка «Архитектурный деконструктивизм» и провозглашён манифест
                                    деконструктивистов.
                                    Основателем направления стал Питер Айзенман, участниками стали Фрэнк Гери, Даниэль
                                    Либескинд, Рем Коолхаас, Заха Хадид, Бернар Чуми, группа Coop Himmelb(l)au. В архитектуре
                                    декона в значительной мере используется опыт российского
                                    авангарда 1920-х годов.

                                    <div className="img_name"></div>
                                    <div className="content_img_wrapper">

                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OSU_Wexner_Center.JPG/1024px-OSU_Wexner_Center.JPG"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Image-Disney_Concert_Hall_by_Carol_Highsmith_edit.jpg/1024px-Image-Disney_Concert_Hall_by_Carol_Highsmith_edit.jpg"
                                                alt="" />
                                        </div>
                                        <div className="cintent_img_item">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dresden-Kristallpalast-nigh.jpg/1024px-Dresden-Kristallpalast-nigh.jpg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="foot_links">
                        <div className="links_item">
                            <div className="link_img">
                                <a href="https://github.com/JohhJoja" target="_blank"><img src={require("./page_2/footer/y.png")} alt="" /></a>
                            </div>
                            <div className="link_name">YouTube</div>
                        </div>
                        <div className="links_item">
                            <div className="link_img">
                                <a href="https://github.com/JohhJoja" target="_blank"><img src={require("./page_2/footer/f.png")} alt="" /></a>
                            </div>
                            <div className="link_name">GitHub</div>
                        </div>
                        <div className="links_item">
                            <div className="link_img">
                                <a href="https://github.com/JohhJoja" target="_blank"><img src={require("./page_2/footer/p.png")} alt="" /></a>
                            </div>
                            <div className="link_name">Pinterest</div>
                        </div>
                        <div className="links_item">
                            <div className="link_img">
                                <a href="https://github.com/JohhJoja" target="_blank"><img src={require("./page_2/footer/t.png")} alt="" /></a>
                            </div>
                            <div className="link_name">Facebook</div>
                        </div>
                        <div className="links_item">
                            <div className="link_img">
                                <a href="https://github.com/JohhJoja" target="_blank"><img src={require("./page_2/footer/i.png")} alt="" /></a>
                            </div>
                            <div className="link_name">Instagram</div>
                        </div>
                    </div>
                    <div className="footer_discr">
                        You can find more beautiful things on our website
                    </div>
                    <div className="footer_adres">
                        <div className="foot_mail">08022002dimaeliseew@gmail.com</div>
                        <div className="foot_num">+375(29)120-13-34</div>
                        <div className="foot_adres_adres">г. Минск, ул. Л. Беды 4, 9й этаж</div>
                    </div>
                </div>
                <script src="JS/page_2.js "></script>
            </div>
        </div>
    )
}

export default Art
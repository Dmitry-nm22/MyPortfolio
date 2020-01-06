import React from 'react';
import styles from './Services.module.css';
import Servic from "./Servic";
import map from '../img/map.png'
import pencil  from '../img/pencil.png'
import site from '../img/site.png'



class  Services extends React.Component {

    firstH3={
        color: '#008aff'
    }
    secondH3={
        color: '#333333'
    }
    thirdH3={
        color: '#d4d4d4'
    }


    firstCircle={
        'background-color': '#008aff'
    }
    secondCircle={
        'background-color': '#333333'
    }
    thirdCircle={
        'background-color': '#d4d4d4'
    }

    firstTextForService = 'Надежная контентная стратегия необходима для любой эффективной кампании.' +
        ' Определите цели проекта и потенциальные проблемы. ' +
        'Убедитесь, что первый шаг правильный, согласовав цели и бизнес-процессы.';

    secondTextForService = 'Успешные проекты используют дизайн как актив. ' +
        'Информационный и визуальный дизайн работают вместе, чтобы создать уникальный' +
        'и эффективный пользовательский опыт. Брендинг, фотография, иллюстрация, интерфейс и веб-дизайн'

    thirdTextForService = 'Чистый код и разметка обеспечивают быструю и точную загрузку сайтов.' +
        ' Адаптивный дизайн обеспечивает правильное отображение веб-сайтов на разных устройствах.' +
        ' HTML5, CSS3, JavaScript, React и Redux.'

    render = () => {
        return (
            <div className={styles.services}>
                <div className={styles.header}>
                    <span className={styles.title}>SERVICES</span>
                    <div className={styles.inner} >
                        <Servic img={map}
                                colorH3={this.firstH3}
                                title={'НАПРАВЛЕНИЕ'}
                                colorCircle={this.firstCircle}
                                text={this.firstTextForService}
                        />
                        <Servic img={pencil}
                                colorH3={this.secondH3}
                                title={'ДИЗАЙН'}
                                colorCircle={this.secondCircle}
                                text={this.secondTextForService}
                        />
                        <Servic img={site}
                                colorH3={this.thirdH3}
                                title={'РАЗВИТИЕ'}
                                colorCircle={this.thirdCircle}
                                text={this.thirdTextForService}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;

import React from 'react';
import styles from './Servic.module.css';




class  Servic extends React.Component {
    render = () => {
        return (
            <div className={styles.servic}>
                <div style={this.props.colorCircle} className={styles.circle}>
                    <img src={this.props.img} alt="photo"/>
                </div>
                <h3 style={this.props.colorH3}>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Servic;

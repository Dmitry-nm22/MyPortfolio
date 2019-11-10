import React from 'react';
import styles from './FooterMenu.module.css';

class  FooterMenu extends React.Component {
    render = () => {
        return (
            <div className={styles.list}>
                <a href={this.props.href}><i className={this.props.className}></i></a>
            </div>

        );
    }
}

export default FooterMenu;

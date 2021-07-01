import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component{
    static propTypes ={
       subtitle:PropTypes.string,
    }
    render(){
        return(
            <section className={styles.component}>
              {this.props.subtitle}
            </section>
        )
    }

}

export default Card;
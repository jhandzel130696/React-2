import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component{
    static propTypes ={
      subtitle:PropTypes.string,
    }
    render(){
      const {subtitle}= this.props;
      return(
        <section className={styles.component}>
          {subtitle}
        </section>
      );
    }

}

export default Card;
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component{
   
    static propTypes ={
      subtitle: PropTypes.string,
      cards: PropTypes.array,
      title: PropTypes.node,
      icon: PropTypes.node,
      addCard: PropTypes.func,
       
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render(){
      const {icon,title,cards,addCard}=this.props;
      return(
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}  
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
          <div className={styles.title}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
 
          </div>
          
          <div className = {styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      );
    }

}

export default Column;
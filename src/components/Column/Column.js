import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
//import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component{
   
    static propTypes ={
      subtitle: PropTypes.string,
      cards: PropTypes.array,
      titleOne: PropTypes.node,
      icon: PropTypes.node,
       
    }


    render(){
      const {icon,titleOne}=this.props;
      return(
        <section className={styles.component}>
          <h3 className={styles.title}>
            {titleOne}  
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
          {/*<div className={styles.title}>
            {this.state.cards.map(({key,title,...cardsProps}) => (
              <Card key={key} subtitle={title} { ...cardsProps} />
            ))}
 
          </div>
          <div className = {styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div>*/}
        </section>
      );
    }

}

export default Column;
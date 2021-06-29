import React from 'react';
import styles from './App.scss';
import List from '../List/List';
class App extends React.Component {
  render() {
    return (
      
        <main className={styles.component}>
        <h1 className ={styles.title}>My first React a</h1>
        <h2 className = {styles.subtitle}>Hello World</h2>
        <List title={['Things to do',<sup key='1'>soon!</sup>]} 
              img='https://i.postimg.cc/c1tbWtjn/pexels-george-harrell-4157471.jpg'>
              
        </List>
        
        
      </main>
    )
  }
}

export default App;

import {connect} from 'react-redux';
import Column from './Column';
import getCardsForList from '../../redux/cardsRedux';
import createActionAddCard from '../../redux/cardsRedux';

//export const getCardsForList = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);


const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps,mapDispatchToProps)(Column);
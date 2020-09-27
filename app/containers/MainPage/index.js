import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectBundles, makeSelectBasket } from './selectors';
import reducer from './reducer';
import saga from './saga';
import MainPage from './MainPage';

import { updateBasket } from './actions';

const mapStateToProps = createStructuredSelector({
  bundles: makeSelectBundles(),
  basket: makeSelectBasket()
});


const mapDispatchToProps = (dispatch) => ({
  updateBasket: (payload) => dispatch(updateBasket(payload))
});

const withReducer = injectReducer({ key: 'main', reducer });
const withSaga = injectSaga({ key: 'main', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(MainPage);

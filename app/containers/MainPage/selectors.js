import { createSelector } from 'reselect';

const selectMain = (state) => state.main;

const makeSelectBundles = () => createSelector(
  selectMain,
  (mainState) => mainState.bundles
);


const makeSelectBasket = () => createSelector(
  selectMain,
  (mainState) => mainState.basket
);

export {
  selectMain,
  makeSelectBundles,
  makeSelectBasket
};

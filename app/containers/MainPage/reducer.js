import {
  UPDATE_BASKET
} from './constants';

const basket = JSON.parse(localStorage.getItem('basket') || '[]');


// The initial state of the App
const initialState = {
  bundles: [{
    id: 1,
    title: 'Family Bundle',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
    price: '20',
    products: [{
      title: 'Margherita1',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita2',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita3',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    },
    {
      title: 'Margherita4',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }
    ]
  }, {
    id: 2,
    title: 'Meal Deal X1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
    price: '15',
    products: [{
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    },
    {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }
    ]
  }, {
    id: 3,
    title: 'Meal Deal X2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
    price: '30',
    products: [{
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }, {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    },
    {
      title: 'Margherita',
      description: 'Tomato, mozzarella, basil',
      metadata: 'popular'
    }
    ]
  }],
  basket: basket
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BASKET: return { ...state, basket: action.payload };
    default:
      return state;
  }
}

export default reducer;

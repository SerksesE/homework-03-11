const initialState = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }


  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }
  
  export default reducer



// const reducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case 'ADD_PIZZA':
//       return state.concat({...action.payload}) // [...state, action.payload]
//     default:
//       return state
//   }
// }

// export default reducer
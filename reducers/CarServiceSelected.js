const initialState = {
    selectedServices:[]
  };
export default function CarServiceSelected(state=initialState, action) {
    switch (action.type){
      case "BOOK_SERVICE":
        return {
          ...state,
          selectedServices:action.payload
        }
      default:
        return state
    }
  }
const initialState = {
  dateTime:null
};

export default function DateSelected(state=initialState, action) {
  switch (action.type){
    case "DATE_DISPLAY":
      return {
        ...state,
        dateTime:action.payload
      }
    default:
      return state
  }
}
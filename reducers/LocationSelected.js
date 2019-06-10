const initialState = {
    latitude: 0,
    longitude: 0,
    address: '',
};

export default function LocationSelected(state=initialState, action) {
  switch (action.type){
    case "LOCATION_DISPLAY":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
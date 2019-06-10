const initialState = {
    flagValue:false,
    resetVal: false
  };
export default function LoginCheck(state=initialState, action) {
    switch (action.type){
      case "LOGIN_CHECK":
        return {
          ...state,
          flagValue:action.payload
        };
        case "RESET": 
        return {
          ...state,
          resetVal:!state.resetVal
        }
      default:
        return state
    }
  }
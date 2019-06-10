const initialState = {
    MerchantInformation:[]
  };
export default function MerchantInfo(state=initialState, action) {
    switch (action.type){
      case "MERCHANT_INFO":
        return {
          ...state,
          MerchantInformation:action.payload
        }
      default:
        return state
    }
  }
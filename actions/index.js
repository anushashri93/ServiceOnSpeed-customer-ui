export function carServiceSelectedAction(array){
    return  {type: "BOOK_SERVICE",payload:array}
}

export function vehicleTypeSelectedAction(index){
    return  {type: "VEHICLE_SELECT",payload:index}
}

export function dateSelectedAction(date){
    return {type:"DATE_DISPLAY",payload:date}
}

export function locationSelectedAction(location){
    return {type:"LOCATION_DISPLAY",payload:location}
}
export function loginCheckAction(flag){
    return {type:"LOGIN_CHECK",payload:flag}
}
export function merchantInfoAction(merchantInfoArray){
    return {type:"MERCHANT_INFO",payload:merchantInfoArray}
}
export function resetSelection(resetInitial){
return {type:"RESET", payload:resetInitial}
}
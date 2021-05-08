import {isValidElement} from "../../../MyApp/Utils/helpers";
import _ from 'lodash'

export const getSearchData = (searchValue , dataArray) => {
    let result = []
    if(isValidElement(searchValue) && isValidElement(dataArray) && dataArray.length > 0) {
        dataArray.forEach( data => {
            if( _.includes(data.login , searchValue)){
                result.push(data)
            }
        })
        return result
    }
    else {
        return  dataArray
    }
}

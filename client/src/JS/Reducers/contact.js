
import {FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS} from '../ActionTypes/contact'

const initialState= {
    listContacts: [],
    errors: null,
    load: false
}

const contactReducers= (state= initialState,{type, payload} )=>{
    switch (type) {
        case LOAD_CONTACTS: return {...state, load:true}
        case GET_CONTACTS: return {...state, load:false, listContacts: payload.listContacts}
        case FAIL_CONTACTS: return {...state, load: false, errors: payload}
            
            
    
        default:
            return state
    }
}

export default contactReducers
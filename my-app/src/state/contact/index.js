const initialState = {
    contact: 
    {
        Name: 'Test',
        Email: 'Testyan',
        Subject: 'testic',
        Message: 'Lorem ipsum dolor sit amet.'
    },
    store:0,
    love:0
}


const ContactReducer = (state = initialState, action) => {
    // console.log(action, 'AuthReducer')

    switch (action.type) {
        case 'SET_CONTACT_MESSIJ': {
//console.log(state,'state');
            return {...state, contact: action.payload }
           
 
        }
        case 'SET_STORE':{
            return {...state,store: state.store+ action.payload}
        }
        case 'SET_LOVE':{
            return {...state,love: state.love+action.payload}
        }
        default:
            return state
    }
}


export default ContactReducer
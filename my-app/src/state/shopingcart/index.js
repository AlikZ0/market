const initialState = {
    contact: 
    {
        Name: 'Test',
        Email: 'Testyan',
        Subject: 'testic',
        Message: 'Lorem ipsum dolor sit amet.'
    },
    contect:0
}

const ContactReducer = (state = initialState, action) => {
   // console.log(action, 'AuthReducer')
   
 //console.log(action,"321");

    switch (action.type) {
        case 'SET_CONTACT_MESSIJ': {
//console.log(state,'state');
            return {...state, contact: action.payload }
           
 
        }
        case 'Shoping_Cart':{
            return {...state,contect: state.contect+action.payload}
        }
        default:
            return state
    }
}


export default ContactReducer
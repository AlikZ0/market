const initialState = {
    token: ''
  }
  
  
  const ContactReducer = (state = initialState, action) => {
    console.log(action, 'AuthReducer')
  
    switch (action.type) {
      case 'SET_TOKEN': {
  
      return   {token:action.payload}
  
      }
      default:
        return state
    }
  }
  
  
  export default ContactReducer
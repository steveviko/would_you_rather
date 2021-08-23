import { INIT_AUTHED_USER } from "../actions/authedUser";


export  function authedUser(state = null, action){
  switch (action.type) {
  case INIT_AUTHED_USER :
    return action.id
  
  default:
    return state
  }
}


export default authedUser
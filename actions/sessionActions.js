

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// нужно реорганизовать и упростить структуру logIn

export function loginSuccess(params){
    console.log(params)
    return {
      type: LOG_IN,
      payload: {
            name: params.userName,
      }}
  }

  export function loginFailure(){
      
    return {
      type: LOG_IN_FAILURE,
        payload: {
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        error: true,
    }
  }


  export function logOut(){
    return {
      type: LOG_OUT,
    }
  }

export function logIn(params) {

  return dispatch => {
    if (params) {
        console.log(params);
         dispatch(loginSuccess(params));
    } else {
      dispatch( () => loginFailure())
    }
  }
}

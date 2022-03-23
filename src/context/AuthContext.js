import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        //api request with email and password
        //if we sign up modify our state and say we are authenticated
        // if signup fails we need to send an error message
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //ry to signin
        //handle success by updating state
        //handle failure with error message
    };
};

const signout = (dispatch) => {
    return () => {
        //signout
    };
};

export const { Provider, Context } = createDataContext (
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false }
);
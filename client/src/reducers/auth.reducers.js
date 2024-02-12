import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        userName: "",
        email: ""
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ""
};

export default (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticate: true,
                authenticating: false,
                loading: false,
                error: null,
                message: "Login successful" // You can customize this message
            };
            break;
    }

    return state;
};

import { 
    SET_FORM_MESSAGE
} from "./actions";

export const setFormMessage = (payload: string) => ({
    type: SET_FORM_MESSAGE,
    payload: payload,
});

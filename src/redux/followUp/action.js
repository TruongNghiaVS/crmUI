export const SET_URL_DETAIL = "SET_URL_DETAIL";

export const setUrlDetail = urlDetail => dispatch => {
    dispatch({
        type: SET_URL_DETAIL,
        payload: urlDetail
    })
}
export const userLoading = (data) => {
    return { type: "USER_LOADING", payload : data}
}

export const userSuccess = async (data) => {
    return { type: "USER_SUCCESS", payload : data}
}

export const userError = (data) => {
    return { type: "USER_ERROR", payload : data}
}

export const userADD = (data) => {
    return { type: "USER_ADD", payload: data}
}

export const userDELETE = () => {
    return { type: "USER_DELETE"}
}
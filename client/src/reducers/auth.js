const authReducer = (state= {data:null}, actions) => {
    switch (actions.type){
        case 'AUTH':
            return state
        default:
            return state
    }
}

export default authReducer
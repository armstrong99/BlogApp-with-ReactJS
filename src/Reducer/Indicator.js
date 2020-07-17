const IndicatorReducer = (state = [], {type, load}) => {
    switch (type) {
             
        case 'INFORM_START_UI': return [...load]
        
        case 'CONTENT_ERROR': return [...load]

        case 'FETCH_DONE': return [...load]
        
        default:  return state
    }
}

export default IndicatorReducer
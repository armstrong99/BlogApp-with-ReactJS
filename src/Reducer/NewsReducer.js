const NewsReducer = (state = [], {type, load}) => {
    switch (type) {
             
        case 'INFORM_END_UI': return [...load] 
        
    
        default:  return state
    }
}

export default NewsReducer
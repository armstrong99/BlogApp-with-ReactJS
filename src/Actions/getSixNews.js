
export const startNow = () => ({
    type: 'INFORM_START_UI',
    load: [{isFetching: true}]
})
export const contentArrive = (data) => ({
    type: 'INFORM_END_UI',
    load: data
})

export const contentError = () => ({
    type: 'CONTENT_ERROR',
    load: [{isFetching: false}]
})
export const indicateDone = () => ({
    type: 'FETCH_DONE',
    load: [{isFetching: 'done'}]
})

 

export const getSixNews = (pageNo = 1) => {

    localStorage.setItem('countLong', pageNo)
   const api = `https://epower.ng/wp-json/wp/v2/posts?page=${pageNo}&per_page=6`
    
   return async dispatch => {
       dispatch(startNow())
       try {
           let res = await fetch(api)

          let ans = await res.json()
          
          // console.log(ans)
          
            dispatch(contentArrive(ans))
            dispatch(indicateDone())
             
        } 
        catch (error) {
            dispatch(contentError())
        }
   }
    

}
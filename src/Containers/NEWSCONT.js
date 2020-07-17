import { connect } from 'react-redux';
import NewsCard from '../Components/NewsCompo'
import {getSixNews } from '../Actions/getSixNews'
import * as imgH from '../Assets/Images/knowAI.jpg'

const mapStateToProps = ({AllPEGNEWS}) =>{
  if(Array.isArray(AllPEGNEWS) && AllPEGNEWS.length > 0 ) {
 
 return {
     AllNews: AllPEGNEWS.map(val => {

        const {featured_image, slug, title, excerpt }  = val
        console.log(slug)
          return  {
              image:  featured_image ? featured_image : imgH,
              slug: slug ? slug : 'nop',
              title: title['rendered'] ? title['rendered'] : 'Title',
              excerpt: excerpt['rendered'] ? excerpt['rendered'] : 'news'
    
          }
        
        })
 }
  

  }
  
}

const mapDispatchToProps = dispatch => {
    return {
        getSixNews: (pageNo) => dispatch(getSixNews(pageNo)),
         
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
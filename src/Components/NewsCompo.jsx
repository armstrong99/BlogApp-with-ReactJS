import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components'
import parse from 'html-react-parser';
import history from '../history'
import { connect } from 'react-redux';
const CAARD = keyframes`
from{
    opacity: 0
}

to{
    opacity: 1
}
`
const CONTAINER = styled.section`
@media screen and (max-width: 48rem) {
flex-flow: column;
}
@media screen and (min-width: 48rem) {
display: flex;
background: none;
flex-wrap: wrap;
align-content: space-between;
justify-content: space-around;
 }
`
const IMG = styled.img`
height: 85%;
width: 100%;
`
const CURSOR = styled.button`
background: white;
    font-size: 1.5rem;
    color: #330033;
    padding: 1rem;
    border-radius: 1rem;
    width: fit-content;
    border: none;
    outline: none;
    /* border-width: .2rem; */
    font-weight: 600;
    margin: 2rem 2rem 0rem;
`
const CARD = styled.article`

animation: ${CAARD} 1.5s ease-in-out;

&:hover {
border: 2px blue solid;
transition: .5s;
cursor: pointer;
padding: .4rem

}
@media screen and (min-width: 48rem) {
    width: 25%;
    margin: 0;
}
@media screen and (min-width: 48rem) {
    
    background: white;
        padding-bottom: 1rem;
        margin: .5rem;
        border-radius: .5rem;
}

`
const CAN = styled.figure`
margin: 0;

`
const TITLE = styled.figcaption`
font-size: 2.5rem;
padding: .5rem;
font-weight: bolder;
`
const EXCERPT = styled.p`
padding: .5rem;
    text-align: justify;
    font-size: large;
    line-height: 2rem;
`


const NewsCard = ({getSixNews, AllNews = [], status}) => {
    let _initCount = localStorage.getItem('countLong') ? Number(localStorage.getItem('countLong')) : 1
      
    let [pageNo, setPN] = useState(_initCount)
    let [fetchTask, setFT] = useState('')
    
    
    useEffect(() => {
         getSixNews(pageNo)
        setFT('fetchStart')
    },[getSixNews, pageNo])

    
const handleViewChanger = (slug) => {
     history.push(`https://www.epower.ng/${slug}`)
 }

    if(AllNews.length > 0 && Array.isArray(AllNews)) {

    return ( 
 
        <>
         <CURSOR onClick={() => setPN(pageNo + 1)}>
            Next page({pageNo + 1})
        </CURSOR> <span style={status.isFetching === 'done' ? {display: 'none'} : {display: 'inline'} }>{status.isFetching ? 'Loading news, pls wait... ': 'An error occured pls refresh'}</span>
        <p style={pageNo === 1 ? {display: 'none'} : {color: '#ffffffc4', marginLeft:'1rem'}} onClick={() => setPN(pageNo - 1)}> {'< go back'}</p>
        <CONTAINER>

        {
            AllNews.map((news, i) => 
                <CARD 
                onClick={() => handleViewChanger(news.slug)}
                style={i > 0 ? {marginTop: '3.5rem'}: {marginTop: '7rem'}}>
                <CAN>
                    <IMG src={news.image} alt = {news.title} />
                    <TITLE>{news.title}</TITLE>
                </CAN>
                <EXCERPT>
                    
               {parse(news.excerpt)}


                </EXCERPT>
            
            </CARD> 
            
            )
        }
        </CONTAINER>

    </>
 );
    }

else return (
    <>
<div style={fetchTask === 'fetchStart' && status.isFetching ? {textAlign: 'center', fontSize:'larger'} : {textAlign: 'center', fontSize:'larger', color: 'red'}}>{ fetchTask === 'fetchStart' && status.isFetching ? 'Loading news, pls wait... ': 'An error occured pls refresh'}</div>
    </>
)
       
    
}
 
const mapStateToProps = ({inDicate}) => {
     return {

        status: inDicate[0]
    }
}


export default connect(mapStateToProps, null)(NewsCard);
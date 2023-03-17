import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row title="Top Rated" fetchURL={Requests.requestTopRated} />
        <Row title="Trending" fetchURL={Requests.requestTrending} />
        <Row title="Popular" fetchURL={Requests.requestPopular} />
        <Row title="Up Coming" fetchURL={Requests.requestUpcoming} />
        <Row title="Horror" fetchURL={Requests.requestHorror} />
    </div>
  )
}

export default Home
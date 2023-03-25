import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        {Requests.map((res, id) => <Row title={res.title} fetchURL={res.url} key={id} rowID={id}/>) }
    </div>
  )
}

export default Home
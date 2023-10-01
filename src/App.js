import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'

import {Header, Footer} from './sections'
import {Home, Profile} from './Pages'
import {Container} from './components'



const App = () => {
    return(
        <>
            <Router>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>

        </>
    )
}

export default App
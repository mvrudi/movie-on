import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './components/store'
import { BrowserRouter , Route, Switch, browserHistory} from 'react-router-dom'
import MovieOn from '../src/components/MovieOn'
import Results from '../src/components/Results'
import NotFoundPage from '../src/components/NotFoundPage'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm, faSearch, faTimes, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faFilm, faSearch, faTimes, faStar )

const App = () => {
    return (
        <div>
        <Switch>
            <Route path="/" component={MovieOn} exact={true} />
            <Route path="/results/:id" component={Results} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter history={browserHistory} ><App /></BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
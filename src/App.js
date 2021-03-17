import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Badge from './Pages/Badge'
import List from './Pages/List'

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/Badge' component={Badge}/>
                <Route exact path='/Badge/list' component={List}/>
                {/* <Route component={Error}/> */}
            </Switch>
        </BrowserRouter>
    )
}
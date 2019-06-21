import React from 'react'
//引入路由
import { Route } from 'react-router-dom'
import global from '../router/router'

class ContentMain extends React.Component {
    render() {
        return (<div style={{ flex:1, backgroundColor:'#ccc' }}>
            <Route exact path='/' component={global.Home}/>
            <Route exact path='/GoodsList' component={global.GoodsList}/>
        </div>)
    }
}

export default ContentMain
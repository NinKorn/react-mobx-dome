import React , { Component } from 'react'
import AppHeader from '../Components/Header';
import '../styles/home.less';

class Home extends Component {
    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <div className="home">
                    home
                </div>
            </div>
        )
    }
}
export default Home
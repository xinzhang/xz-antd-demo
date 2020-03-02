import React, { Component } from 'react';
import logo from 'styles/antd.svg';
import 'styles/App.css';
import Menu from 'components/Menu';
import Profile from 'components/Profile';
import Content from 'components/Content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Menu />
                    <Profile showHide />
                </header>
                <Content />
            </div>
        );
    }
}

export default App;

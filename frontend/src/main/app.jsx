import 'font-awesome/css/font-awesome.min.css';
import '../sass/main.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)
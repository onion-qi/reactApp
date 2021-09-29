import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'antd/dist/antd.css'

import Layout from './components/Layout/index.jsx'

export default class Index extends Component {
  render() {
    return <Layout />
  }
}
ReactDom.render(<Index />, document.getElementById('root'))

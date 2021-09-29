import { Layout } from 'antd'

import React, { Component } from 'react'
import layoutCss from './index.css'

const { Header, Footer, Sider, Content } = Layout

export default class LayoutComp extends Component {
  state = {
    a: 1,
    // ref: '',
  }
  clickSider = () => {
    console.log('jdkaj ', this.ref)
  }
  render() {
    return (
      <div className={layoutCss.wrapper}>
        <Layout>
          <Sider onClick={this.clickSider} ref={(c) => (this.ref = c)}>
            Sider
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

import React from 'react'
import { Layout } from 'antd'
import Gallery from './Gallery'
const { Header, Footer, Content } = Layout

const App = () => (
  <Layout>
    <Header />
    <Content style={{ textAlign: 'center' }}>
      <Gallery />
    </Content>
    <Footer />
  </Layout>
)

export default App

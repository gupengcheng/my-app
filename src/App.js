import logo from './logo.svg';
import './App.css';

import ImageWithText from './learn/ImageWithText';
import ExampleComponent from './learn/AxiosRequestData';

import { Button, Layout, Menu } from 'antd';

import MyRouteApp from './learn/ReactRouteLearn';
import MyList from './learn/MyList';

// 网络请求框架
import axios from 'axios';

const myAppComponent = <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React In Chengdu,China
  </a>
</header>
</div>;

const imageWithText = <div>
<ImageWithText
  imageSrc={logo}
  altText="A beautiful image"
  text="This is the accompanying text"
/>
</div>



function App() {
  // return ImageWithText(logo, "这是一个Desc", "This is Show Text")
  // ExampleComponent()
  // axios.get('http://192.168.158.209:5000/')
  //     .then(res => {
  //       console.log(res);
  //       // setData(res)
  //     }).catch(err => console.error(err));
  // console.log('This is a log message');
  return (
    // ExampleComponent()
    // MyRouteApp()
    MyList()
  );


  // 使用阿里巴巴Antd框架来实现React UI交互
  // return (
  //   <Layout>
  //     <Header>
  //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
  //         <Menu.Item key="1">nav 1</Menu.Item>
  //         <Menu.Item key="2">nav 2</Menu.Item>
  //         <Menu.Item key="3">nav 3</Menu.Item>
  //       </Menu>
  //     </Header>
  //     <Content style={{ padding: '50px' }}>
  //       <Button type="primary">Button</Button>
  //     </Content>
  //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  //   </Layout>
  // );
}

export default App;

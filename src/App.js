import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Posts from './component/Posts'
import PostForm from './component/PostForm'




class App extends Component{
// function App() {
  render(){
    return (
      // react-redux提供Provider组件，可以让容器组件拿到state
      // Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
      // Redux 提供createStore这个函数，用来生成 Store。
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
      // 上面代码中，Provider在根组件外面包裹了一层，这样一来，App的所有组件就默认都可以拿到state了，它的原理是react组建的context属性
    );
  }
}
// }

export default App;

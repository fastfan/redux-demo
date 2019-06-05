import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'


const initialState={}; //初始状态
const middleware=[thunk]; //中间件,使用redux-thunk中间件，改造store.dispatch，使得后者可以接受函数作为参数。因此，异步操作的第一种解决方案就是，写出一个返回函数的 Action Creator，然后使用redux-thunk中间件改造store.dispatch
//redux调试工具代码
const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
// 3个参数，第一个reducer（可以看做是一个方法，可以有多个，所以暂且用（）=>{}箭头函数,,第二个状态，第三个appliMiddleware中间件(它是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。)








export default store
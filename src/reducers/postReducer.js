import { FETCH_POSTS,ADD_POSTS } from "../actions/types";

// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。一个 React 根组件由很多子组件构成。这就是说，子组件与子 Reducer 完全可以对应。Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。rootReducer是个数组里面放着所有reducer）
const initialState={
    items:[],
    item:{}
}

export default function (state=initialState,action) {
    console.log("reducers")
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload//获取派发的值
            }
        case ADD_POSTS:
            return {
                ...state,
                item:action.payload//获取派发的值
            }
        default:
            return state
    }
}
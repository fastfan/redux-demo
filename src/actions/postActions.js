import {FETCH_POSTS,ADD_POSTS} from './types'

// export default function fetchPosts () {
//      分发acton
//     return function (dispatch) {
//         fetch ("http://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(posts => 
//              dispatch({
//                  type:FETCH_POSTS,
//                  payload:posts//派发
//              })
//             )
//     }
// }
// 优化代码
export const fetchPosts = () => dispatch => {
    // 分发acton
        fetch ("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => 
             dispatch({
                 type:FETCH_POSTS,
                 payload:posts//派发
             })
        )
}
export const createPost = (postData) =>dispatch => {
        fetch ("http://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type:ADD_POSTS,
                payload:posts//派发
            })
       )
}

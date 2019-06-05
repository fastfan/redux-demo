import PropsTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来(例如将fetchPosts.js和Post.js组件连接)

import {fetchPosts} from '../actions/postActions'



 class Posts extends Component {
    //  constructor(props){
    //      super(props);
    //      this.state={
    //          posts:[]
    //      }
    //  }
    // 未用rudux之前


    componentDidMount(){
        // 触发action
        this.props.fetchPosts()
        // fetch ("http://jsonplaceholder.typicode.com/posts")
        // .then(res => res.json())
        // .then(json => 
        //      console.log(json)
        //     this.setState({
        //         posts:json
        //     })
        //     )
        // 未用rudux之前
    }
    componentWillReceiveProps(nextProps){
       if(nextProps.addPosts){
          this.props.posts.unshift(nextProps.addPosts)
       }
    } 

    render() {
        const postItem=this.props.posts.map((word,index)=>(
            <div key={index}>
                <h3>{word.title}</h3>
                <p>{word.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>posts</h1>
                {postItem}
            </div>
        )
    }
}

Posts.propsTypes={
    fetchPosts:PropsTypes.func.isRequired,
    posts:PropsTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts:state.posts.items,
    addPosts:state.posts.item
  })

export default connect(mapStateToProps,{fetchPosts})(Posts)
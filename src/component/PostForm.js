import PropsTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来(例如将fetchPosts.js和Post.js组件连接)

import {createPost} from '../actions/postActions'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
         this.setState({
             [e.target.name]:e.target.value
         })
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        };
            //触发action
        this.props.createPost(post)
   }

    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title</label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange}  />
                    </div>
                    <div>
                        <label>body</label>
                        <br />
                        <textarea  name="body" onChange={this.onChange}  ></textarea>
                    </div>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}

PostForm.propsTypes={
    createPost:PropsTypes.func.isRequired,
    posts:PropsTypes.array.isRequired
}

export default connect(null,{createPost})(PostForm)
import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import {getPosts} from '../../actions/post';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? <Spinner /> : (
        <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fa fa-user" aria-hidden="true"></i> Welcome to the community
            </p>
            <PostForm />
            <div className="posts">
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    );
}

Posts.propTypes = {
    getPosts: propTypes.func.isRequired,
    post: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);

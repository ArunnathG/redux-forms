import React from 'react'
import axios from 'axios'

const root_url = 'https://reduxblog.herokuapp.com/api'

const key = '?key=paperboy';
export const FETCH_POSTS = 'fetch_posts'
export const SUBMIT_POSTS = 'submit_posts'
export const SHOW_POSTS = 'show_posts'
export const DELETE_POSTS = 'delete_posts'
export const fetchPosts = () => {
    const url = axios.get(`${root_url}/posts${key}`)
    return {
        type: FETCH_POSTS,
        payload: url
    }
}

export const submitposts = (values,callback) => {
    console.log('submitted'+ values)
    const url = axios.post(`${root_url}/posts${key}`,values).then(() => {
        callback()
    })
    .catch((error) => {
        throw error
    })
    return {
        type: SUBMIT_POSTS,
        payload: url
    }
}

export const showpost = (id) => {
    const url = axios.get(`${root_url}/posts/${id}${key}`)
    return {
        type: SHOW_POSTS,
        payload: url
    }
}

export const deletepost = (id,callback) => {
    const url = axios.delete(`${root_url}/posts/${id}${key}`)
    .then(() => {
        callback()
    })
    .catch((error) => {
        throw error
    })
    console.log('delete action creator',url)
    return {
        type: DELETE_POSTS,
        payload: url
    }
}
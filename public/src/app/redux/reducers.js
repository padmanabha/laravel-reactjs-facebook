import {combineReducers} from 'redux';

import user from './userReducer';
import posts from '../components/posts/redux/postReducers';

export default combineReducers({
     user,
     posts
});
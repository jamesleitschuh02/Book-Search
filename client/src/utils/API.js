/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

//const key = "AIzaSyAWiTCKBN--ryAynr9NzHF7D-8DLwQkA78";

export default {
    BookSearch: function(query) {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=" + query
        );
    }
};
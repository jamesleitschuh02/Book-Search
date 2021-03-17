/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

//const key = "AIzaSyAWiTCKBN--ryAynr9NzHF7D-8DLwQkA78";

export default {
    BookSearch: function(query) {
        return axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(res => {
            const booksList = res.data.items;
            return booksList.map((index) => {
                let thumbnail;
                let buyLink;
                if (index.volumeInfo.imageLinks){
                    thumbnail = index.volumeInfo.imageLinks.thumbnail;
                } else {
                    thumbnail = "placeholder";
                };

                if (index.saleInfo.buyLink) {
                    buyLink = index.saleInfo.buyLink;
                } else {
                    buyLink = "Not Available"
                }

                return {
                    title: index.volumeInfo.title,
                    author: index.volumeInfo.authors,
                    picture: thumbnail,
                    synopsis: index.volumeInfo.description,
                    link: buyLink,
                    key: index.id
                }
            })
        })
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getBooks: function() {
        return axios.get("/api/books");
      },
};
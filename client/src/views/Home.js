import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Home = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/authors')
            .then(authors =>{
                console.log(authors.data);
                setAuthors(authors.data);
            } )
            .catch(err => console.log(err));
    }, [])

    if(authors.length === 0) return(
        <div>Loading...</div>
    );

    function deleteAuthor(id){
        Axios.delete('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setAuthors(authors.filter((author) => author._id !== id));
            })
            .catch(err => console.log(err));
    }

    return ( 
        <div className="container">
            <div className="row">
                <h1>Favorite Authors</h1>
            </div>
            <div className="row">
                <Link to="/new">Add an author</Link>
            </div>
            <div className="row">
                We have quotes by:
            </div>
            <div className="row">
                <table className="col-6 table table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map(author => {
                            return <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={() => navigate('/edit/'+author._id)} className="btn btn-secondary">Edit</button>
                                    <button onClick={() => deleteAuthor(author._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Home;
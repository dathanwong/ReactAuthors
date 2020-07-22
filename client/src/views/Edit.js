import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Edit = (props) => {

    const {id} = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/authors/'+id)
            .then(res =>{
                console.log(res.data);
                setName(res.data.name);
            } )
            .catch(err => console.log(err.response));
    }, [id])

    function handleSubmit(e){
        e.preventDefault();
        const newAuthor = {name: name};
        Axios.put('http://localhost:8000/api/authors/'+id, newAuthor)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => setErrors(err.response.data.errors));
    }

    return ( 
        <div className="container">
            <div className="row">
                <h1>Favorite Authors</h1>
            </div>
            <div className="row">
                <Link to="/">Home</Link>
            </div>
            <div className="row">
                Edit this author:
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <label>Name:</label>
                        </div>
                        <div className="row">
                            <input onChange={e => setName(e.target.value)} value={name} type="text"></input>
                            {errors && (
                                <span className="text-danger">
                                {errors?.name?.properties?.message}
                                </span>
                            )}
                        </div>
                        <div className="row">
                            <button onClick={()=> navigate('/')} className="btn btn-secondary">Cancel</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Edit;
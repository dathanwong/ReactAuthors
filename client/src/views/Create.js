import React, { useState } from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';

const Create = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        const author = {name: name};
        Axios.post('http://localhost:8000/api/authors', author)
            .then(res =>{
                console.log(author);
                navigate('/');
            })
            .catch(err =>{
                setErrors(err.response.data.errors)
                console.log(err.response.data);
            } );
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
                Add a new author:
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
 
export default Create;
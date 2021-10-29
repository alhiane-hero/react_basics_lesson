import React from 'react';
// import '../styles/All.scss';

const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.username.value);
}

const Form = props => {
    const {handleChange, username} = props;
    return (
        <div className='our_form'>
            <form action='#' onSubmit={handleSubmit}>
                <textarea onChange={handleChange} name='username' />
                <select onChange={handleChange}>
                    <option value='value 1'>value 1</option>
                    <option value='value 2'>value 2</option>
                    <option value='value 3'>value 3</option>
                </select>
                <input type='submit' className='btn' />
            </form>
            <p>username: {username}</p>
        </div>
    );
}

export default Form;
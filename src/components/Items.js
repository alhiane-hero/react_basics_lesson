import React from 'react';

const Items = props => {
    const {items, addUser, deleteUser} = props;
    return (
        <div className='Items'>
            {
                items.map((item, index) => {
                    const {id, name, age} = item;
                    return (
                        <div className='userInfo' key={index}>
                            <p>Id: {id}</p>
                            <p>Name: {name}</p>
                            <p>Age: {age}</p>
                        </div>
                    );
                })
            }
            <div className='btns'>
                <button className='add_user_btn btn' 
                    onClick={addUser}>Add User</button>
                <button className='delete_user_btn btn'
                    onClick={deleteUser}>Delete User</button>
            </div>
        </div>
    );
}

export default Items;
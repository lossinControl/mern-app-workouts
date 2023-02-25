import axios from 'axios';
import { useState } from 'react';

const User = () => {

    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:4000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <section>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                />

                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />

                <input 
                    type="date"
                    name="birthdate"
                    value={newUser.date}
                    onChange={handleChange}
                />

                <input 
                    type="submit"
                />
            </form>
            <div>
                <h1>USERS</h1>

            </div>
        </section>
    );
}

export default User;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lab8.css';

const API_URL = 'https://67d258e490e0670699bd28af.mockapi.io/users';

const Lab8 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    profileImageUrl: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      fetchUsers();
      setFormData({ fullname: '', email: '', password: '', profileImageUrl: '' });
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      fullname: user.fullname,
      email: user.email,
      password: '',
      profileImageUrl: user.profileImageUrl || ''
    });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // ✅ Fixed string interpolation
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="fullname" 
          placeholder="Full Name" 
          value={formData.fullname} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="profileImageUrl" 
          placeholder="Profile Image URL" 
          value={formData.profileImageUrl} 
          onChange={handleChange} 
        />
        <button type="submit">{editingId ? 'Save Changes' : 'Add User'}</button>
      </form>
      
      <table border="1">
        <thead>
          <tr style={{ backgroundColor: "#dadada" }}>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.profileImageUrl ? (
                  <img 
                    src={user.profileImageUrl}
                    alt="Profile" 
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab8;

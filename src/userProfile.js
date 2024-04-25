import React, { useState } from 'react';

const UserProfilePage = () => {
    const initialUserData = {
        firstName: 'Harshit',
        lastName: 'Gaur',
        email: 'harshit.work@hotmail.com',
        age: 19,
        bio: 'Web Deveoper : ) ',
      };
    
      const [isEditing, setIsEditing] = useState(false);
    
      const [userData, setUserData] = useState(initialUserData);
    
      const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleSave = () => {
        setIsEditing(false);
      };
    
      const handleCancel = () => {
        setIsEditing(false);
        setUserData(initialUserData);
      };
    
      const renderProfile = () => (
        <div>
          <h2>User Profile</h2>
          <hr></hr>
          <div className='detail'>
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Age:</strong> {userData.age}</p>
            <p><strong>Bio:</strong> {userData.bio}</p>
          </div>
          <button onClick={handleEdit}>Edit</button>
          <hr></hr>
        </div>
      );
    
      const renderEditForm = () => (
        <div>
          <h2>Edit User Profile</h2>
          <form id='form'>
            <div className='form-detail'>
              <label>First Name:</label>
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
            </div>
            <div className='form-detail'>
              <label>Last Name:</label>
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
            </div>
            <div className='form-detail'>
              <label>Email:</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className='form-detail'>
              <label>Age:</label>
              <input
                type="number"
                value={userData.age}
                onChange={(e) => setUserData({ ...userData, age: e.target.value })}
              />
            </div>
            <div className='form-detail'>
              <label>Bio:</label>
              <input
                value={userData.bio}
                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
              />
            </div>
          </form>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      );
    
      return (
        <div>
          {isEditing ? renderEditForm() : renderProfile()}
        </div>
      );
};

export default UserProfilePage;

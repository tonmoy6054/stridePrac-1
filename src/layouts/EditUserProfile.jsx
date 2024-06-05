import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile, updateEmail } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';

const auth = getAuth(app);

const EditUserProfile = () => {
  const data = useLoaderData();
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || data.displayName || '');
        setEmail(user.email || data.email || '');
        setPhotoURL(user.photoURL || data.photoURL || '');
      } else {
        console.log('No user is signed in.');
      }
    });

    return () => unsubscribe();
  }, [data]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });

      if (auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
      }

      
      const response = await fetch(`https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/users/${data?.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          displayName,
          email,
          photoURL
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update user data in database');
      }

      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage(`Error updating profile: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        {user ? (
          <form onSubmit={handleUpdateProfile}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="displayName">
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
                Profile Picture URL
              </label>
              <input
                type="text"
                id="photoURL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Profile
              </button>
            </div>

            {message && <p className="text-red-500 text-xs italic">{message}</p>}
          </form>
        ) : (
          <p>No user is signed in.</p>
        )}
      </div>
    </div>
  );
};

export default EditUserProfile;

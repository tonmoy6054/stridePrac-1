

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName
      };

      fetch('https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
      .then(res => {
        if (res.status === 409) {
          return fetch(`https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/users/${userInfo.email}`)
            .then(res => res.json());
        }
        return res.json();
      })
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token); 
          console.log('User signed in:', data);
        } else {
          console.error('Failed to retrieve user token');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error.message);
    });
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        fetch(`https://r-p-server-4pfbeq1t3-tonmoy6054s-projects.vercel.app/users/${form.email}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.token) {
              localStorage.setItem('token', data.token); 
              navigate("/dashboard");
            } else {
              console.error('Token not found in server response');
            }
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p className="text-2xl font-bold">or</p>
            <button onClick={handleGoogleSignIn}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

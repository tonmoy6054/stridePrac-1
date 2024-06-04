// // import  { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// // import app from '../../firebase/firebase.config';


// // const auth = getAuth(app);
// // const Register = () => {
// //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { email, password } = form; 
// //     // Here you can add the logic for registering the user (e.g., API call)
    
  
// //     createUserWithEmailAndPassword(auth, email, password)
// //     .then(result => {
// //       // const user = result.user;
// //       const userInfo = {
// //         email: result?.user?.email,
// //         name: result?.user?.displayName
// //       }
      
// //       fetch('http://localhost:3000/users', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(userInfo),
// //       }).then(res => res.json())
// //       .then(data => {
// //         console.log(data);
// //       })
      
// //     })
// //     .catch(err => {
// // console.log(err.message);
// //     })
// //     navigate('/login');
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
// //               Username:
// //             </label>
// //             <input
// //               type="text"
// //               name="username"
// //               id="username"
// //               value={form.username}
// //               onChange={handleChange}
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //               Email:
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               id="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               required
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //               Password:
// //             </label>
// //             <input
// //               type="password"
// //               name="password"
// //               id="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               required
// //             />
// //           </div>
// //           <div className="flex items-center justify-between">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //             >
// //               Register
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from '../../firebase/firebase.config';

// const auth = getAuth(app);

// const Register = () => {
//   const [form, setForm] = useState({ username: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password, username } = form; 
  
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         const userInfo = {
//           email: result.user.email,
//           name: username
//         };
//         return fetch('http://localhost:3000/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(userInfo),
//         });
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.acknowledged) {
//           navigate('/login');
//         } else {
//           console.error('User registration failed');
//         }
//       })
//       .catch(err => {
//         console.error('Error:', err.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username:
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               value={form.username}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={form.email}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={form.password}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = form;

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const userInfo = {
          email: result.user.email,
          name: username,
          uid: result.user.uid
        };
        console.log('User info to be sent:', userInfo);
        return fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
      })
      .then(res => res.json())
      .then(data => {
        console.log('Backend response:', data);
        if (data.acknowledged) {
          navigate('/login');
        } else {
          console.error('User registration failed');
        }
      })
      .catch(err => {
        console.error('Error:', err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import {supabase} from '../../lib/supabaseClient'; 

    

// export function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('+91 ');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const sendOtp = async (phone: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { error } = await supabase.auth.signInWithOtp({
//         phone: phone.replace(/\s+/g, '')
//       });
//       if (error) throw error;

//       setOtpSent(true); 
//       toast.success('OTP sent to your phone');
//     } catch (err) {
//       setError('Error sending OTP');
//       toast.error('Failed to send OTP');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const verifyOtp = async (otp: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { error } = await supabase.auth.verifyOtp({
//         phone: phone.replace(/\s+/g, ''),
//         token: otp,
//         type: 'sms',
//       });

//       if (error) throw error;

//       toast.success('OTP verified successfully');
//       navigate('/'); 
//     } catch (err) {
//       setError('Invalid OTP');
//       toast.error('OTP verification failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otpSent) {
//       await sendOtp(phone);
//     } else {
//       await verifyOtp(otp);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-4 py-16">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//         <h2 className="text-2xl text-center text-blue-500 font-bold mb-6">
//           {otpSent ? 'Verify OTP' : 'Register'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-500">
//           {!otpSent && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email@example.com"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password *
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                   minLength={6}
//                 />
//               </div>
//             </>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number *
//             </label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Enter phone number"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {otpSent && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 OTP *
//               </label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <button className="text-blue-500 hover:text-blue-600">
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import {supabase} from '../../lib/supabaseClient'; 
// import { useAuthStore } from '../../store/authStore';

    

// export function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('+91 ');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { register } = useAuthStore();

//   const sendOtp = async (phone: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { error } = await supabase.auth.signInWithOtp({
//         phone: phone.replace(/\s+/g, '')
//       });
//       if (error) throw error;

//       setOtpSent(true); 
//       toast.success('OTP sent to your phone');
//     } catch (err) {
//       setError('Error sending OTP');
//       toast.error('Failed to send OTP');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const verifyOtp = async (otp: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { error } = await supabase.auth.verifyOtp({
//         phone: phone.replace(/\s+/g, ''),
//         token: otp,
//         type: 'sms',
//       });

//       if (error) throw error;

//       //await register(email, password, phone.replace(/\s+/g, ''));


//       toast.success('OTP verified successfully');
//       navigate('/'); 
//     } catch (err) {
//       setError('Invalid OTP');
//       toast.error('OTP verification failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otpSent) {
//       await sendOtp(phone);
//     } else {
//       await verifyOtp(otp);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-4 py-16">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//         <h2 className="text-2xl text-center text-blue-500 font-bold mb-6">
//           {otpSent ? 'Verify OTP' : 'Register'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-500">
//           {!otpSent && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email@example.com"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password *
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                   minLength={6}
//                 />
//               </div>
//             </>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number *
//             </label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Enter phone number"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {otpSent && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 OTP *
//               </label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <button className="text-blue-500 hover:text-blue-600">
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../../lib/supabaseClient';
// import { useAuthStore } from '../../store/authStore';

// export function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('+91 ');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { register } = useAuthStore();

//   const sendOtp = async (phone: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { error } = await supabase.auth.signInWithOtp({
//         phone: phone.replace(/\s+/g, ''),
//       });
//       if (error) throw error;

//       setOtpSent(true);
//       toast.success('OTP sent to your phone');
//     } catch (err) {
//       setError('Error sending OTP');
//       toast.error('Failed to send OTP');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const verifyOtp = async (otp: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { data, error } = await supabase.auth.verifyOtp({
//         phone: phone.replace(/\s+/g, ''),
//         token: otp,
//         type: 'sms',
//       });

//       if (error) throw error;

//       // Update user with email and password
//       const { error: updateError } = await supabase.auth.updateUser({
//         email: email,
//         password: password,
//       });

//       if (updateError) throw updateError;

//       // Optionally, save user details to your database
//       //await register(email, password, phone.replace(/\s+/g, ''));

//       toast.success('OTP verified and account created successfully');
//       navigate('/');
//     } catch (err) {
//       setError('Invalid OTP or failed to update user');
//       toast.error('OTP verification or account update failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otpSent) {
//       await sendOtp(phone);
//     } else {
//       await verifyOtp(otp);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-4 py-16">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//         <h2 className="text-2xl text-center text-blue-500 font-bold mb-6">
//           {otpSent ? 'Verify OTP' : 'Register'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-500">
//           {!otpSent && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email@example.com"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password *
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                   minLength={6}
//                 />
//               </div>
//             </>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number *
//             </label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Enter phone number"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {otpSent && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 OTP *
//               </label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <button className="text-blue-500 hover:text-blue-600">
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
//import { useAuthStore } from '../../store/authStore';
import axios from 'axios';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  //const { register } = useAuthStore();

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null); // Store OTP temporarily

  // const sendOtp = async (phone: string) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const otp = generateOtp();
  //     setGeneratedOtp(otp.toString());

  //     const payload = {
  //       sender_id: 'FSTSMS',
  //       message: `Your OTP code is ${otp}`,
  //       language: 'english',
  //       route: 'p',
  //       numbers: phone.replace(/\s+/g, ''), // Remove extra spaces
  //     };

  //     const headers = {
  //       'authorization': import.meta.env.VITE_FAST2SMS_API_KEY, // Replace with your Fast2SMS API key
  //       'Content-Type': 'application/json',
  //     };

  //     const response = await axios.post(
  //       'https://www.fast2sms.com/dev/bulkV2',
  //       payload,
  //       { headers }
  //     );

  //     if (response.data.return) {
  //       setOtpSent(true);
  //       toast.success('OTP sent to your phone');
  //     } else {
  //       throw new Error('Failed to send OTP');
  //     }
  //   } catch (err) {
  //     setError('Error sending OTP');
  //     toast.error('Failed to send OTP');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const sendOtp = async (phone: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const otp = generateOtp();
      setGeneratedOtp(otp.toString());

      const payload = {
        sender_id: 'FSTSMS',
        message: `Your HouseGPT OTP code is ${otp}`,
        language: 'english',
        route: 'otp',
        numbers: phone.replace(/\s+/g, ''), // Remove extra spaces
      };

      const headers = {
        'authorization': "stFI4edA60jJTKqPUGcEM8fVoikXb3BnyupgvYOrSlzHwD9mCRlaF2n4sjq65SxVEJtBovDzC7k0wdZP", // Replace with your Fast2SMS API key
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        'https://www.fast2sms.com/dev/bulkV2',
        payload,
        { headers }
      );

      if (response.data.return) {
        setOtpSent(true);
        toast.success('OTP sent to your phone');
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (err) {
      setError('Error sending OTP');
      toast.error('Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (inputOtp: string) => {
    setIsLoading(true);
    setError(null);
    try {
      if (generatedOtp && inputOtp === generatedOtp) {
        // Register user with email and password in Supabase
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (error) throw error;

        const { error: updateError } = await supabase.auth.updateUser({
          phone: phone.replace(/\s+/g, ''),
        });

        if (updateError) throw updateError;

        toast.success('OTP verified and account created successfully');
        navigate('/');
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (err) {
      setError('Invalid OTP or failed to register user');
      toast.error('OTP verification or account registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otpSent) {
      await sendOtp(phone);
    } else {
      await verifyOtp(otp);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 py-16">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-2xl text-center text-blue-500 font-bold mb-6">
          {otpSent ? 'Verify OTP' : 'Register'}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-500"
        >
          {!otpSent && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  minLength={6}
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {otpSent && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                OTP *
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button className="text-blue-500 hover:text-blue-600">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

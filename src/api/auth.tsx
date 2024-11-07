import axios from 'axios';

const API_URL = 'http://YOUR_IP_ADDRESS:8005'; // Replace with your backend's IP and port

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// Function for registering a new user
export const registerUser = async (registerData: RegisterData) => {
  try {
    const response = await api.post('/auth/signup', registerData);
    return response.data;
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};

// Function for logging in an existing user
export const loginUser = async (loginData: LoginData) => {
    try {
      const response = await api.post('/auth/login', loginData);
      return response.data;
    } catch (error: unknown) { // Typing the error as `unknown`
      if (axios.isAxiosError(error)) { // Checking if the error is an instance of AxiosError
        if (error.response) {
          // The server responded with a status other than 200
          console.error('Response Error:', error.response.data);
        } else if (error.request) {
          // No response was received
          console.error('Request Error:', error.request);
        } else {
          // Something else went wrong
          console.error('Axios Error:', error.message);
        }
      } else {
        // If the error is not an AxiosError, handle it accordingly
        console.error('Unexpected Error:', error);
      }
      throw error; // Rethrow the error to handle it later if necessary
    }
  };
  

import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200 && response.data && response.data.success) {
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        setUser,
        registerUser,
        setLoading,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

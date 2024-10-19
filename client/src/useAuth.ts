import { useState } from 'react';

interface AuthResponse {
  message: string;
}

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Registro de usuario
  const signIn = async (email: string, password: string): Promise<AuthResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Inicio de sesión
  const login = async (email: string, password: string): Promise<AuthResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signIn, login, loading, error };
};

export default useAuth;
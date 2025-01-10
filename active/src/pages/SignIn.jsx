/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";
import { loginUser } from "../helpers/api";
import { AuthContext } from "../contexts/AuthContext";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser(formData);
      login(formData.fullName);
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("userName", formData.fullName);
      console.log("Inicio de sesión exitoso.");
    } catch (error) {
      console.warn("Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="containerSignIn">
      <div className="signin-card">
        <div className="header">
          <LogIn size={48} className="icon" />
          <h2 className="title">Sign In</h2>
          <p className="subtitle">
            Dont have an account? <NavLink to="/signup">Register</NavLink>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="input"
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="fullName">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="tu@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <div className="password-header">
              <label className="label" htmlFor="password">
                Password
              </label>
              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
            </div>
            <div className="input-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="input"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/*<div className="remember-me">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-text">Keep me signed in</span>
            </label>
          </div>*/}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <svg
                className="spinner"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

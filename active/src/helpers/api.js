const BASE_URL = "http://127.0.0.1:8000";

export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });
    if (!response.ok) {
      throw new Error("Error al registrar el usuario");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.fullName,
        password: formData.password,
      }),
    });
    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const BASE_URL = "http://127.0.0.1:8000";

export const sendContactMessage = async (formData) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${BASE_URL}/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Error al enviar el mensaje.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

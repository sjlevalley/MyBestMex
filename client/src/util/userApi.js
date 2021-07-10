// This module exports functions for sending requests to the /api/users endpoint.

export const signup = async (user) => {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (res.ok) {
    return { result: data };
  }
  return { error: data.message };
};

export const login = async (credentials) => {
  const res = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (res.ok) {
    return { result: data };
  }
  return { error: data.message };
};

export const logout = async () => {
  const res = await fetch("/api/users/logout", { method: "DELETE" });
  if (!res.ok) {
    const { message } = await res.json();
    return { error: message };
  }
  return { result: true };
};

export const get = async () => {
  const res = await fetch("/api/users");
  const data = await res.json();
  if (!res.ok) {
    return { error: data.message };
  }
  return { result: data };
};

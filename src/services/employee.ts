import config from "../config";

export const getEmployees = async (page = 1, limit = 5) => {
  const response = await fetch(`${config.API}/employees?page=${page}&limit=${limit}`);
  return await response.json();
}

export const addEmployee = async (name: string, email: string, position: string) => {
  await fetch(`${config.API}/employees`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      position,
    }),
  });
}

import apiClient from "./ApiCLient";

export const getRoles = async (lang = "en") => {
  const res = await apiClient.get("/get-roles", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

export const getDestinations = async (lang = "en") => {
  const res = await apiClient.get("/get-destinations", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

export const getEducationLevels = async (lang = "en") => {
  const res = await apiClient.get("/get-education-levels", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

export const submitContactForm = async (data, lang = "en") => {
  const res = await apiClient.post("/contact-us", data, {
    headers: { language: lang },
  });
  return res.data;
};

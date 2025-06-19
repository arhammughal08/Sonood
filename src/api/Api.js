// src/api/Api.js
import apiClient from "./ApiCLient";

// Get Roles
export const getRoles = async (lang = "en") => {
  console.log("Fetching roles with language:", lang);
  const res = await apiClient.get("/get-roles", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

// Get Destinations
export const getDestinations = async (lang = "en") => {
  const res = await apiClient.get("/get-destinations", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

// Get Education Levels
export const getEducationLevels = async (lang = "en") => {
  const res = await apiClient.get("/get-education-levels", {
    headers: { language: lang },
  });
  return res.data?.data || [];
};

// Submit Contact Form
export const submitContactForm = async (data, lang = "en") => {
  const res = await apiClient.post("/contact-us", data, {
    headers: { language: lang },
  });
  return res.data;
};

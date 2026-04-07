import axiosInstance from "../../api/axiosInstance";
import { ContactFormData, ContactResponse } from "./contact.type";

const createContact = async (
  contactData: ContactFormData,
): Promise<ContactResponse> => {
  const response = await axiosInstance.post("api/contact-us/", contactData);
  return response.data;
};

export { createContact };
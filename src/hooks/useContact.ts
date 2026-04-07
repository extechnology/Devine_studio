import { useMutation } from "@tanstack/react-query";
import { createContact } from "../services/contact/contact.service";

const useContact = () => {
  return useMutation({
    mutationFn: createContact,
  });
};

export default useContact;

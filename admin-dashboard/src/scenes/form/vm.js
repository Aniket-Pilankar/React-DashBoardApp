import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { validationSchema } from "./validators";

export default function useFormVM() {
  const formMethods = useForm({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    resolver: joiResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return { formMethods, onSubmit };
}

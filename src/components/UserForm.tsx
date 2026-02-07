import { useForm } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { userFormSchema } from "../config/formSchema";
import type { User } from "../types/user";

interface UserFormProps {
  onSubmit: (data: User) => void;
  defaultValues?: Partial<User> | null;
}

export default function UserForm({ onSubmit, defaultValues }: UserFormProps) {
  const { register, handleSubmit, formState } = useForm<User>({
    defaultValues: defaultValues || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userFormSchema.map((field) => {
        const validationRules: RegisterOptions<User> = {
          required: field.required ? `${field.label} is required` : false,
        };

        if (field.name === "email") {
          validationRules.pattern = {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          };
        }

        if (field.name === "phone") {
          validationRules.pattern = {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          };
        }

        return (
          <TextField
            key={field.name}
            label={field.label}
            fullWidth
            margin="normal"
            {...register(field.name as keyof User, validationRules)}
            inputProps={
              field.name === "phone"
                ? { inputMode: "numeric", pattern: "[0-9]*" }
                : undefined
            }
            error={!!formState.errors[field.name as keyof User]}
            helperText={
              formState.errors[field.name as keyof User]?.message as string
            }
          />
        );
      })}

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </form>
  );
}

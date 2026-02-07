import { useForm } from "react-hook-form";
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
      {userFormSchema.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          {...register(field.name as keyof User, {
            required: field.required,
          })}
          error={!!formState.errors[field.name as keyof User]}
          fullWidth
          margin="normal"
        />
      ))}

      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}

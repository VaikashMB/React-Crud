import { Button, Card, CardContent, Typography } from "@mui/material";
import type { User } from "../types/user";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: UserListProps) {
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.phone}</Typography>

            <Button onClick={() => onEdit(user)}>Edit</Button>
            <Button color="error" onClick={() => onDelete(user.id!)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

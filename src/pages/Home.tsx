import { useEffect, useState } from "react";
import {
  CircularProgress,
  Container,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import * as api from "../api/userApi";
import type { User } from "../types/user";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data: User) => {
    try {
      setLoading(true);
      setError(null);

      if (editingUser) {
        await api.updateUser(editingUser.id, data);
        setToast("User updated successfully");
      } else {
        await api.createUser(data);
        setToast("User created successfully");
      }

      setEditingUser(null);
      await fetchUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to save user");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      setError(null);

      await api.deleteUser(id);
      setToast("User deleted successfully");

      await fetchUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, textAlign: "center" }}
      >
        User Management
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <UserForm onSubmit={handleSubmit} defaultValues={editingUser} />

      {loading && (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 3 }} />
      )}

      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Users List
      </Typography>

      <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />

      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={() => setToast("")}
      >
        <Alert severity="success">{toast}</Alert>
      </Snackbar>
    </Container>
  );
}

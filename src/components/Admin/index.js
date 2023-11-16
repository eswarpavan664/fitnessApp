import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, fetchAllUsers, fetchUser } from 'slices/userSlice';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Wrapper, Header } from './styles';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = 'admin@gmail.com';

const Admin = () => {
  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user?.details.allUsers);
  const adminEmail = useSelector((state) => state.auth?.user?.email);

  const navigate = useNavigate();

  const goToDashBoard = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  useEffect(() => {
    if (adminEmail !== ADMIN_EMAIL) {
      goToDashBoard();
    }
  }, [adminEmail, goToDashBoard]);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users) setAllUsers(users);
  }, [users]);

  return (
    <Wrapper>
      <Header> Registered Users</Header>
      <ListGroup>
        {allUsers.map((user) => {
          return (
            <ListGroup.Item key={user._id}>
              <div>{user?.firstName}</div>
              <div>{user?.email}</div>
              <Button
                variant='danger'
                onClick={() => {
                  let text = `Are you sure, you want to delete ${user.firstName}`;
                  if (window.confirm(text) === true) {
                    dispatch(deleteUser(user.uid));
                  }
                }}
                disabled={user?.email === ADMIN_EMAIL}
              >
                Delete
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Wrapper>
  );
};

export default Admin;

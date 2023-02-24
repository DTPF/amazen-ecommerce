import randomAvatar from '../../utils/randomAvatar';

export const usersData = [
  {
    name: 'Admin',
    lastname: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    avatar: randomAvatar(),
    role: 'admin',
    createdAt: Date.now()
  },
  {
    name: 'User',
    lastname: 'Romero',
    email: 'user@user.es',
    password: 'user',
    avatar: randomAvatar(),
    role: 'user',
    createdAt: Date.now()
  }
]
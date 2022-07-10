import { User } from '@shared/types/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Logo from '../components/logo';
import PageTitle from '../components/page-title';
import SigninSignupForm from '../components/signin-signup-form';
import UserForm from '../components/user-form';
import { useAuth } from '../context/auth';

const Signup = () => {
  const { fbUser, isLoading, user } = useAuth();
  const router = useRouter();
  const { register, control } = useForm<User>();

  if (isLoading) {
    return null;
  }

  if (user) {
    router.push('/');
    return null;
  }

  if (!fbUser) {
    return <SigninSignupForm mode="signup" />;
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Logo />
      </div>
      <PageTitle>アカウント作成</PageTitle>
      <UserForm mode="create" />
    </div>
  );
};

export default Signup;

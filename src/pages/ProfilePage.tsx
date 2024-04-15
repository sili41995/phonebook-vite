import UserProfile from '@/components/UserProfile';
import { FC, useEffect, useState } from 'react';
import { ICurrentUser } from '@/types/types';
import contactsServiceApi from '@/service/contactsServiceApi';
import { toasts } from '@/utils';
import { FetchStatuses } from '@/constants';
import Loader from '@/components/Loader';

const { idle, pending, resolved, rejected } = FetchStatuses;

const ProfilePage: FC = () => {
  const [fetchUserStatus, setFetchUserStatus] = useState<FetchStatuses>(
    () => idle
  );
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const isLoadingUser = fetchUserStatus === pending;

  useEffect(() => {
    const getUser = async () => {
      setFetchUserStatus(pending);
      try {
        const user = await contactsServiceApi.refreshUser();
        setUser(user);
        setFetchUserStatus(resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
          setFetchUserStatus(rejected);
        }
      }
    };

    getUser();
  }, []);

  return isLoadingUser ? <Loader /> : user && <UserProfile user={user} />;
};

export default ProfilePage;

import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import ContactsContainer from '@/components/ContactsContainer';
import { selectIsLoaded } from '@/redux/contacts/selectors';
import { fetchContacts } from '@/redux/contacts/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const isLoadedContacts = useAppSelector(selectIsLoaded);
  const isLoading = !isLoadedContacts;

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ContactsContainer quantity={6} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactsPage;

import SignInForm from '@/components/SignInForm';
import ModalForm from '@/components/ModalForm';
import { FormTypes } from '@/constants/index';

const SignInPage = () => (
  <ModalForm formType={FormTypes.authForm}>
    <SignInForm />
  </ModalForm>
);

export default SignInPage;

import ErrorMessage from '@/components/ErrorMessage';

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        pageTitle='Internal server error'
        contentTitle='501'
        content='Ocorreu um erro no qual o nosso servidor não conseguiu se recuperar. Tente novamente mais tarde'
      />
    </>
  );
}

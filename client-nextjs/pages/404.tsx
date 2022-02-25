import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);
  return (
    <>
      <h1>NOT FOUND!!</h1>
    </>
  );
}

export default Custom404;

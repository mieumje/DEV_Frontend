import Button from '@componentsButton';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  border: 1px solid;
  height: 100vh;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

function Index() {
  return (
    <Container>
      <Link href="/home">
        <Button>Home Page</Button>
      </Link>
      <Link href="/about">
        <Button>About Page</Button>
      </Link>
    </Container>
  );
}

export default Index;

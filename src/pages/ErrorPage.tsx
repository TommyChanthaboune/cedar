import { Heading } from '../components/Typography/Heading';
import { Hero } from '../components/Hero/Hero';

const ErrorPage = (): React.ReactElement => {
  return (
    <Hero>
      <Heading>404: Not Found</Heading>
    </Hero>
  );
};

export { ErrorPage };

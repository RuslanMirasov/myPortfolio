import { Title } from 'components/Typography';
import Section from '../components/Section/Section';

const Blog = () => {
  return (
    <>
      <Section padT="big" padB>
        <Title tag="h1" size="h1">
          BLOG
        </Title>
      </Section>
      <Section full></Section>
    </>
  );
};

export default Blog;

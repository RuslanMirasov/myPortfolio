import Section from '../components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import LandingEffect from 'components/LandingEffect/LandingEffect';

const Home = () => {
  const { popupOpen } = usePopup();
  return (
    <>
      <Section full>
        <LandingEffect />
        <TitleBox>
          <Text>Hello, my name is Ruslan and I am</Text>
          <Title tag="h1" size="h1">
            FRONT-END <br />
            DEVELOPER
          </Title>
          <Text>
            Development of adaptive, cross-browser, and cross-platform <br />
            web applications with readable, semantic, and clean code <br />
            based on your PSD or Figma design layout.
          </Text>
          <ButtonsList>
            <Button onClick={() => popupOpen('request', 'Place an order', 'Fill out the form and I will contact you shortly.')}>
              View portfolio
            </Button>
          </ButtonsList>
        </TitleBox>
      </Section>
    </>
  );
};

export default Home;

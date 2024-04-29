import { useTranslation } from 'react-i18next';
import Section from 'components/Section/Section';
import { ContactsList } from 'components/Contacts';
import { TitleBox, Title, Text } from 'components/Typography';
import css from './Contacts.module.scss';
import { RequestForm } from 'components/Forms';
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <Section padT padB extraClass="section-contacts">
      <div className={css.Contacts}>
        <div className={css.ContactsLeft}>
          <TitleBox>
            <Title tag="h2" size="h3">
              {t('contacts')}
            </Title>
          </TitleBox>
        </div>
        <div className={css.ContactsRight}>
          <ContactsList />
          <div className={css.ContactForm}>
            <TitleBox width="530">
              <Title tag="h3" size="h4">
                {t('contacts_title')}
              </Title>
              <Text size="big">{t('contacts_subtitle')}</Text>
            </TitleBox>
            <RequestForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;

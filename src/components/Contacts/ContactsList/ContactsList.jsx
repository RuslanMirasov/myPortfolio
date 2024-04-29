import { useTranslation } from 'react-i18next';
import Grid from 'components/Grid/Grid';
import { ContactItem } from 'components/Contacts';
import css from './ContactsList.module.scss';

const ContactsList = () => {
  const { t } = useTranslation();
  return (
    <Grid tag="ul" extraClass={css.ContactsList} col={[2, 2, 1]} gap={[30, 20]}>
      <li>
        <ContactItem href="tel:+490000000" icon="phone" title={t('Phone')}>
          +49 (000) 000-00-00
        </ContactItem>
      </li>
      <li>
        <ContactItem href="mailto:info@mirasov.dev" icon="email" title="Email">
          info@mirasov.dev
        </ContactItem>
      </li>
      <li>
        <ContactItem href="https://wa.me/+380962167126" icon="watsup" title="Watsapp">
          +38 (096) 216-71-26
        </ContactItem>
      </li>
      <li>
        <ContactItem href="https://t.me/mirasovdev" icon="telegram" title="Telegram">
          @mirasovdev
        </ContactItem>
      </li>
    </Grid>
  );
};

export default ContactsList;

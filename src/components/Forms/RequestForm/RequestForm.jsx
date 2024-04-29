import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Fieldset, Form, Input } from '..';

const RequestForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();

  const sendRequestForm = form => {
    const formData = form;
    setLoading();

    const formObject = {};
    for (const [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    console.log(formObject);

    setTimeout(() => {
      unsetLoading();
      popupOpen('confirm');
    }, 1500);
  };

  return (
    <Form onSubmit={sendRequestForm}>
      <Input type="hidden" name="subject" value="Request from mirasov.dev" />
      <Fieldset col="2">
        <Input type="text" name="name" label="Name" placeholder="Christoph" required />
        <Input type="email" name="email" label="Email" placeholder="example@example.com" required />
        <Input type="tel" name="phone" label="Telefonnumer" placeholder="+490000000000" />
        <Input type="text" name="link" label="Link to design layout" placeholder="Link to Figma..." />
        <Input type="textarea" name="massege" label="Nachricht" placeholder="Hallo..." />
        <Fieldset col="1" label="Datenschutzbestimmungen">
          <Input
            type="checkbox"
            name="agree"
            label="Wenn Sie auf die Schaltfläche klicken, erklären Sie sich mit den Datenschutzbestimmungen einverstanden."
            value="ok"
            required
          />
        </Fieldset>
      </Fieldset>
      <ButtonsList>
        <Button full size="big">
          Send a message
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default RequestForm;

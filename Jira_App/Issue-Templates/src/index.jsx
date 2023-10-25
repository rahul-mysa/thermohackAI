import ForgeUI, {
  render,
  Form,
  Fragment,
  useState,
  Text,
  IssuePanel,
  Button,
  ModalDialog,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Select,
  Option,
  // TextField,  // Commented out the unused components
  // Image,
} from "@forge/ui";

const App = () => {
  const [formState, setFormState] = useState(undefined);
  const [isOpen, setOpen] = useState(false);

  const onSubmit = async (formData) => {
    setFormState(formData);
  };

  return (
    <Fragment>
      <Button
        text={`Choose Template`}
        onClick={() => setOpen(true)}
      />

      {isOpen && (
        <ModalDialog header="Bug Retest" onClose={() => setOpen(false)}>
          <Form onSubmit={onSubmit}>
            <RadioGroup name="status" label="Status">
              <Radio value="Pass" label="Pass" />
              <Radio value="Fail" label="Fail" />
            </RadioGroup>
            <CheckboxGroup name="platforms" label="Platforms">
              <Checkbox value="Android13" label="Android 13" />
              <Checkbox value="Android11" label="Android 11" />
              <Checkbox value="iOS17" label="iOS 17" />
              <Checkbox value="iOS16" label="iOS 16" />
            </CheckboxGroup>
            <Select name="appVersion" isRequired>
              <Option label="3.51" value="3.51" />
              <Option label="3.50" value="3.50" />
              <Option label="3.49" value="3.49" />
            </Select>
            <Text content="Cloud Version:" />
            <Select name="cloudVersion" isRequired>
              <Option label="Production" value="Production" />
              <Option label="Development" value="Development" />
            </Select>
          </Form>
        </ModalDialog>
      )}
      {formState && <Text>{JSON.stringify(formState)}</Text>}
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
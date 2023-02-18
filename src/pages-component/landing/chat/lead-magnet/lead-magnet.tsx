import { Dispatch, FC, SetStateAction } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { LEAD_MAGNET_FORM_LINK } from "@/helpers/constants";

import Form from "../form/form";

const urlHtml = LEAD_MAGNET_FORM_LINK;

interface FormProps {
  setState: Dispatch<SetStateAction<boolean>>;
}
const CustomForm: FC<FormProps> = ({ setState }) => (
  <MailchimpSubscribe
    url={urlHtml}
    // @ts-ignore
    render={({ subscribe, status, message }) => (
      <>
        <Form
          status={status}
          // @ts-ignore
          message={message}
          onState={setState}
          onValidated={(formData) => {
            subscribe(formData);
          }}
        />
      </>
    )}
  />
);

export default CustomForm;

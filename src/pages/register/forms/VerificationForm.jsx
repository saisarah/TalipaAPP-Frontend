import { Button, Form } from "antd";
import { useContext } from "react";
import FormItem from "../../../components/FormItem";
import { RegistrationContext } from "../../../contexts/RegistrationContext";
import { useOtp } from "../useOtp";

export const VerificationForm = () => {
  const { data, setStep } = useContext(RegistrationContext);
  const { contact_number } = data;

  const { sendOtp, isSending, throttle } = useOtp();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form layout="vertical" onFinish={handleSubmit}>
        <div className="mb-4">
          <span className="text-lg font-bold">
            Your 1 step away from registering
          </span>
          <div>
            We just need to verify your phone number. Click the Send Code button
            and we will send a Verification code to your phone number.
          </div>
        </div>
        <FormItem
          label="Phone"
          inputProps={{
            value: contact_number,
            disabled: true,
            prefix: "+63",
          }}
        />

        <FormItem
          label="Code"
          name="code"
          inputProps={{
            suffix: (
              <Button
                onClick={() => sendOtp(contact_number)}
                loading={isSending}
                type="link"
                disabled={throttle}
              >
                {throttle > 0 ? `Resend in ${throttle}s` : "Send Code"}
              </Button>
            ),
          }}
        />

        <Button
          className="mb-4"
          block
          size="large"
          htmlType="submit"
          // loading={registering}
          type="primary"
        >
          Submit
        </Button>
        <Button
          className="mb-4"
          block
          size="large"
          onClick={() => setStep((step) => step - 1)}
        >
          Go back
        </Button>
      </Form>
    </div>
  );
};

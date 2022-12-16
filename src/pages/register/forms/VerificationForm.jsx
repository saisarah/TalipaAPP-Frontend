import { Button, Form } from "antd";
import { toFormData } from "axios";
import FormItem from "../../../components/FormItem";
import { useRegistrationContext } from "../../../contexts/RegistrationContext";
import { useFarmerRegistration } from "../useFarmerRegistration";
import { useOtp } from "../useOtp";

export const VerificationForm = () => {
  const { data, setStep } = useRegistrationContext();
  const { mutate, isLoading } = useFarmerRegistration();
  const { contact_number } = data;

  const { sendOtp, isSending, throttle } = useOtp();

  const handleSubmit = ({ code }) => {
    if (isLoading) return;
    const formData = toFormData({ ...data, code });
    mutate(formData);
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
          rules={[{ required: true }]}
          // required
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
          className="my-4"
          block
          size="large"
          htmlType="submit"
          type="primary"
          loading={isLoading}
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

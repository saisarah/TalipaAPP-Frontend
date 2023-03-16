import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { getErrorMessage } from "@/helpers/Http";
import { useOtp } from "@/query/mutations/useOtp";
import { useRegistration } from "@/query/mutations/useRegistration";
import { Button, Form, notification } from "antd";
import { toFormData } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormItem from "../../../../components/FormItem";
import TermsAndCondition from "./TermsAndCondition";

export const VerificationForm = () => {
  const navigate = useNavigate();
  const { data, setStep, accountType } = useRegistrationContext();
  const { sendOtp, isSending, throttle } = useOtp();
  const { mutate: register, isLoading } = useRegistration(accountType, {
    onSuccess() {
      notification.success({
        message: "Your account has been successfully registered.",
      });
      navigate("/", { replace: true });
    },
    onError(e) {
      notification.error({ message: getErrorMessage(e) });
    },
  });

  useEffect(() => {
    // sendOtp(data.contact_number);
  }, []);

  const handleSubmit = ({ code }) => {
    if (isLoading) return;

    const formData = toFormData({ ...data, code });

    register(formData);
  };

  return (
    <div>
      <Form layout="vertical" onFinish={handleSubmit}>
        <div className="mb-4">
          <span className="text-lg font-bold">
            You're 1 step away from registering
          </span>
          <div>
            We just need to verify your phone number. Click the Send Code button
            and we will send a Verification code to your phone number.
          </div>
        </div>
        <FormItem
          label="Phone"
          inputProps={{
            value: data.contact_number,
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
                onClick={() => sendOtp(data.contact_number)}
                loading={isSending}
                type="link"
                disabled={throttle}
              >
                {isSending
                  ? "Sending"
                  : throttle > 0
                  ? `Resend in ${throttle}s`
                  : "Send Code"}
              </Button>
            ),
          }}
        />
        <TermsAndCondition />

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

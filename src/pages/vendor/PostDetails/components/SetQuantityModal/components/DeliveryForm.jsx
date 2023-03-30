import { getErrorMessage } from "@/helpers/Http";
import { useCurrentUserAddress } from "@/query/queries/useCurrentUserQuery";
import { Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import { useGetTransportifyQuote, useVehicles } from "../SetQuantityModal";

export const DeliveryForm = ({ form, setModalProps, post_id, onNext }) => {
  const { mutate, isLoading } = useGetTransportifyQuote({
    onSuccess(quote) {
      onNext({ 
        quote,
        address: form.getFieldValue('delivery_address'),
        address_note: form.getFieldValue('address_note')
      })
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });

  const { data: vehicles, isLoading: fetchingVehicles } = useVehicles();
  const { isLoading: isAddressLoading } = useCurrentUserAddress({
    onSuccess(address) {
      if (!form.getFieldValue("delivery_address"))
        form.setFieldValue(
          "delivery_address",
          `${address.house_number} ${address.street}, ${address.barangay}, ${address.municipality}`
        );
    },
  });

  useEffect(() => {
    setModalProps(    {
      okText: "Next",
      cancelText: "Back",
      onOk() {
        if (isLoading) return;
        mutate({
          vehicle_id: form.getFieldValue("vehicle_id"),
          address: form.getFieldValue("delivery_address"),
          post_id: post_id,
        });
      },
      okButtonProps: { loading:isLoading }
    })

    return () => {
      setModalProps({})
    }
  }, [isLoading])

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        className="mb-4"
        label="Delivery Address"
        name="delivery_address"
      >
        <Input.TextArea
          className="h-auto"
          size="large"
          autoSize={{ minRows: 1, maxRows: 4 }}
          disabled={isAddressLoading}
        />
      </Form.Item>

      <Form.Item className="mb-4" label="Address Note" name="address_note">
        <Input.TextArea
          className="h-auto"
          size="large"
          autoSize={{ minRows: 1, maxRows: 2 }}
        />
      </Form.Item>

      <Form.Item
        className="mb-4"
        label="Delivery Option"
        name="delivery_option"
        initialValue={0}
      >
        <Select size="large">
          <Select.Option value={0}>Transportify</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Choose Vehicle" name="vehicle_id">
        <Select size="large" loading={fetchingVehicles}>
          {vehicles &&
            vehicles.map((vehicle) => (
              <Select.Option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
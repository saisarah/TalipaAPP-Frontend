import { fetchVehicles, getQuote } from "@/apis/Transportify";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Form, Modal
} from "antd";
import { useState } from "react";
import { useQuantityReducer } from "../../hooks/useQuantityReducer";
import { ConfirmationForm } from "./components/ConfirmationForm";
import { DeliveryForm } from "./components/DeliveryForm";
import { QuantityForm } from "./components/QuantityForm";

export const useVehicles = () => {
  return useQuery(["transportify", "vehicles"], fetchVehicles, {
    select(data) {
      return data.filter(({ id }) => id !== 34); //Filter out Economy
    },
  });
};

export const useGetTransportifyQuote = (option) => {
  return useMutation(getQuote, option);
};

export const totalReducer = (total, quantity) => {
  return total + quantity.quantity * quantity.value;
};

export const totalQuantityReducer = (acm, quantity) => {
  return acm + quantity.quantity;
};

export const SetQuantityModal = ({ open, setOpen, post, setOrder }) => {
  // const [prices, dispatch] = useQuantityReducer(post.prices);

  const [prices, dispatch] = useQuantityReducer(post.prices);
  const [form] = Form.useForm()
  const [delivery, setDelivery] = useState(null)
  const [step, setStep] = useState(0);

  const [modalProps, setModalProps] = useState({})

  const onCancel = () => {
    if (step === 0) return setOpen(false)
    setStep(step => step - 1)
  }

  return (
    <Modal
      open={open}
      title={`Order ${post.crop.name}`}
      onCancel={onCancel}
      centered
      bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
      maskClosable={false}
      {...modalProps}
    >
      {/* {forms[step].form} */}
      {step===0 && (
        <QuantityForm
          setModalProps={setModalProps}
          dispatch={dispatch}
          prices={prices}
          setStep={setStep}
          post={post}
        />
      )}

      {step===1 && (
        <DeliveryForm 
          setModalProps={setModalProps}
          form={form}
          onNext={delivery => {
            setDelivery(delivery)
            setStep(step => step + 1)
          }}
          post_id={post.id}
        />
      )}

      {step===2 && (
        <ConfirmationForm
          prices={prices} 
          delivery={delivery}
          setModalProps={setModalProps}
          setOrder={setOrder}
          setOpen={setOpen}
          post_id={post.id}
        />
      )}
    </Modal>
  );
};


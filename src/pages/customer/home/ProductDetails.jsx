import { ArrowLeftOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ProductDetails({ setIsOpen, isOpen }) {
  const [quantity, setQuantity] = useState(10);

  const increment = () => setQuantity((quantity) => quantity + 1);
  const decrement = () => setQuantity((quantity) => Math.max(quantity - 1, 10));

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          variants={{
            hidden: { y: "100vh", opacity: 0 },
            visible: { y: "0", opacity: 1, transition: { duration: 0.3 } },
            exit: { y: "100vh" },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-30 mx-auto flex min-h-screen max-w-md flex-col bg-[#283618]"
        >
          <div className="p-8 px-4">
            <ArrowLeftOutlined
              onClick={() => setIsOpen(false)}
              className="text-white"
            />
          </div>
          <div className="talipaapp-scrollbar flex flex-grow flex-col overflow-y-auto  rounded-t-3xl bg-white">
            <img
              src="https://via.placeholder.com/500x350"
              className="aspect-video w-full"
            />

            <div className="flex-grow p-4">
              <div className="text-2xl font-bold">Repolyo</div>
              <p className="mt-4 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore error eligendi temporibus! Incidunt dignissimos
                eveniet aliquid sit voluptas quae amet esse laudantium nostrum
                deleniti, nemo corporis ipsam aliquam quia eligendi? Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Repellat
                asperiores, quia est corrupti doloribus, ut cupiditate autem
                accusamus in quis a perspiciatis eos at quaerat dolores? Quia
                ullam aliquid quidem. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repellat asperiores, quia est corrupti
                doloribus, ut cupiditate autem accusamus in quis a perspiciatis
                eos at quaerat dolores? Quia ullam aliquid quidem.
              </p>
            </div>
            <div className="sticky bottom-0 bg-white p-4">
              <div className="flex justify-between">
                <span className="text-lg font-bold">₱{quantity * 10}.00</span>
                <div className="flex items-center gap-1">
                  <span onClick={decrement}>
                    <MinusCircleOutlined />
                  </span>
                  <span>{quantity}kg</span>
                  <span onClick={increment}>
                    <PlusCircleOutlined />
                  </span>
                </div>
              </div>
              <button className="mt-2 w-full rounded bg-[#606C38] px-8 py-2 text-sm font-semibold text-white">
                Purchase
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
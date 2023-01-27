import { currency } from "@/helpers/utils";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const SetQuantityStraight = ({ unit, isOpen, setIsOpen, price, title, caption }) => {

    const [value, setValue] = useState(1)
  
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-10 bg-black/25"
            ></motion.div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="inset-x fixed bottom-0 z-20 rounded-lg border bg-white p-4 w-full"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-black">{title}</h1>
                <p className="whitespace-pre-wrap">{caption}</p>
  
                <Divider />
                
                <div className="text-3xl font-bold">{currency(price.value)}/{unit}</div>
  
                <div className="flex mt-4">
                  <Button size="small" onClick={() => setValue(i => Math.max(0, i-1))} className="shadow" icon={<MinusOutlined />} />
                  <input onChange={e => setValue(e.target.value)} value={value} type="number" className="outline-none text-center w-16 appearance-none" min={0}/>
                  <Button size="small" onClick={() => setValue(i => Math.min(i+1, price.stocks))} className="shadow" icon={<PlusOutlined />} />
                </div>
  
              </div>
  
              <div className="flex justify-between mt-4">
                <span>Total: </span>
                <span className="text-lg font-bold">{currency(value * price.value)}</span>
              </div>
  
              <Button size="large" className="mt-4" type="primary" block>
                Proceed
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };
  
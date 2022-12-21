import {
    DeleteOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import { Button, Select } from "antd";
import { required } from "../rules";
import FormItem from "../../../../components/FormItem";

export const allSizes = ["Small", "Medium", "Large"]

export const PricingForm = ({ sizes, setSizes, unit }) => {
    // Diko rin gets codes ko rito
    // basta ang purpose neto is to prevent size duplication
    const availableSizes = allSizes.filter(size => !sizes.some(selectedSize => selectedSize.size == size)).map(size => ({ value: size }))

    const addSize = () => {
        setSizes((sizes) => [...sizes, { size: availableSizes[0].value, price: null, stock: null }])
    }

    const removeSize = (size) => {
        setSizes(sizes => sizes.filter(_size => _size.size != size))
    }

    const updateSize = (selectedSize, updater) => {
        setSizes(sizes => sizes.map(size => {
            if (size.size == selectedSize) return updater(size)
            return size
        }))
    }

    const updateSizeValue = (size, newValue) => {
        updateSize(size, (oldSize) => {
            return { ...oldSize, size: newValue }
        })
    }

    const updatePrice = (size, e) => {
        updateSize(size, (oldSize) => {
            return { ...oldSize, price: e.target.value }
        })
    }

    const updateStock = (size, e) => {
        updateSize(size, (oldSize) => {
            return { ...oldSize, stock: e.target.value }
        })
    }

    return (
        <>
            {sizes.map(({ size, value }, i) => (
                <div className="flex gap-2" key={size}>
                    <div className="grid grid-cols-3 gap-2 flex-grow">
                        <FormItem label="Size">
                            <Select value={size} onChange={newVal => updateSizeValue(size, newVal)} className="rounded" placeholder="Select size" size="large" options={[{ value: size }, ...availableSizes]} />
                        </FormItem>
                        <FormItem rules={required()} onChange={e => updatePrice(size, e)} type="number" label="Price" placeholder="(e.g. ₱20)" inputProps={{ prefix: "₱", suffix: `/${unit}`, min: 1 }} />
                        <FormItem rules={required()} onChange={e => updateStock(size, e)} tooltip="Number of available commodities" type="number" label="Stocks" inputProps={{ suffix: `${unit}`, min: 1 }} />
                    </div>
                    {sizes.length > 1 &&
                        <div className="flex items-center">
                            <Button onClick={() => removeSize(size)} icon={<DeleteOutlined />} type="text" />
                        </div>
                    }
                </div>
            ))}

            {availableSizes.length > 0 &&
                <div className="flex justify-end">
                    <Button onClick={addSize} icon={<PlusOutlined />}>Add Size</Button>
                </div>
            }
        </>
    )
}
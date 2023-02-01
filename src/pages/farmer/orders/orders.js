import { sleep } from "@/helpers/utils";

const orders = [
    {
        id: 1,
        vendor: 'ATCOST',
        displayphoto: 'https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' ,
        date: "3 days ago",
        orderName: 'Mangga',
        orderQuantity: '100kg',
        location: 'NCR, Caloocan City',
        status: 'pending',
        totalPrice: 1000.00,
    }
]


export const getOrders = async() => {
    await sleep(500);
    return orders
}

export const getOrder = async(id) => {
    const orders = await getOrders()
    return orders.find(order => order.id === id)
}
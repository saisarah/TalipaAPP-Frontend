import { sleep } from "@/helpers/utils"


const orders = [
    {
        id: 1,
        name: 'Midel Dela Cruz',
        displayphoto: "image",
        timestamp: '3 days ago',
        order_name: 'Manga',
        quantity: 100,
        price: 50,
        location: 'NCR, CALOOCAN CITY',
        status: 'Pending',
        total: 5000
    },
    {
        id: 2,
        name: 'Tony Gojar',
        displayphoto: "image",
        timestamp: '3 days ago',
        order_name: 'Manga',
        quantity: 100,
        price: 50,
        location: 'NCR, CALOOCAN CITY',
        status: 'Pending',
        total: 5000
    }, 
    {
        id: 3,
        name: 'Ben Bacalla',
        displayphoto: "image",
        timestamp: '3 days ago',
        order_name: 'Manga',
        quantity: 100,
        price: 50,
        location: 'NCR, CALOOCAN CITY',
        status: 'Pending',
        total: 5000
    },
    
]

export const getOrders = async () => {
    await sleep(500)
    return orders
}

export const getOrder = async (id) => {
    const orders = await getOrders()
    return orders.find(order => order.id == id)
}

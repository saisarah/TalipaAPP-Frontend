import { sleep } from "../../helpers/utils"

const posts = [
    {
        id: 1,
        author: {
            name: 'Lenard Mangay-ayam',
            image: '/assets/temp/feed/lenard.png',
        },
        created_at: 'Yesterday',
        caption: `Lorem ipsum dolor sit am`,
        image: '/assets/temp/feed/image1.png'
    },
    {
        id: 2,
        author: {
            name: 'Juan Paolo Ortega',
            image: '/assets/temp/feed/pao.png',
        },
        created_at: 'Yesterday',
        caption: `Collecting orders
        Indian
        Biyakin mix hilaw
        Pitas ngaun Maya din Po dating
        Kaya sure na bago at malutong`,
        image: '/assets/temp/feed/image2.png'        
    },
    {
        id: 3,
        author: {
            name: 'Ruel Almonia',
            image: '/assets/temp/feed/ruel.png',
        },
        created_at: '2 days ago',
        caption: `Mango Hinog
        Onhand na po ito.
        Open for delivery , meet up and pick up`,
        image: '/assets/temp/feed/image3.png'
    }
]

export const getPosts = async () => {
    await sleep(500)
    return posts
}

export const getPost = async (id) => {
    await sleep(500)
    return posts.find(post => post.id == id)
}

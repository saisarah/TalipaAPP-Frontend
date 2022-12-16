import { sleep } from "../../../../helpers/utils"


const posts = [
    {
        id: 1,
        name: 'Joshua Villanueva',
        title: 'Sample Title',
        description: 'Sample description',

    },

]

export const getPosts = async () => {
    await sleep(500)
    return posts
}

export const getGroup = async (id) => {
    const posts = await getPosts()
    return posts.find(post => post.id == id)
}

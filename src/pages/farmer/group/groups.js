import { sleep } from "../../../helpers/utils"


const groups = [
    {
        id: 1,
        name: 'Totong Lipay Farmers Association',
        type: 'Association',
        members_count: 235,
    },
    {
        id: 2,
        name: 'Federation of Free Farmers',
        type: 'Association',
        members_count: 235,
    },
    {
        id: 3,
        name: 'Maharlika Organic Food Producers and Farmers Association',
        type: 'Association',
        members_count: 235,
    }
]

export const getGroups = async () => {
    await sleep(500)
    return groups
}

export const getGroup = async (id) => {
    const groups = await getGroups()
    return groups.find(group => group.id === id)
}

import {data} from '../data/index.js'

export default {
    getAllItems: () => {
        return data;
    },
    getItem: (id) => {
        const item = data.find((x) => x.id == id)
        return item;
    }
}
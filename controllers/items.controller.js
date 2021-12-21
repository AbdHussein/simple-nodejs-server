import {Items} from '../models/index.js'

export default {
    getItems: (req, res) => {
        res.json({
            data: Items.getAllItems()
        });
    },
    getItemByID: (req, res) => {
        const item = Items.getItem(req.params.id);
        if(item){
            res.json({
                data: item
            });
        }else{
            res.status(404).json({
                message: 'item not found'
            });
        }
    }
}
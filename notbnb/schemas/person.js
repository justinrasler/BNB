import { number } from "prop-types";

export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Please sue first name and last name',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'string',
        options: {
            sournce: 'name',
            maxLength: 100
        }
    },
    {
        name: 'id',
        title: 'ID',
        type: 'number'
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image'
    }
    ]
}
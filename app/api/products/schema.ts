import { number, z } from 'zod';

const schema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    price: z.number().positive()
})

export default schema;
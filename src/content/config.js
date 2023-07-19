// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const expCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        project: z.string(),
        yearStart: z.number(),
        monthStart: z.number(),
        yearEnd: z.number(),
        monthEnd: z.number(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        responsibilities: z.array(z.string()),
    }),
})

const eduCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        location: z.string(),
        yearEnd: z.number(),
        monthEnd: z.number(),
        relevantCourses: z.array(z.string()),
        image: z.string().optional(),
        homepage: z.string().url(),
        degree: z.string(),
        major: z.string(),
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    experience: expCollection,
    education: eduCollection,
}

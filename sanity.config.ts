import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: '707zlrna',
    dataset: 'production',
    title: 'blog15-studio',
    apiVersion: '2023-06-05',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }

})

export default config;
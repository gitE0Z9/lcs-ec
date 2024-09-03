
import path from 'path';
import swaggerAutogen from 'swagger-autogen';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const doc = {
    info: {
        title: 'LSC EC API',
        description: '湛積 電商作業'
    },
    host: 'localhost:3000'
};
const outputFile = './swagger.json';
const endpointsFiles = [path.join(dirname(fileURLToPath(import.meta.url)), 'index.ts')];
swaggerAutogen()(outputFile, endpointsFiles, doc);
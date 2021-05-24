import path from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export { default as server } from './server';
export { default as database } from './database';
export { default as fakes } from './fakes';

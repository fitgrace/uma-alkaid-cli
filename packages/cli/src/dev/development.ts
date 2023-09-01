import { IDevelopmentConfig } from '../interface';

const runDev = async ({ host, port }: IDevelopmentConfig) => {
  console.log('runDev =', host, port);
};

export default runDev;

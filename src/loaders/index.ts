import expressLoader from './express';

import Logger from './logger';

export default async ({ expressApp }) => {
    
  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};

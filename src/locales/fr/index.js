import about from './about';
import contact from './contact';
import home from './home';
import services from './services';

export const messages = {
  fr: {
    ...about,
    ...contact,
    ...home,
    ...services,
  }
};

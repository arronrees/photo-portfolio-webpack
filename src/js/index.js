import Swup from 'swup';

import '../styles/reset.scss';
import '../styles/style.scss';
import '../styles/home.scss';
import '../styles/header.scss';
import '../styles/workCards.scss';
import '../styles/work.scss';
import '../styles/about.scss';
import '../styles/contact.scss';

import { navSlide } from './other/navSlide';
import { cardEntrance } from './other/cardEntrance';

import { homeEnter } from './animations/homeEnter';
import { animationEnter } from './animations/animationEnter';
import { animationLeave } from './animations/animationLeave';

navSlide();
cardEntrance();

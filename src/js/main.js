import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import './modules/backToTop';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import scrollAnimation from './components/animationScroll';
import preload from './components/preloader';
import './components/preloader';
import './components/shering'

preload(scrollAnimation);
ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
header.init();
lazyLoading.init();

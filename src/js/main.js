import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import scrollAnimation from './components/animationScroll';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
scrollAnimation();
console.log(window.innerWidth)
if (window.innerWidth <= 768) {
    header.init();
}

lazyLoading.init();

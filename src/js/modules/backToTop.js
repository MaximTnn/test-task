import helpers from '../helpers';

/**
* Модуль "Возврат наверх"
*/
const init = () => {
	const className = '.js-back-to-top';
	const shownClass = 'is-shown';

	helpers.$document.on('click.backTop', `${className}`, () => {
		helpers.scrollTo($('body'));
	});

	helpers.$window.on('scroll.backTop', () => {
		const scrollTop = window.pageYOffset;
		const heightDocument =	 $('main').height() - window.innerHeight / 1.5;
		let progress = `${Math.round(scrollTop / heightDocument * 100)}`;
		const button = document.querySelector(className);
		const divPercent = document.querySelector(`${className}__percent`);
		const ClassName = 'is-arrow';

		if (progress >= 100) {
			progress = 100;
			button.classList.add(ClassName);
		} else {
			button.classList.remove(ClassName);
		}
		divPercent.innerHTML = progress;

		if (scrollTop > 300) {
			$(className).addClass(shownClass);
		} else {
			$(className).removeClass(shownClass);
		}
	});
};

const destroy = () => {
	helpers.$window.off('.backTop');
	helpers.$document.off('.backTop');
};

init();

export default {
	init,
	destroy,
};

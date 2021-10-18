import helpers from '../helpers';

function openMenu() {
	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);

		helpers.lockScroll(true, helpers.$header.find('.header__menu'), 'header');

		helpers.$header.addClass('is-menu-opened');
		$('.header__menu').removeClass('is-hidden');

		setImmediate(() => {
			helpers.$body.css('padding-right', `${helpers.getScrollbarWidth()}px`);
			helpers.$header.css('right', `${helpers.getScrollbarWidth()}px`);
		});

		setTimeout(() => {
			$('.header__menu').addClass('is-active');
			$('.js-burger').removeClass('is-disabled').attr('disabled', false);

			resolve();
		}, 100);
	});
}

function closeMenu() {
	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);

		helpers.lockScroll(false, helpers.$header.find('.header__menu'), 'header');
		helpers.$body.css('padding-right', '');
		helpers.$header.css('right', '');

		helpers.$header.removeClass('is-menu-opened');

		$('.header__menu').removeClass('is-active');

		setTimeout(() => {
			$('.header__menu').addClass('is-hidden');
			$('.js-burger').removeClass('is-disabled').attr('disabled', false);

			resolve();
		}, 500);
	});
}

function toggleMenu(event) {
	event.preventDefault();
	event.stopPropagation();

	if ($(event.currentTarget).hasClass('is-active')) {
		$(event.currentTarget).removeClass('is-active');
		closeMenu();
	} else {
		$(event.currentTarget).addClass('is-active');
		openMenu();
	}
}

function headerFix() {
	if (window.pageYOffset > 20) {
		$('.header').addClass('fix');
	} else {
		$('.header').removeClass('fix');
	}
}

const allHeaderBtn = $('.js-to-anchor');
const allIdSection = [];

$(allHeaderBtn).each((el) => {
	allIdSection.push($(allHeaderBtn[el]).attr('href'));
});

function addActiveBtn(id, idx) {
	const section = $(`${id}`);
	const topPosSection = section.offset().top;
	const heightSection = section[0].offsetHeight;
	const scrollPos = window.pageYOffset;

	if (scrollPos + 50 >= topPosSection && scrollPos <= heightSection - 50) {
		$(allHeaderBtn[idx]).addClass('active');
	} else {
		$(allHeaderBtn[idx]).removeClass('active');
		if ($('.js-to-anchor.active').length === 0) {
			$(allHeaderBtn[allHeaderBtn.length - 1]).addClass('active');
		}
	}
}

function init() {
	if (window.innerWidth <= 768) {
		helpers.$header = $('.header');

		$('.js-burger').on('click.header', toggleMenu);

		helpers.$document
			.on('click.header', (e) => {
				let $container = $('.header__menu');

				if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
					closeMenu();
					$('.js-burger').removeClass('is-active');
				}
			})
			.on('keyup.header', (e) => {
				if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
					closeMenu();
					$('.js-burger').removeClass('is-active');
				}
			});
	}

	window.addEventListener('scroll', () => {
		if (window.innerWidth >= 768) {
			headerFix();
		}

		setTimeout(() => {
			allIdSection.map((id, index) => addActiveBtn(id, index));
		}, 500);
	});
}

function destroy() {
	$('.js-burger').off('.header');
	helpers.$document.off('.header');
}

export default {
	init,
	destroy,
	openMenu,
	closeMenu,
};

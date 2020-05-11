let navToggle = document.querySelector('.page-header__toggle');
let navMain = document.querySelector('.main-nav');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMian.classList.add('main-nav--opened');
	} else {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
	// if (navToggle.classList.contains('page-header__toggle--closed')) {

	// 	navToggle.classList.remove('page-header__toggle--closed');
	// 	navToggle.classList.add('page-header__toggle--opened');

	// }  else {

	//  	navToggle.classList.remove('page-header__toggle--opened');
	//  	navToggle.classList.add('page-header__toggle--closed');

	// }
});
navToggle.addEventListener('click', function() {
	if (navToggle.classList.contains('page-header__toggle--closed')) {

		navToggle.classList.remove('page-header__toggle--closed');
		navToggle.classList.add('page-header__toggle--opened');

	}  else {

	 	navToggle.classList.remove('page-header__toggle--opened');
	 	navToggle.classList.add('page-header__toggle--closed');

	}
});

let navToggleUser = document.querySelector('.main-nav__user-toggle');
let navUser = document.querySelector('.main-nav__user-items');

navToggleUser.addEventListener('click', function() {
	if (navUser.classList.contains('main-nav__user-items--closed')) {
		navUser.classList.remove('main-nav__user-items--closed');
		navUser.classList.add('main-nav__user-items--opened');
	} else {
		navUser.classList.remove('main-nav_-user-items--opened');
		navUser.classList.add('main-nav__user-items--closed');
	}
});

let toggleFilter = document.querySelector('.block-search__input-submit');
let blockCategories = document.querySelector('.block-search__categories');

toggleFilter.addEventListener('click', function() {
	event.preventDefault(); 
	if (blockCategories.classList.contains('block-search__categories--closed')) {
		blockCategories.classList.remove('block-search__categories--closed');
		blockCategories.classList.add('block-search__categories--opened');
	} else {
		blockCategories.classList.remove('block-search__categories--opened');
		blockCategories.classList.add('block-search__categories--closed');
	}
});

let toggleAllCat = document.querySelector('.block-search__all-categories-toggle');
let blockAllCat = document.querySelector('.block-search__all-categories-items');

toggleAllCat.addEventListener('click', function() {
	 
	if (blockAllCat.classList.contains('block-search__all-categories-items--closed')) {
		blockAllCat.classList.remove('block-search__all-categories-items--closed');
		blockAllCat.classList.add('block-search__all-categories-items--opened');
	} else {
		blockAllCat.classList.remove('block-search__all-categories-items--opened');
		blockAllCat.classList.add('block-search__all-categories-items--closed');
	}
})
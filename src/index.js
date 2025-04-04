const body = document.querySelector('body');

const navButton = document.querySelector('#nav-button');
const navCloseButton = document.querySelector('#nav-modal-close-button');

navButton.addEventListener('click', () => showModal(`#nav-modal`));
navCloseButton.addEventListener('click', () => hideModal(`#nav-modal`));

const navModalLinkHome = document.querySelector('#nav-modal-link-home');
const navModalLinkAbout = document.querySelector('#nav-modal-link-about');
const navModalLinkExperience = document.querySelector('#nav-modal-link-experience');
const navModalLinkContact = document.querySelector('#nav-modal-link-contact');

navModalLinkHome.addEventListener('click', () => hideModal(`#nav-modal`));
navModalLinkAbout.addEventListener('click', () => hideModal(`#nav-modal`));
navModalLinkExperience.addEventListener('click', () => hideModal(`#nav-modal`));
navModalLinkContact.addEventListener('click', () => hideModal(`#nav-modal`));

const noureddineFeathersDetailsId = 'noureddine-feathers-details';
const marksBarbershopDetailsId = 'marks-barbershop-details';
const beByBenjamPappDetailsId = 'bebybenjampapp-details';

const bcTransitDetailsId = 'bc-transit-details';
const chartMakerDetailsId = 'chart-maker-details';
const cellyStatsDetailsId = 'cellystats-details';
const piggySaveDetailsId = 'piggysave-details';
const sakinaDetailsId = 'sakina-details';
const husseinFawazPortfolioDetailsId = 'hussein-fawaz-portfolio-details';
const zeinabFawazPortfolioDetailsId = 'zeinab-fawaz-portfolio-details';

const noureddineFeathersDetailsButton = document.querySelector(`#${noureddineFeathersDetailsId}-button`);
const marksBarbershopDetailsButton = document.querySelector(`#${marksBarbershopDetailsId}-button`);
const beByBenjamPappDetailsButton = document.querySelector(`#${beByBenjamPappDetailsId}-button`);

const bcTransitDetailsButton = document.querySelector(`#${bcTransitDetailsId}-button`);
const chartMakerDetailsButton = document.querySelector(`#${chartMakerDetailsId}-button`);
const cellyStatsDetailsButton = document.querySelector(`#${cellyStatsDetailsId}-button`);
const piggySaveDetailsButton = document.querySelector(`#${piggySaveDetailsId}-button`);
const sakinaDetailsButton = document.querySelector(`#${sakinaDetailsId}-button`);
const husseinFawazPortfolioDetailsButton = document.querySelector(`#${husseinFawazPortfolioDetailsId}-button`);
const zeinabFawazPortfolioDetailsButton = document.querySelector(`#${zeinabFawazPortfolioDetailsId}-button`);

noureddineFeathersDetailsButton.addEventListener('click', () => showModal(`#${noureddineFeathersDetailsId}-modal`));
marksBarbershopDetailsButton.addEventListener('click', () => showModal(`#${marksBarbershopDetailsId}-modal`));
beByBenjamPappDetailsButton.addEventListener('click', () => showModal(`#${beByBenjamPappDetailsId}-modal`));

bcTransitDetailsButton.addEventListener('click', () => showModal(`#${bcTransitDetailsId}-modal`));
chartMakerDetailsButton.addEventListener('click', () => showModal(`#${chartMakerDetailsId}-modal`));
cellyStatsDetailsButton.addEventListener('click', () => showModal(`#${cellyStatsDetailsId}-modal`));
piggySaveDetailsButton.addEventListener('click', () => showModal(`#${piggySaveDetailsId}-modal`));
sakinaDetailsButton.addEventListener('click', () => showModal(`#${sakinaDetailsId}-modal`));
husseinFawazPortfolioDetailsButton.addEventListener('click', () => showModal(`#${husseinFawazPortfolioDetailsId}-modal`));
zeinabFawazPortfolioDetailsButton.addEventListener('click', () => showModal(`#${zeinabFawazPortfolioDetailsId}-modal`));

const noureddineFeathersDetailsCloseButton = document.querySelector(`#${noureddineFeathersDetailsId}-close-button`);
const marksBarbershopDetailsCloseButton = document.querySelector(`#${marksBarbershopDetailsId}-close-button`);
const beByBenjamPappDetailsCloseButton = document.querySelector(`#${beByBenjamPappDetailsId}-close-button`);

const bcTransitDetailsCloseButton = document.querySelector(`#${bcTransitDetailsId}-close-button`);
const chartMakerDetailsCloseButton = document.querySelector(`#${chartMakerDetailsId}-close-button`);
const cellyStatsDetailsCloseButton = document.querySelector(`#${cellyStatsDetailsId}-close-button`);
const piggySaveDetailsCloseButton = document.querySelector(`#${piggySaveDetailsId}-close-button`);
const sakinaDetailsCloseButton = document.querySelector(`#${sakinaDetailsId}-close-button`);
const husseinFawazPortfolioDetailsCloseButton = document.querySelector(`#${husseinFawazPortfolioDetailsId}-close-button`);
const zeinabFawazPortfolioDetailsCloseButton = document.querySelector(`#${zeinabFawazPortfolioDetailsId}-close-button`);

noureddineFeathersDetailsCloseButton.addEventListener('click', () => hideModal(`#${noureddineFeathersDetailsId}-modal`));
marksBarbershopDetailsCloseButton.addEventListener('click', () => hideModal(`#${marksBarbershopDetailsId}-modal`));
beByBenjamPappDetailsCloseButton.addEventListener('click', () => hideModal(`#${beByBenjamPappDetailsId}-modal`));

bcTransitDetailsCloseButton.addEventListener('click', () => hideModal(`#${bcTransitDetailsId}-modal`));
chartMakerDetailsCloseButton.addEventListener('click', () => hideModal(`#${chartMakerDetailsId}-modal`));
cellyStatsDetailsCloseButton.addEventListener('click', () => hideModal(`#${cellyStatsDetailsId}-modal`));
piggySaveDetailsCloseButton.addEventListener('click', () => hideModal(`#${piggySaveDetailsId}-modal`));
sakinaDetailsCloseButton.addEventListener('click', () => hideModal(`#${sakinaDetailsId}-modal`));
husseinFawazPortfolioDetailsCloseButton.addEventListener('click', () => hideModal(`#${husseinFawazPortfolioDetailsId}-modal`));
zeinabFawazPortfolioDetailsCloseButton.addEventListener('click', () => hideModal(`#${zeinabFawazPortfolioDetailsId}-modal`));

function disableBodyScrolling() {
  body.classList.add('overflow-hidden');
  body.classList.remove('overflow-auto');
}

function enableBodyScrolling() {
  body.classList.add('overflow-auto');
  body.classList.remove('overflow-hidden');
}

function showModal(selector) {
  const modal = document.querySelector(selector);
  modal.classList.add('flex');
  modal.classList.remove('hidden');
  modal.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      hideModal(selector);
    }
  });
  disableBodyScrolling();
}

function hideModal(selector) {
  const modal = document.querySelector(selector);
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  enableBodyScrolling();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideModal(`#nav-modal`);
    hideModal(`#${noureddineFeathersDetailsId}-modal`);
    hideModal(`#${marksBarbershopDetailsId}-modal`);
    hideModal(`#${beByBenjamPappDetailsId}-modal`);
    hideModal(`#${bcTransitDetailsId}-modal`);
    hideModal(`#${chartMakerDetailsId}-modal`);
    hideModal(`#${cellyStatsDetailsId}-modal`);
    hideModal(`#${piggySaveDetailsId}-modal`);
    hideModal(`#${sakinaDetailsId}-modal`);
    hideModal(`#${husseinFawazPortfolioDetailsId}-modal`);
    hideModal(`#${zeinabFawazPortfolioDetailsId}-modal`);
    enableBodyScrolling();
  }
});
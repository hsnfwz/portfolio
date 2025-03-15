const body = document.querySelector('body');

const bcTransitDetailsDetailsId = 'bc-transit-details';
const cellyStatsDetailsId = 'cellystats-details';
const piggySaveDetailsId = 'piggysave-details';
const project313DetailsId = 'project313-details';
const husseinFawazPortfolioDetailsId = 'hussein-fawaz-portfolio-details';
const zeinabFawazPortfolioDetailsId = 'zeinab-fawaz-portfolio-details';

const bcTransitDetailsButton = document.querySelector(`#${bcTransitDetailsDetailsId}-button`);
const cellyStatsDetailsButton = document.querySelector(`#${cellyStatsDetailsId}-button`);
const piggySaveDetailsButton = document.querySelector(`#${piggySaveDetailsId}-button`);
const project313DetailsButton = document.querySelector(`#${project313DetailsId}-button`);
const husseinFawazPortfolioDetailsButton = document.querySelector(`#${husseinFawazPortfolioDetailsId}-button`);
const zeinabFawazPortfolioDetailsButton = document.querySelector(`#${zeinabFawazPortfolioDetailsId}-button`);

const bcTransitDetailsCloseButton = document.querySelector(`#${bcTransitDetailsDetailsId}-close-button`);
const cellyStatsDetailsCloseButton = document.querySelector(`#${cellyStatsDetailsId}-close-button`);
const piggySaveDetailsCloseButton = document.querySelector(`#${piggySaveDetailsId}-close-button`);
const project313DetailsCloseButton = document.querySelector(`#${project313DetailsId}-close-button`);
const husseinFawazPortfolioDetailsCloseButton = document.querySelector(`#${husseinFawazPortfolioDetailsId}-close-button`);
const zeinabFawazPortfolioDetailsCloseButton = document.querySelector(`#${zeinabFawazPortfolioDetailsId}-close-button`);

bcTransitDetailsButton.addEventListener('click', () => showModal(`#${bcTransitDetailsDetailsId}-modal`));
cellyStatsDetailsButton.addEventListener('click', () => showModal(`#${cellyStatsDetailsId}-modal`));
piggySaveDetailsButton.addEventListener('click', () => showModal(`#${piggySaveDetailsId}-modal`));
project313DetailsButton.addEventListener('click', () => showModal(`#${project313DetailsId}-modal`));
husseinFawazPortfolioDetailsButton.addEventListener('click', () => showModal(`#${husseinFawazPortfolioDetailsId}-modal`));
zeinabFawazPortfolioDetailsButton.addEventListener('click', () => showModal(`#${zeinabFawazPortfolioDetailsId}-modal`));

bcTransitDetailsCloseButton.addEventListener('click', () => hideModal(`#${bcTransitDetailsDetailsId}-modal`));
cellyStatsDetailsCloseButton.addEventListener('click', () => hideModal(`#${cellyStatsDetailsId}-modal`));
piggySaveDetailsCloseButton.addEventListener('click', () => hideModal(`#${piggySaveDetailsId}-modal`));
project313DetailsCloseButton.addEventListener('click', () => hideModal(`#${project313DetailsId}-modal`));
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
    hideModal(`#${bcTransitDetailsDetailsId}-modal`);
    hideModal(`#${cellyStatsDetailsId}-modal`);
    hideModal(`#${piggySaveDetailsId}-modal`);
    hideModal(`#${project313DetailsId}-modal`);
    hideModal(`#${husseinFawazPortfolioDetailsId}-modal`);
    hideModal(`#${zeinabFawazPortfolioDetailsId}-modal`);
    enableBodyScrolling();
  }
});
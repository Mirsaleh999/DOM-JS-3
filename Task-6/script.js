class SoundController {
    constructor(progressSelector, progressBarSelector, percentageSelector, actionsSelector, progressWidth, progressChangePercentage) {
        this.soundProgress = document.querySelector(progressSelector);
        this.soundProgressBar = document.querySelector(progressBarSelector);
        this.soundPercentageEl = document.querySelector(percentageSelector);
        this.soundActions = document.querySelectorAll(actionsSelector);
        this.soundProgressWidth = progressWidth;
        this.soundProgressChangePercentage = progressChangePercentage;
        this.soundPercentage = 50;

        this.setupListeners();
        this.controlSound(this.soundPercentage);
    }

    setupListeners() {
        this.soundActions.forEach(btn => {
            btn.addEventListener('click', this.handleAction.bind(this));
        });

        this.soundProgressBar.addEventListener('click', this.handleProgressBarClick.bind(this));
    }

    handleAction(event) {
        if (event.target.id === 'increaseSound' && this.soundPercentage <= 100 - this.soundProgressChangePercentage) {
            this.soundPercentage += this.soundProgressChangePercentage;
        } else if (event.target.id === 'decreaseSound' && this.soundPercentage >= 0 + this.soundProgressChangePercentage) {
            this.soundPercentage -= this.soundProgressChangePercentage;
        }

        this.controlSound(this.soundPercentage);
    }

    handleProgressBarClick(event) {
        const percentage = Math.floor(100 * Math.floor(event.clientX - this.soundProgressBar.getBoundingClientRect().left) / this.soundProgressWidth);
        this.soundPercentage = percentage;
        this.controlSound(this.soundPercentage);
    }

    controlSound(percentage) {
        this.soundProgress.style.width = percentage + '%';
        this.soundPercentageEl.innerText = percentage + '%';
    }
}

new SoundController(
    '.soundControlProgress',
    '.soundControlProgressBar',
    '.soundControlPercentage',
    '.soundControlBar button',
    500,
    5
);

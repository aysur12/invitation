document.addEventListener('DOMContentLoaded', () => {
  class CommentCards {
    constructor(container) {
      this.container = container;
      this.cards = Array.from(container.querySelectorAll('.card'));
      this.current =
        this.cards.find((card) => card.classList.contains('card--current')) || this.cards[this.cards.length - 1];
      this.init();
    }

    init() {
      this.cards.forEach((card) => {
        card.addEventListener('click', (e) => this.handleClick(e, card));
        const nextBtn = card.querySelector('.next-btn');
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => this.handleNextClick(e, card));
        }
      });

      if (!this.current) {
        this.current = this.cards[this.cards.length - 1];
        this.cards[0].click();
      }
      this.container.classList.add('cards--active');
    }

    handleClick(event, clickedCard) {
      if (this.current !== clickedCard) {
        this.updateClasses(clickedCard);
      }
    }

    handleNextClick(event, clickedCard) {
      event.stopPropagation();

      if (clickedCard.classList.contains('card-2')) {
        const dateInput = clickedCard.querySelector('.input');
        if (!dateInput || !dateInput.value) {
          alert('Пожалуйста, выбери дату, а потом нажми на кнопку');
          return;
        }
      }

      const nextIndex = (this.cards.indexOf(clickedCard) + 1) % this.cards.length;
      this.updateClasses(this.cards[nextIndex]);
    }

    updateClasses(newCurrent) {
      this.cards.forEach((card) => card.classList.remove('card--current', 'card--out', 'card--next'));
      this.current.classList.add('card--out');
      this.current = newCurrent;
      this.current.classList.add('card--current');

      const nextIndex = (this.cards.indexOf(this.current) + 1) % this.cards.length;
      this.cards[nextIndex].classList.add('card--next');
    }
  }

  document.querySelectorAll('.cards').forEach((container) => new CommentCards(container));
});

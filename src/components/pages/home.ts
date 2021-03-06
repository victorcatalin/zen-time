import gradient from '../generic/gradient'
import './home.css'

const homeEl = document.querySelector('.home') as HTMLDivElement
const customTimerButton = document.querySelector('.home__custom-timer-button') as HTMLButtonElement
const timerButtonEls = document.querySelectorAll('.home__timer-button') as NodeListOf<HTMLButtonElement>

homeEl.addEventListener('animationend', () => {
  const {classList} = homeEl
  if (classList.contains('home--transition-out-left')) {
    classList.add('page--hidden')
    classList.remove('home--transition-out-left')
  } else if (classList.contains('home--transition-out-right')) {
    classList.add('page--hidden')
    classList.remove('home--transition-out-right')
  } else if (classList.contains('home--transition-out-vertical')) {
    classList.add('page--hidden')
    classList.remove('home--transition-out-vertical')
  }
})

export enum HomeTransitionTypes {
  left,
  right,
  vertical,
}

class Home {
  constructor () {
    customTimerButton.onclick = () => {
      this.onClickCustomTimerButton()
    }

    for (let i = 0; i < timerButtonEls.length; i++) {
      const timerButton = timerButtonEls[i]

      timerButton.onclick = () => {
        this.onClickTimerButton(Number(timerButton.getAttribute('data-val')) * 60)
      }
    }
  }

  transitionIn () {
    homeEl.classList.remove('page--hidden')
    homeEl.classList.remove('home--transition-out-left')
    gradient.setGradient(0)
  }

  transitionOut (type: HomeTransitionTypes) {
    switch (type) {
      case HomeTransitionTypes.right:
        homeEl.classList.add('home--transition-out-right')
        return
      case HomeTransitionTypes.vertical:
        homeEl.classList.add('home--transition-out-vertical')
        return
      default:
        homeEl.classList.add('home--transition-out-left')
    }
  }

  public onClickCustomTimerButton () {}
  public onClickTimerButton (t: number) {}
}

export default new Home

const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replayBtn = document.querySelector('#replay');

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        e.target.classList.remove('in');
        e.target.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMsg.classList.add('show');
      }
    });
  });
}

function replay() {
  counter.classList.remove('hide');
  finalMsg.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

replayBtn.addEventListener('click', () => {
  replay();
  runAnimation();
});

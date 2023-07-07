const slides = document.querySelectorAll('.slide');
const counts = document.querySelectorAll('.count');

function slideShow() {
  // get current slide
  const current = document.querySelector('.active');
  //remove active class
  current.classList.remove('active');
  // if there is a nextElementSibling:
  if (current.nextElementSibling) {
    //add active to next slide
    current.nextElementSibling.classList.add('active');
  } else {
    // add active to first one
    slides[0].classList.add('active');
  }

  setTimeout('slideShow()', 3000);
  // 3000 will make 3s per slide which will match our progress bar
}

function slideBar() {
  const currentCount = document.querySelector('.active-count');
  currentCount.classList.remove('active-count');
  if (currentCount.nextElementSibling) {
    currentCount.nextElementSibling.classList.add('active-count');
  } else {
    counts[0].classList.add('active-count');
  }

  setTimeout('slideBar()', 3000);
}

slideShow();
slideBar();

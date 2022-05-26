const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btn.forEach(function (btn) {
      // remove active from other btns
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide other artciles
    articles.forEach(function (artcle) {
      artcle.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

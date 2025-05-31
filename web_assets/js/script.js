//To be added once all done since its too risky
//window.location.href = window.location.href.replace('/web_pages', '');

document.addEventListener('DOMContentLoaded', function () {
  //Load Navbar
  fetch('../web_include/nav.html')
    .then((response) => response.text())
    .then((data) => (document.getElementById('navbar').innerHTML = data));

  fetch('../web_include/footer.html')
    .then((response) => response.text())
    .then((data) => (document.getElementById('footer').innerHTML = data));

  document.querySelectorAll('.w-blog-excerpt').forEach(function (content) {
    let words = content.textContent.trim().split(/\s+/); // Trim and split by spaces
    if (words.length > 20) {
      content.textContent = words.slice(0, 20).join(' ') + '...';
    }
  });

  const toggle_monthly = document.getElementById('toggle-monthly');
  const toggle_yearly = document.getElementById('toggle-yearly');

  toggle_monthly.classList.add('selected');

  toggle_monthly.addEventListener('click', () => {
    toggle_monthly.classList.add('selected');
    toggle_yearly.classList.remove('selected');
  });

  toggle_yearly.addEventListener('click', () => {
    toggle_yearly.classList.add('selected');
    toggle_monthly.classList.remove('selected');
  });

  const features_table = document.getElementById('w-features-table');
  const table_row = document.querySelectorAll('.w-row-label');

  table_row.forEach((td) => {
    const value = td.textContent.trim();
    switch (value) {
      case 'check':
        td.innerHTML =
          '<div class="w-table-icon"><img src="../web_assets/images/Check.png" alt="Check Icon"></div>';
        break;
      case 'cross':
        td.innerHTML =
          '<div class="w-table-icon"><img src="../web_assets/images/Cross.png" alt="Cross Icon"></div>';
        break;
      default:
        break;
    }
  });

  const faq_card = document.querySelectorAll('.w-faq-card');

  faq_card.forEach((card) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('w-faq-open')) {
        card.classList.remove('w-faq-open');
      } else {
        card.classList.add('w-faq-open');
        faq_card.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove('w-faq-open');
          }
        });
      }
    });
  });
});

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
　//クリック時に、各dtの親要素に対してappearを付与

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
　　　//dt≠elであれば、appearを外す
        }
      });
    });
  });
}

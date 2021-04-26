import anime from 'animejs';

export const useAnime = (
  params: anime.AnimeParams,
  fn: (el: HTMLElement) => HTMLElement[] | NodeListOf<HTMLElement> = (el) => [el]
) => {
  const enter = (_el: HTMLElement, done: any) => {
    anime({
      targets: fn(_el),
      duration: 500,
      easing: 'spring(1, 80, 10, 0)',
      complete: done,
      opacity: [0, 1],
      ...params
    });
  };

  const leave = (_el: HTMLElement, done: any) => {
    _el.style.opacity = '0';
    done();
  };

  const beforeEnter = (_el: HTMLElement, done: any) => {
    _el.style.opacity = '0';
    //done()
  };

  return { enter, leave, beforeEnter };
};
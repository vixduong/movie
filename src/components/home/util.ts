import anime from 'animejs';

export const useAnime = (
  params: anime.AnimeParams,
  fn: (el: Element) => Element[] | NodeListOf<Element> = (el) => [el]
) => {
  const enter = (_el: Element, done: any) => {
    anime({
      targets: fn(_el),
      duration: 500,
      easing: 'spring(1, 80, 10, 0)',
      complete: done,
      opacity: [0, 1],
      ...params
    });
  };

  const leave = (_el: Element, done: any) => {
    (_el as HTMLElement).style.opacity = '0';
    done();
  };

  const beforeEnter = (_el: Element, done: any) => {
    (_el as HTMLElement).style.opacity = '0';
    //done()
  };

  return { enter, leave, beforeEnter };
};
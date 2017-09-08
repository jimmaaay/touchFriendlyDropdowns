const doubletaptogo = () => {
  const selectors = [];
  let currentItem = false;

  const addElements = selector => selectors.push(selector);

  // use similar to $($0).parents('.selector')
  const parents = (e, selector) => {
    let el = e;
    while(! el.matches(selector)) {
      el = el.parentElement;
      if (el == null) {
        el = false;
        break;
      }
    }
    return el;
  };
  
  const documentClick = (e) => {
    const { target } = e;
    selectors.forEach((selector) => {
      const targetMatches = target.matches(selector);
      let parentMatches = false;
      if (!targetMatches) parentMatches = parents(target, selector);

      if (targetMatches || parentMatches !== false) {
        const el = targetMatches ? target : parentMatches;
        if (currentItem !== el) {
          currentItem = el;
          e.preventDefault();
        }
      } else {
        currentItem = false;
      }
    });
  };

  if ('ontouchstart' in window) {
    document.addEventListener('click', documentClick, false);
  };

  return addElements;
};

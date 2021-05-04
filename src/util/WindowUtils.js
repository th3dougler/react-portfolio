export let scrollPosition = (percentage = null) => {
  let scrollPosition =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (!percentage) return scrollPosition;
  else return percentage < scrollPosition;
};

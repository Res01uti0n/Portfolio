const searchInput = document.querySelector(`#search`);

const setSearch = (evt) => {
  evt.preventDefault();
  let keyText = searchInput.value;

  keyText = keyText.replace(/&/g, "&amp;").replace(/</g, '&lt').replace(/>/g, '&gt');

  console.log(keyText);

};

export {setSearch, searchInput};

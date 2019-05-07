(function (exports) {
'use strict';

const searchInput = document.querySelector(`#search`);

const setSearch = (evt) => {
  evt.preventDefault();
  let keyText = searchInput.value;

  keyText = keyText.replace(/&/g, "&amp;").replace(/</g, '&lt').replace(/>/g, '&gt');

  console.log(keyText);

};

exports.setSearch = setSearch;
exports.searchInput = searchInput;

}((this.searchInput = this.searchInput || {})));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zL3NlYXJjaElucHV0LmpzIiwic291cmNlcyI6WyJzb3VyY2UvanMvZnVuY3Rpb25zL3NlYXJjaElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlYXJjaGApO1xuXG5jb25zdCBzZXRTZWFyY2ggPSAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQga2V5VGV4dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gIGtleVRleHQgPSBrZXlUZXh0LnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC88L2csICcmbHQnKS5yZXBsYWNlKC8+L2csICcmZ3QnKTtcblxuICBjb25zb2xlLmxvZyhrZXlUZXh0KTtcblxufTtcblxuZXhwb3J0IHtzZXRTZWFyY2gsIHNlYXJjaElucHV0fTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFdEQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEtBQUs7RUFDekIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO0VBQ3JCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O0VBRWhDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O0VBRW5GLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0NBRXRCLENBQUMsQUFFRixBQUFnQyw7OzssOzsiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
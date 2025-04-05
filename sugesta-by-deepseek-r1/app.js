// Entire content of file1.js or changes to be made
const updateData = (text) => {
  localStorage.setItem('sugesta-data', JSON.stringify({ text })));
};
window.onload = function() {
  const data = JSON.parse(localStorage.getItem('sugenta-data')));

  if (data) {
    displayText(data.text));
    addLocationToMap(data.location[0], data.location[1]));
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      initMap(latitude, longitude));
    }));
  }
};

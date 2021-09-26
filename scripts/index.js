setTimeout(function () {
  var thumbnails = document.querySelectorAll(".thumbnail");
  var modal = document.getElementById("myModal");
  var iframe = document.getElementById("iframe");

  thumbnails.forEach(function (thumbnail, i) {
    thumbnail.onclick = function () {
      modal.style.display = "block";
      iframe.src = `../src/${thumbnail.id}.html`;
    };
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
});

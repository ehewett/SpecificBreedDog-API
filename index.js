"use strict";

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let userInput = $("#dog-breed").val();
    getDogImage(userInput);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

function getDogImage(userBreed) {
  {
    fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
      .then((response) => response.json())
      .then((responseJson) => displayImages(responseJson))
      .catch((error) =>
        alert("Something went wrong. Try again in a few minutes.")
      );
  }
}

function displayImages(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert("Can't find that dog breed. Please try again.");
  } else if (responseJson.status === "success") {
    $(".images").replaceWith(
      `<img src="${responseJson.message}" class="images">`
    );

    $(".image-results").removeClass("hidden");
  }
}

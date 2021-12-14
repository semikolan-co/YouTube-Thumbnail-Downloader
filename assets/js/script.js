// // You can write JS Script here
// console.log('This Webpage is built using HTML BoilerPlate by SemiKolan')

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   })

getIdfromurl = function (url) {
  if (url.includes("youtube.com")) {
    var id = url.split("youtube.com/").pop();
    id = id.split("?v=")[1];
    return id;
  } else {
    var id = url.split("/").pop();
    return id;
  }
  return url;
};

getImgFromId = function (id) {
  return `https://img.youtube.com/vi/${id}/hq720.jpg`;
};
const errPara = document.getElementById("err-msg");
$(".search").on("click", function () {
  var url = $('input[name="url"]').val();
  if (url !== "") {
    errPara.style.display = "none";
    var id = getIdfromurl(url);
    console.log(id);
    $(".show-arrow").css("display", "none");
    $(".thumbnailimg").attr("src", getImgFromId(id));
    $(".downloadbutton")
      .attr("href", getImgFromId(id))
      .css("display", "inline-block");
  } else {
    // errPara.style.display = "none";
    errPara.textContent = "Please enter a valid URL";
  }
});

//https://i.ytimg.com/vi/FSBNe_PR47U/hq720.jpg

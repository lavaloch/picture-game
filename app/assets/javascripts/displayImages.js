$(document).ready(function () {
  $("#img_1").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "/assets/top_left_01.jpg"
    imagesTopLeft[1] = "/assets/top_left_02.jpg"
    imagesTopLeft[2] = "/assets/top_left_03.jpg"
    var random = Math.floor(Math.random() * imagesTopLeft.length);
    document.getElementById("img_1").attributes;
    document.getElementById("img_1").innerHTML = "<img src='" + imagesTopLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft);
    var srcTopRight = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight);
    var srcBottomLeft = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft);
    var srcBottomRight = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight);
    setTimeout(function() {
      if (srcTopLeft == srcTopRight == srcBottomLeft == srcBottomRight) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_2").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "/assets/top_right_01.jpg"
    imagesTopLeft[1] = "/assets/top_right_02.jpg"
    imagesTopLeft[2] = "/assets/top_right_03.jpg"
    var random = Math.floor(Math.random() * imagesTopLeft.length);
    document.getElementById("img_2").attributes;
    document.getElementById("img_2").innerHTML = "<img src='" + imagesTopLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft);
    var srcTopRight = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight);
    var srcBottomLeft = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft);
    var srcBottomRight = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight);
    setTimeout(function() {
      if (srcTopLeft == srcTopRight == srcBottomLeft == srcBottomRight) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_3").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "/assets/bottom_left_01.jpg"
    imagesTopLeft[1] = "/assets/bottom_left_02.jpg"
    imagesTopLeft[2] = "/assets/bottom_left_03.jpg"
    var random = Math.floor(Math.random() * imagesTopLeft.length);
    document.getElementById("img_3").attributes;
    document.getElementById("img_3").innerHTML = "<img src='" + imagesTopLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft);
    var srcTopRight = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight);
    var srcBottomLeft = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft);
    var srcBottomRight = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight);
    setTimeout(function() {
      if (srcTopLeft == srcTopRight == srcBottomLeft == srcBottomRight) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_4").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "/assets/bottom_right_01.jpg"
    imagesTopLeft[1] = "/assets/bottom_right_02.jpg"
    imagesTopLeft[2] = "/assets/bottom_right_03.jpg"
    var random = Math.floor(Math.random() * imagesTopLeft.length);
    document.getElementById("img_4").attributes;
    document.getElementById("img_4").innerHTML = "<img src='" + imagesTopLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft);
    var srcTopRight = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight);
    var srcBottomLeft = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft);
    var srcBottomRight = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight);
    setTimeout(function() {
      if (srcTopLeft == srcTopRight == srcBottomLeft == srcBottomRight) {
        console.log("SUCCESS");
      }
    }, 100);
  });
});

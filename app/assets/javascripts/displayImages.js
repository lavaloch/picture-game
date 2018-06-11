$(document).ready(function () {
  $("#img_1").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "/assets/top_left_01.jpg"
    imagesTopLeft[1] = "/assets/top_left_02.jpg"
    imagesTopLeft[2] = "/assets/top_left_03.jpg"
    imagesTopLeft[3] = "/assets/top_left_04.jpg"
    imagesTopLeft[4] = "/assets/top_left_05.jpg"
    imagesTopLeft[5] = "/assets/top_left_06.jpg"
    imagesTopLeft[6] = "/assets/top_left_07.jpg"
    imagesTopLeft[7] = "/assets/top_left_08.jpg"
    imagesTopLeft[8] = "/assets/top_left_09.jpg"
    imagesTopLeft[9] = "/assets/top_left_10.jpg"
    imagesTopLeft[10] = "/assets/top_left_11.jpg"
    imagesTopLeft[11] = "/assets/top_left_12.jpg"

    var random = Math.floor(Math.random() * imagesTopLeft.length);

    document.getElementById("img_1").attributes;
    document.getElementById("img_1").innerHTML = "<img src='" + imagesTopLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft1 = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft1);

    var srcTopRight1 = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight1);

    var srcBottomLeft1 = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft1);

    var srcBottomRight1 = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight1);

    setTimeout(function() {
      if (srcTopLeft1 == srcTopRight1 == srcBottomLeft1 == srcBottomRight1) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_2").click(function () {
    var imagesTopRight = new Array();
    imagesTopRight[0] = "/assets/top_right_01.jpg"
    imagesTopRight[1] = "/assets/top_right_02.jpg"
    imagesTopRight[2] = "/assets/top_right_03.jpg"
    imagesTopRight[3] = "/assets/top_right_04.jpg"
    imagesTopRight[4] = "/assets/top_right_05.jpg"
    imagesTopRight[5] = "/assets/top_right_06.jpg"
    imagesTopRight[6] = "/assets/top_right_07.jpg"
    imagesTopRight[7] = "/assets/top_right_08.jpg"
    imagesTopRight[8] = "/assets/top_right_09.jpg"
    imagesTopRight[9] = "/assets/top_right_10.jpg"
    imagesTopRight[10] = "/assets/top_right_11.jpg"
    imagesTopRight[11] = "/assets/top_right_12.jpg"

    var random = Math.floor(Math.random() * imagesTopRight.length);

    document.getElementById("img_2").attributes;
    document.getElementById("img_2").innerHTML = "<img src='" + imagesTopRight[random] + "' class='img_properties'>" ;

    var srcTopLeft2 = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft2);

    var srcTopRight2 = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight2);

    var srcBottomLeft2 = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft2);

    var srcBottomRight2 = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight2);

    setTimeout(function() {
      if (srcTopLeft2 == srcTopRight2 == srcBottomLeft2 == srcBottomRight2) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_3").click(function () {
    var imagesBottomLeft = new Array();
    imagesBottomLeft[0] = "/assets/bottom_left_01.jpg"
    imagesBottomLeft[1] = "/assets/bottom_left_02.jpg"
    imagesBottomLeft[2] = "/assets/bottom_left_03.jpg"
    imagesBottomLeft[3] = "/assets/bottom_left_04.jpg"
    imagesBottomLeft[4] = "/assets/bottom_left_05.jpg"
    imagesBottomLeft[5] = "/assets/bottom_left_06.jpg"
    imagesBottomLeft[6] = "/assets/bottom_left_07.jpg"
    imagesBottomLeft[7] = "/assets/bottom_left_08.jpg"
    imagesBottomLeft[8] = "/assets/bottom_left_09.jpg"
    imagesBottomLeft[9] = "/assets/bottom_left_10.jpg"
    imagesBottomLeft[10] = "/assets/bottom_left_11.jpg"
    imagesBottomLeft[11] = "/assets/bottom_left_12.jpg"

    var random = Math.floor(Math.random() * imagesBottomLeft.length);

    document.getElementById("img_3").attributes;
    document.getElementById("img_3").innerHTML = "<img src='" + imagesBottomLeft[random] + "' class='img_properties'>" ;

    var srcTopLeft3 = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft3);

    var srcTopRight3 = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight3);

    var srcBottomLeft3 = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft3);

    var srcBottomRight3 = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight3);

    setTimeout(function() {
      if (srcTopLeft3 == srcTopRight3 == srcBottomLeft3 == srcBottomRight3) {
        console.log("SUCCESS");
      }
    }, 100);
  });
  $("#img_4").click(function () {
    var imagesBottomRight = new Array();
    imagesBottomRight[0] = "/assets/bottom_right_01.jpg"
    imagesBottomRight[1] = "/assets/bottom_right_02.jpg"
    imagesBottomRight[2] = "/assets/bottom_right_03.jpg"
    imagesBottomRight[3] = "/assets/bottom_right_04.jpg"
    imagesBottomRight[4] = "/assets/bottom_right_05.jpg"
    imagesBottomRight[5] = "/assets/bottom_right_06.jpg"
    imagesBottomRight[6] = "/assets/bottom_right_07.jpg"
    imagesBottomRight[7] = "/assets/bottom_right_08.jpg"
    imagesBottomRight[8] = "/assets/bottom_right_09.jpg"
    imagesBottomRight[9] = "/assets/bottom_right_10.jpg"
    imagesBottomRight[10] = "/assets/bottom_right_11.jpg"
    imagesBottomRight[11] = "/assets/bottom_right_12.jpg"

    var random = Math.floor(Math.random() * imagesBottomRight.length);

    document.getElementById("img_4").attributes;
    document.getElementById("img_4").innerHTML = "<img src='" + imagesBottomRight[random] + "' class='img_properties'>" ;

    var srcTopLeft4 = $("#img_1 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopLeft4);

    var srcTopRight4 = $("#img_2 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcTopRight4);

    var srcBottomLeft4 = $("#img_3 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomLeft4);

    var srcBottomRight4 = $("#img_4 .img_properties").attr("src").match(/\d+/)[0];
    console.log(srcBottomRight4);

    setTimeout(function() {
      if (srcTopLeft4 == srcTopRight4 == srcBottomLeft4 == srcBottomRight4) {
        console.log("SUCCESS");
      }
    }, 100);
  });
});

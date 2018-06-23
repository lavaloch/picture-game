$(document).ready(function () {
  $("#img_1").click(function () {
    var imagesTopLeft = new Array();
    imagesTopLeft[0] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767558/PICTURE_IMAGE/top_left_01.jpg"
    imagesTopLeft[1] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767540/PICTURE_IMAGE/top_left_02.jpg"
    imagesTopLeft[2] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767539/PICTURE_IMAGE/top_left_03.jpg"
    imagesTopLeft[3] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767545/PICTURE_IMAGE/top_left_07.jpg"
    imagesTopLeft[4] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767555/PICTURE_IMAGE/top_left_08.jpg"
    imagesTopLeft[5] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767561/PICTURE_IMAGE/top_left_09.jpg"
    imagesTopLeft[6] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767557/PICTURE_IMAGE/top_left_10.jpg"
    imagesTopLeft[7] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767566/PICTURE_IMAGE/top_left_11.jpg"
    imagesTopLeft[8] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767566/PICTURE_IMAGE/top_left_12.jpg"

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
    imagesTopRight[0] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529774805/PICTURE_IMAGE/top_right_01_fnipyw.jpg"
    imagesTopRight[1] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767607/PICTURE_IMAGE/top_right_02.jpg"
    imagesTopRight[2] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767584/PICTURE_IMAGE/top_right_03.jpg"
    imagesTopRight[3] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767597/PICTURE_IMAGE/top_right_07.jpg"
    imagesTopRight[4] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767597/PICTURE_IMAGE/top_right_08.jpg"
    imagesTopRight[5] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529774796/PICTURE_IMAGE/top_right_09_kfeiaf.jpg"
    imagesTopRight[6] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529774797/PICTURE_IMAGE/top_right_10_imwvaq.jpg"
    imagesTopRight[7] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767606/PICTURE_IMAGE/top_right_11.jpg"
    imagesTopRight[8] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767605/PICTURE_IMAGE/top_right_12.jpg"

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
    imagesBottomLeft[0] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767420/PICTURE_IMAGE/bottom_left_01.jpg"
    imagesBottomLeft[1] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767424/PICTURE_IMAGE/bottom_left_02.jpg"
    imagesBottomLeft[2] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767390/PICTURE_IMAGE/bottom_left_03.jpg"
    imagesBottomLeft[3] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767428/PICTURE_IMAGE/bottom_left_07.jpg"
    imagesBottomLeft[4] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767460/PICTURE_IMAGE/bottom_left_08.jpg"
    imagesBottomLeft[5] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767444/PICTURE_IMAGE/bottom_left_09.jpg"
    imagesBottomLeft[6] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767434/PICTURE_IMAGE/bottom_left_10.jpg"
    imagesBottomLeft[7] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767451/PICTURE_IMAGE/bottom_left_11.jpg"
    imagesBottomLeft[8] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767431/PICTURE_IMAGE/bottom_left_12.jpg"

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
    imagesBottomRight[0] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767492/PICTURE_IMAGE/bottom_right_01.jpg"
    imagesBottomRight[1] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767499/PICTURE_IMAGE/bottom_right_02.jpg"
    imagesBottomRight[2] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767512/PICTURE_IMAGE/bottom_right_03.jpg"
    imagesBottomRight[3] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767512/PICTURE_IMAGE/bottom_right_07.jpg"
    imagesBottomRight[4] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767474/PICTURE_IMAGE/bottom_right_08.jpg"
    imagesBottomRight[5] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767493/PICTURE_IMAGE/bottom_right_09.jpg"
    imagesBottomRight[6] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767520/PICTURE_IMAGE/bottom_right_10.jpg"
    imagesBottomRight[7] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767505/PICTURE_IMAGE/bottom_right_11.jpg"
    imagesBottomRight[8] = "https://res.cloudinary.com/dyywnpzbg/image/upload/v1529767509/PICTURE_IMAGE/bottom_right_12.jpg"

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

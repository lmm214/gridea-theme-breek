//By ImMmMm.com 20200125 豆瓣api
jQuery(document).ready(function($){
          $("photos img").each(function(){
              var _a = $("<a></a>").attr("href",this.src);
              $(this).wrap("<div class='photo'></div>").wrap(_a);
          })
          $("figure img").each(function(){
              var _b = $("<a></a>").attr("href",this.src);
              $(this).wrap(_b);
          })
          isImgLoad(function(){
            var photos = document.querySelector('photos');
            if(photos){
              waterfall(photos);
            }
            $(window).resize(function() {
             if(photos){
                  waterfall(photos);
            }
          });
});
        var t_img;
        var isLoad = true;
        function isImgLoad(callback){
          $('photos img').each(function(){
            if(this.height === 0){
              isLoad = false;
              return false;
            }
          });
          if(isLoad){
            clearTimeout(t_img);
            callback();
          }else{
            isLoad = true;
            t_img = setTimeout(function(){
              isImgLoad(callback);
            },500);
          }
        }
      });
jQuery(document).ready(function ($) {
  $(".post-content a[href*='douban']").each(function () {
    var _this = $(this);
    var str = _this.attr("href");
    var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
    if (db_reg.test(str)) {
      var db_type = str.replace(db_reg, "$1");
      var db_id = str.replace(db_reg, "$2").toString();
      var db_api = "https://bm.weajs.com/api/";
      if (db_type == 'movie') {
        var url = db_api + "movies/" + db_id + "/";
        $.ajax({
          url: url,
          type: 'GET',
          dataType: "json",
          success: function (data) {
            var db_star = Math.ceil(data.rating);
            $("<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + str + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.directors + " / 类型：" + data.genres + " / " + data.pubdate + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro + "</section></div></div><img class='post-preview--image' src=" + data.cover + "></div>").replaceAll(_this)
          }
        });
      } else if (db_type == 'book') {
        var url = db_api + "books/" + db_id;
        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          success: function (data) {
            var db_star = Math.ceil(data.rating);
            $("<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + str + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro + "</section></div></div><img class='post-preview--image' src=" + data.cover + "></div>").replaceAll(_this)
          }
        });
      } else {
        console.log("出错" + id)
      }
    }
  });
});
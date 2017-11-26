
    $(function () {
      var toplamLi = $("#sorular article").length;
      var veriSay = 3;
      var sayfaSayisi = toplamLi / veriSay;
      if (sayfaSayisi > parseInt(sayfaSayisi)) {
        sayfaSayisi++;
      }

      $("#sorular article:gt(" + (veriSay - 1) + ")").hide();

      for (var i = 1; i <= sayfaSayisi; i++) {
        $("#sayfalar").append("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>");

      }

      $("#sayfalar li").click(function () {

        $("#sorular article").hide();
        var index = $(this).index();
        var syf = index + 1;
        var s = veriSay * syf;
        for (var i = s - veriSay; i < s; i++) {

          $("#sorular article:eq(" + i + ")").show();
        }

      });
    });
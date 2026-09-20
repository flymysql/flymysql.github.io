$(document).ready(function () {
  $(window).scroll(function(){
    $(".top-scroll-bar").attr("style", "width: " + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
  });
});

/* 本站已归档：顶部提示条，引导访客前往现用站点。
   放在 custom.js 里注入，避免改动近 200 个已生成的 HTML 文件。 */
(function () {
  var NOW = { url: "https://gitpull.cn/", label: "gitpull.cn" };
  var RSS = { url: "https://gitpull.cn/rss.xml", label: "RSS" };

  function inject() {
    if (document.getElementById("archive-notice")) return;
    if (/\/lib\//.test(location.pathname)) return; // 库自带的文档页不注入

    var bar = document.createElement("div");
    bar.id = "archive-notice";
    bar.setAttribute("role", "note");
    bar.style.cssText = [
      "position:relative",
      "z-index:9999",
      "box-sizing:border-box",
      "padding:10px 16px",
      "background:#1f2937",
      "color:#f9fafb",
      "font-size:14px",
      "line-height:1.6",
      "text-align:center",
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif"
    ].join(";");

    bar.innerHTML =
      "📦 本站已归档，不再更新 —— 最新文章请访问 " +
      '<a href="' + NOW.url + '" style="color:#7dd3fc;text-decoration:underline;font-weight:600">' +
      NOW.label + "</a>" +
      ' · <a href="' + RSS.url + '" style="color:#7dd3fc;text-decoration:underline">订阅 ' +
      RSS.label + "</a>";

    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();

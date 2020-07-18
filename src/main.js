const $sectionList = $("section");
$sectionList.each((el, i) => {
  const $section = $sectionList.eq(i);
  const $div = $section.children().eq(1);
  const $h2 = $div.prev();
  $h2.text(`section ${i}`);
  $div.html(`div ${i} <span>新建 span ${i} 点击变色并添加 class 属性</span>`);
  const $span = $div.find("span").eq(0);
  $div.css({ background: `#B${9 * i}0` });
  $span.css({ color: `#25${9 * i}` });
  $div.on("click", (e) => {
    if (e.target.matches("span")) {
      $([e.target]).css({
        border: `4px solid #2${9 * i}22${9 * i}2`,
        borderRadius: "50%",
      });
      $([e.currentTarget]).addClass("selected");
    }
  });
});
const $a = $("<a>参考文档</a>");
$a.attr("href", "https://www.yuque.com/woozyzzz/ybz8i1/dh10q6");
$("section").eq(0).parent().append($a);

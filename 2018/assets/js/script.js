//var filterizd = $('.filtr-container').filterizr({
   //options object
//});


function scrollNav() {
    $(".nav a").click(function () {
        $(".active").removeClass("active"), $(this).closest("li").addClass("active");
        var t = $(this).attr("class");
        return $("." + t).parent("li").addClass("active"), $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 160
        }, 400), !1
    }), $(".scrollTop a").scrollTop()
}

function scrollNav() {
    $(".nav a").click(function () {
        $(".active").removeClass("active"), $(this).closest("li").addClass("active");
        var t = $(this).attr("class");
        return $("." + t).parent("li").addClass("active"), $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 160
        }, 400), !1
    }), $(".scrollTop a").scrollTop()
}

function centerBgVideo() {
    $(".video-parallax-container").each(function () {
        var t = $(this).height(),
            i = $(this).children("video").height(),
            o = (i - t) / 2,
            e = $(this).height(),
            s = $(this).children("video").height(),
            a = (s - e) / 2;
        o > 0 && $(this).children("video").css("margin-bottom", o + "px"), a > 0 && $(this).children("video").css("margin-right", a + "px")
    })
}
scrollNav(), $(document).ready(function () {
        $("#myScrollspy").stick_in_parent({
            offset_top: 80
        })
    }),
    function () {
        var t, i;
        t = window.jQuery, i = t(window), t.fn.stick_in_parent = function (o) {
            var e, s, a, r, n, l, c, d, p, h, u, f, g;
            for (null == o && (o = {}), g = o.sticky_class, l = o.inner_scrolling, f = o.recalc_every, u = o.parent, p = o.offset_top, d = o.spacer, a = o.bottoming, null == p && (p = 0), null == u && (u = void 0), null == l && (l = !0), null == g && (g = "is_stuck"), e = t(document), null == a && (a = !0), h = function (t) {
                    var i, o;
                    return window.getComputedStyle ? (t[0], i = window.getComputedStyle(t[0]), o = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (o += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), o) : t.outerWidth(!0)
                }, r = function (o, s, r, n, c, v, m, $) {
                    var y, k, b, w, _, C, x, V, T, P, F, z;
                    if (!o.data("sticky_kit")) {
                        if (o.data("sticky_kit", !0), _ = e.height(), x = o.parent(), null != u && (x = x.closest(u)), !x.length) throw "failed to find stick parent";
                        if (b = !1, y = !1, F = null != d ? d && o.closest(d) : t("<div />"), F && F.css("position", o.css("position")), V = function () {
                                var t, i, a;
                                if (!$) return _ = e.height(), t = parseInt(x.css("border-top-width"), 10), i = parseInt(x.css("padding-top"), 10), s = parseInt(x.css("padding-bottom"), 10), r = x.offset().top + t + i, n = x.height(), b && (b = !1, y = !1, null == d && (o.insertAfter(F), F.detach()), o.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(g), a = !0), c = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - p, v = o.outerHeight(!0), m = o.css("float"), F && F.css({
                                    width: h(o),
                                    height: v,
                                    display: o.css("display"),
                                    "vertical-align": o.css("vertical-align"),
                                    float: m
                                }), a ? z() : void 0
                            }, V(), v !== n) return w = void 0, C = p, P = f, z = function () {
                            var t, h, u, k, T, z;
                            if (!$) return u = !1, null != P && (P -= 1) <= 0 && (P = f, V(), u = !0), u || e.height() === _ || (V(), u = !0), k = i.scrollTop(), null != w && (h = k - w), w = k, b ? (a && (T = k + v + C > n + r, y && !T && (y = !1, o.css({
                                position: "fixed",
                                bottom: "",
                                top: C
                            }).trigger("sticky_kit:unbottom"))), k < c && (b = !1, C = p, null == d && ("left" !== m && "right" !== m || o.insertAfter(F), F.detach()), t = {
                                position: "",
                                width: "",
                                top: ""
                            }, o.css(t).removeClass(g).trigger("sticky_kit:unstick")), l && (z = i.height(), v + p > z && (y || (C -= h, C = Math.max(z - v, C), C = Math.min(p, C), b && o.css({
                                top: C + "px"
                            }))))) : k > c && (b = !0, t = {
                                position: "fixed",
                                top: C
                            }, t.width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(t).addClass(g), null == d && (o.after(F), "left" !== m && "right" !== m || F.append(o)), o.trigger("sticky_kit:stick")), b && a && (null == T && (T = k + v + C > n + r), !y && T) ? (y = !0, "static" === x.css("position") && x.css({
                                position: "relative"
                            }), o.css({
                                position: "absolute",
                                bottom: s,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                        }, T = function () {
                            return V(), z()
                        }, k = function () {
                            if ($ = !0, i.off("touchmove", z), i.off("scroll", z), i.off("resize", T), t(document.body).off("sticky_kit:recalc", T), o.off("sticky_kit:detach", k), o.removeData("sticky_kit"), o.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), x.position("position", ""), b) return null == d && ("left" !== m && "right" !== m || o.insertAfter(F), F.remove()), o.removeClass(g)
                        }, i.on("touchmove", z), i.on("scroll", z), i.on("resize", T), t(document.body).on("sticky_kit:recalc", T), o.on("sticky_kit:detach", k), setTimeout(z, 0)
                    }
                }, n = 0, c = this.length; n < c; n++) s = this[n], r(t(s));
            return this
        }
    }.call(this), $(document).ready(function () {
        AOS.init({
            disable: "mobile"
        }), $("[data-bs-hover-animate]").mouseenter(function () {
            var t = $(this);
            t.addClass("animated " + t.attr("data-bs-hover-animate"))
        }).mouseleave(function () {
            var t = $(this);
            t.removeClass("animated " + t.attr("data-bs-hover-animate"))
        })
    }), scrollNav(), $(window).scroll(function () {
        $(this).scrollTop() > 50 ? $(".opaque-navbar").addClass("opaque") : $(".opaque-navbar").removeClass("opaque")
    }), $(document).ready(function () {
        centerBgVideo()
    }), $(window).on("resize", function () {
        centerBgVideo()
    });





// Lazy Loading
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});






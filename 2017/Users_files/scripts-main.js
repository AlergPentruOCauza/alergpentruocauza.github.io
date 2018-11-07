(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).on("ready", function () {
    $("form").on("submit", function () {
        var avatar = $(".avatar-img").clone().attr("class", "")[0];
        var confirmed = $("[type='checkbox']");
        if (!$("#avatar").val()) {
            alert("Trebuie să încarci o imagine.");
            return false;
        }
        if (!confirmed.is(":checked")) {
            alert("Trebuie să fii de acord cu termenii Galantom.ro");
            return false;
        }
    });
    if (location.search === "?embed=true") {
        $(".footer").hide();
        $("body").css("background", "transparent");
    }
    $(".btn-img-upload").on("click", function () {
        $(this).next().click();
    });
    $(".file-upload").on("change", function () {
        if (!$(this).val()) {
            return;
        }
        if (!this.files || !this.files[0]) {
            return;
        }
        var reader = new FileReader();

        // image loaded
        reader.onload = function (event) {
            var dataUri = event.target.result;
            var $img = $("<img>", {
                src: dataUri
            }).on("load", function () {
                $("#avatar").val(dataUri);
                $(".avatar-img").attr("src", dataUri).removeClass("hide");
            });
        };

        // error
        reader.onerror = function (event) {
            alert("Imaginea nu a putut fi încărcată: " + event.target.error.code);
        };

        reader.readAsDataURL(this.files[0]);
    });

    var $segment = $("#segment");
    var $options = [];
    for (var i = 0; i < DATA.length; ++i) {
        $options.push($("<option>", {
            value: i,
            text: "Tura " + (i + 1) + ": Start: km " + DATA[i].start + " " + DATA[i].location + ", Data: " + DATA[i].date + ", Ora " + DATA[i].hour
        }));
    }
    $segment.append($options);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsRUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBWTtBQUNoQyxNQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQy9CLFlBQUksU0FBUyxFQUFFLGFBQUYsRUFBaUIsS0FBakIsR0FBeUIsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsRUFBdkMsRUFBMkMsQ0FBM0MsQ0FBYjtBQUNBLFlBQUksWUFBWSxFQUFFLG1CQUFGLENBQWhCO0FBQ0EsWUFBSSxDQUFDLEVBQUUsU0FBRixFQUFhLEdBQWIsRUFBTCxFQUF5QjtBQUNyQixrQkFBTSwrQkFBTjtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNELFlBQUksQ0FBQyxVQUFVLEVBQVYsQ0FBYSxVQUFiLENBQUwsRUFBK0I7QUFDM0Isa0JBQU0saURBQU47QUFDQSxtQkFBTyxLQUFQO0FBQ0g7QUFDSixLQVhEO0FBWUEsUUFBSSxTQUFTLE1BQVQsS0FBb0IsYUFBeEIsRUFBdUM7QUFDbkMsVUFBRSxTQUFGLEVBQWEsSUFBYjtBQUNBLFVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBYyxZQUFkLEVBQTRCLGFBQTVCO0FBQ0g7QUFDRCxNQUFFLGlCQUFGLEVBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDekMsVUFBRSxJQUFGLEVBQVEsSUFBUixHQUFlLEtBQWY7QUFDSCxLQUZEO0FBR0EsTUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFFBQXJCLEVBQStCLFlBQVk7QUFDdkMsWUFBSSxDQUFDLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBTCxFQUFvQjtBQUFFO0FBQVM7QUFDL0IsWUFBSSxDQUFDLEtBQUssS0FBTixJQUFlLENBQUMsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFwQixFQUFtQztBQUFFO0FBQVM7QUFDOUMsWUFBSSxTQUFTLElBQUksVUFBSixFQUFiOztBQUVBO0FBQ0EsZUFBTyxNQUFQLEdBQWdCLFVBQVMsS0FBVCxFQUFnQjtBQUM1QixnQkFBSSxVQUFVLE1BQU0sTUFBTixDQUFhLE1BQTNCO0FBQ0EsZ0JBQUksT0FBTyxFQUFFLE9BQUYsRUFBVztBQUNsQixxQkFBSztBQURhLGFBQVgsRUFFUixFQUZRLENBRUwsTUFGSyxFQUVHLFlBQVk7QUFDdEIsa0JBQUUsU0FBRixFQUFhLEdBQWIsQ0FBaUIsT0FBakI7QUFDQSxrQkFBRSxhQUFGLEVBQWlCLElBQWpCLENBQXNCLEtBQXRCLEVBQTZCLE9BQTdCLEVBQXNDLFdBQXRDLENBQWtELE1BQWxEO0FBQ0gsYUFMVSxDQUFYO0FBTUosU0FSQTs7QUFVQTtBQUNELGVBQU8sT0FBUCxHQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDN0Isa0JBQU0sdUNBQXVDLE1BQU0sTUFBTixDQUFhLEtBQWIsQ0FBbUIsSUFBaEU7QUFDSCxTQUZEOztBQUlBLGVBQU8sYUFBUCxDQUFxQixLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQXJCO0FBQ0YsS0F0QkQ7O0FBd0JBLFFBQUksV0FBVyxFQUFFLFVBQUYsQ0FBZjtBQUNBLFFBQUksV0FBVyxFQUFmO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBaUMsRUFBRSxDQUFuQyxFQUFzQztBQUNsQyxpQkFBUyxJQUFULENBQ0ksRUFBRSxVQUFGLEVBQWM7QUFDVixtQkFBTyxDQURHO0FBRVYsa0JBQU0sV0FBVyxJQUFJLENBQWYsSUFBb0IsY0FBcEIsR0FBcUMsS0FBSyxDQUFMLEVBQVEsS0FBN0MsR0FBcUQsR0FBckQsR0FBNEQsS0FBSyxDQUFMLEVBQVEsUUFBcEUsR0FBK0UsVUFBL0UsR0FBNEYsS0FBSyxDQUFMLEVBQVEsSUFBcEcsR0FBMkcsUUFBM0csR0FBc0gsS0FBSyxDQUFMLEVBQVE7QUFGMUgsU0FBZCxDQURKO0FBTUg7QUFDRCxhQUFTLE1BQVQsQ0FBZ0IsUUFBaEI7QUFDSCxDQXZERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLm9uKFwicmVhZHlcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJmb3JtXCIpLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGF2YXRhciA9ICQoXCIuYXZhdGFyLWltZ1wiKS5jbG9uZSgpLmF0dHIoXCJjbGFzc1wiLCBcIlwiKVswXTtcbiAgICAgICAgdmFyIGNvbmZpcm1lZCA9ICQoXCJbdHlwZT0nY2hlY2tib3gnXVwiKTtcbiAgICAgICAgaWYgKCEkKFwiI2F2YXRhclwiKS52YWwoKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUcmVidWllIHPEgyDDrm5jYXJjaSBvIGltYWdpbmUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29uZmlybWVkLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVHJlYnVpZSBzxIMgZmlpIGRlIGFjb3JkIGN1IHRlcm1lbmlpIEdhbGFudG9tLnJvXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCA9PT0gXCI/ZW1iZWQ9dHJ1ZVwiKSB7XG4gICAgICAgICQoXCIuZm9vdGVyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZFwiLCBcInRyYW5zcGFyZW50XCIpO1xuICAgIH1cbiAgICAkKFwiLmJ0bi1pbWctdXBsb2FkXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLm5leHQoKS5jbGljaygpO1xuICAgIH0pO1xuICAgICQoXCIuZmlsZS11cGxvYWRcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykudmFsKCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICghdGhpcy5maWxlcyB8fCAhdGhpcy5maWxlc1swXSkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgLy8gaW1hZ2UgbG9hZGVkXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGRhdGFVcmkgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdmFyICRpbWcgPSAkKFwiPGltZz5cIiwge1xuICAgICAgICAgICAgICAgIHNyYzogZGF0YVVyaVxuICAgICAgICAgICAgfSkub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2F2YXRhclwiKS52YWwoZGF0YVVyaSk7XG4gICAgICAgICAgICAgICAgJChcIi5hdmF0YXItaW1nXCIpLmF0dHIoXCJzcmNcIiwgZGF0YVVyaSkucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgfTtcblxuICAgICAgICAvLyBlcnJvclxuICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgYWxlcnQoXCJJbWFnaW5lYSBudSBhIHB1dHV0IGZpIMOubmPEg3JjYXTEgzogXCIgKyBldmVudC50YXJnZXQuZXJyb3IuY29kZSk7XG4gICAgICAgfTtcblxuICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbMF0pO1xuICAgIH0pO1xuXG4gICAgdmFyICRzZWdtZW50ID0gJChcIiNzZWdtZW50XCIpO1xuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgREFUQS5sZW5ndGg7ICsraSkge1xuICAgICAgICAkb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgJChcIjxvcHRpb24+XCIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogaVxuICAgICAgICAgICAgICAsIHRleHQ6IFwiVHVyYSBcIiArIChpICsgMSkgKyBcIjogU3RhcnQ6IGttIFwiICsgREFUQVtpXS5zdGFydCArIFwiIFwiICsgIERBVEFbaV0ubG9jYXRpb24gKyBcIiwgRGF0YTogXCIgKyBEQVRBW2ldLmRhdGUgKyBcIiwgT3JhIFwiICsgREFUQVtpXS5ob3VyXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxuICAgICRzZWdtZW50LmFwcGVuZCgkb3B0aW9ucyk7XG59KTtcbiJdfQ==

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import Swiper from 'swiper';
var Swiper = require('swiper');
function defaults(dest) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i] || {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
    return dest;
}
var KSSwiperContainer = (function () {
    function KSSwiperContainer(elementRef) {
        this.elementRef = elementRef;
    }
    KSSwiperContainer.prototype.ngOnInit = function () {
        var _this = this;
        var options = defaults({
            pagination: '.swiper-pagination',
        }, this.options);
        var nativeElement = this.elementRef.nativeElement;
        setTimeout(function () {
            _this.swiper = new Swiper(nativeElement.children[0], _this.options);
        });
    };
    KSSwiperContainer.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiper.update();
        });
    };
    return KSSwiperContainer;
}());
KSSwiperContainer.decorators = [
    { type: core_1.Injectable },
    { type: core_1.Component, args: [{
                selector: 'ks-swiper-container',
                template: "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n  </div>"
            },] },
];
/** @nocollapse */
KSSwiperContainer.ctorParameters = function () { return [
    { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
]; };
KSSwiperContainer.propDecorators = {
    'pager': [{ type: core_1.Input },],
    'options': [{ type: core_1.Input },],
};
exports.KSSwiperContainer = KSSwiperContainer;
var KSSwiperSlide = (function () {
    function KSSwiperSlide(elementRef, swiper) {
        this.ele = elementRef.nativeElement;
        this.ele.classList.add('swiper-slide');
        swiper.update();
    }
    return KSSwiperSlide;
}());
KSSwiperSlide.decorators = [
    { type: core_1.Injectable },
    { type: core_1.Component, args: [{
                selector: 'ks-swiper-slide',
                template: '<div><ng-content></ng-content></div>'
            },] },
];
/** @nocollapse */
KSSwiperSlide.ctorParameters = function () { return [
    { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    { type: KSSwiperContainer, decorators: [{ type: core_1.Host }, { type: core_1.Inject, args: [KSSwiperContainer,] },] },
]; };
exports.KSSwiperSlide = KSSwiperSlide;
//# sourceMappingURL=ks-swiper.js.map
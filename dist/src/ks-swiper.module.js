"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ks_swiper_1 = require("./ks-swiper");
var KSSwiperModule = (function () {
    function KSSwiperModule() {
    }
    return KSSwiperModule;
}());
KSSwiperModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [ks_swiper_1.KSSwiperContainer, ks_swiper_1.KSSwiperSlide],
                exports: [ks_swiper_1.KSSwiperContainer, ks_swiper_1.KSSwiperSlide]
            },] },
];
/** @nocollapse */
KSSwiperModule.ctorParameters = function () { return []; };
exports.KSSwiperModule = KSSwiperModule;
//# sourceMappingURL=ks-swiper.module.js.map
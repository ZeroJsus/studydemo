"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var HelloWorld = function () {
    return (h(Fragment, null,
        h("div", null, "Hello World")));
};
/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 11:08:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-11 17:12:01
 */
define("test", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getUserNames = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userName;
        return __generator(this, function (_a) {
            userName = 'zhangsan';
            console.log('userName', userName);
            return [2 /*return*/, userName];
        });
    }); };
    // 需要es6的语法
    // const arr = [1,2,3,4]
    // arr.find(_fi => _fi > 1);
    // export {
    //   await getUserNames
    // }
    exports.default = await getUserNames;
});
define("const", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.basePic = void 0;
    // 导出基本的 圆周率数据
    exports.basePic = "3.1415";
});
/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 10:09:22
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-13 11:17:08
 */
/**
 *
 * src/index.ts:1:5 - error TS2451: Cannot redeclare block-scoped variable 'name'.
 * 1 let name = "hello world";
 *       ~~~~
 * node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.dom.d.ts:27986:15
 *  27986 declare const name: void;
 *                      ~~~~
 *  'name' was also declared here.
 *  Found 1 error in src/index.ts:1
 */
// 在name中 已经定义了 window.name 存在两个name 变量产生了冲突
// let name = "hello world";
// import {
//   chunk
// } from 'lodash'
define("index", ["require", "exports", "test", "const"], function (require, exports, test_1, const_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    test_1 = __importDefault(test_1);
    // console.log('name', name);
    // const arr = chunk(['a', 'b', 'c', 'd'], 2)
    // console.log('arr', arr)
    if (typeof test_1.default === 'function') {
        (0, test_1.default)();
    }
    console.log('this is index.ts file', const_js_1.basePic);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZW1vLmpzeCIsIi4uL3NyYy90ZXN0LnRzIiwiLi4vc3JjL2NvbnN0LmpzIiwiLi4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLENBQ0w7UUFDRSw2QkFFTSxDQUNMLENBQ0osQ0FBQTtBQUNILENBQUMsQ0FBQTtBQ1JEOzs7Ozs7R0FNRzs7OztJQUVILElBQU0sWUFBWSxHQUFHOzs7WUFDZixRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQ2pDLHNCQUFPLFFBQVEsRUFBQzs7U0FDakIsQ0FBQTtJQUVELFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsSUFBSTtJQUVKLGtCQUFlLE1BQU0sWUFBWSxDQUFDOzs7Ozs7SUNyQmxDLGNBQWM7SUFDRCxRQUFBLE9BQU8sR0FBRyxRQUFRLENBQUM7O0FDRGhDOzs7Ozs7R0FNRztBQUNIOzs7Ozs7Ozs7O0dBVUc7QUFDSCw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCOzs7OztJQU9sQiw2QkFBNkI7SUFDN0IsNkNBQTZDO0lBRTdDLDBCQUEwQjtJQUUxQixJQUNFLE9BQU8sY0FBWSxLQUFLLFVBQVUsRUFDbEMsQ0FBQztRQUNELElBQUEsY0FBWSxHQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsa0JBQU8sQ0FBQyxDQUFBIn0=
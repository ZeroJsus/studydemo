"use strict";
/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 11:08:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-17 17:45:48
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var getUserNames = function () { return __awaiter(void 0, void 0, void 0, function () {
    var userName;
    return __generator(this, function (_a) {
        userName = 'zhangsan';
        console.log('userName', userName);
        return [2 /*return*/, userName];
    });
}); };
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
var invokeFunc = function (_funName) {
    console.log('invoke', _funName);
};
var person = {};
invokeFunc(person.name);
var testClass = /** @class */ (function () {
    function testClass() {
        this.name = 'hello world';
    }
    testClass.prototype.getTestName = function () {
        return function () {
            return this.name + '123';
        };
    };
    return testClass;
}());
try {
    throw undefined;
}
catch (e) {
    console.log('e', e);
}
// 需要es6的语法
// const arr = [1,2,3,4]
// arr.find(_fi => _fi > 1);
// export {
//   await getUserNames
// }
exports.default = await getUserNames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsSUFBTSxZQUFZLEdBQUc7OztRQUNmLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakMsc0JBQU8sUUFBUSxFQUFDOztLQUNqQixDQUFBO0FBRUQsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQ3JCLEtBQWdCLFVBQUcsRUFBSCxXQUFHLEVBQUgsaUJBQUcsRUFBSCxJQUFHLEVBQUUsQ0FBQztJQUFqQixJQUFNLENBQUMsWUFBQTtJQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVELElBQU0sVUFBVSxHQUFHLFVBQ2pCLFFBQWdCO0lBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUVELElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQTtBQUV0QixVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXZCO0lBR0U7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLE9BQU87WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO1FBQzFCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBRUQsSUFBSSxDQUFDO0lBQ0gsTUFBTSxTQUFTLENBQUM7QUFDbEIsQ0FBQztBQUFDLE9BQU8sQ0FBVSxFQUFFLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDckIsQ0FBQztBQUVELFdBQVc7QUFDWCx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCx1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLGtCQUFlLE1BQU0sWUFBWSxDQUFDIn0=
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/dom/main_ui.ts":
/*!********************************!*\
  !*** ./src/app/dom/main_ui.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MainUIDOM = void 0;\r\nvar MainUIDOM = /** @class */ (function () {\r\n    function MainUIDOM() {\r\n    }\r\n    MainUIDOM.changePauseButton = function () {\r\n        var start_button = document.getElementById(\"start\");\r\n        start_button.textContent = \"ポーズ\";\r\n        this.is_stop_button = true;\r\n        this.is_paused = false;\r\n    };\r\n    MainUIDOM.changeStartButton = function () {\r\n        var start_button = document.getElementById(\"start\");\r\n        start_button.textContent = \"スタート\";\r\n        this.is_stop_button = false;\r\n        this.is_paused = false;\r\n    };\r\n    MainUIDOM.changeResumeButton = function () {\r\n        var start_button = document.getElementById(\"start\");\r\n        start_button.textContent = \"再開\";\r\n        this.is_stop_button = false;\r\n        this.is_paused = true;\r\n    };\r\n    MainUIDOM.is_stop_button = false;\r\n    MainUIDOM.is_paused = false;\r\n    return MainUIDOM;\r\n}());\r\nexports.MainUIDOM = MainUIDOM;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/dom/main_ui.ts?");

/***/ }),

/***/ "./src/app/dom/timer.ts":
/*!******************************!*\
  !*** ./src/app/dom/timer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TimerDOM = void 0;\r\nvar time_1 = __webpack_require__(/*! ../types/time */ \"./src/app/types/time.ts\");\r\nvar TimerDOM = /** @class */ (function () {\r\n    function TimerDOM() {\r\n    }\r\n    TimerDOM.setTime = function (time) {\r\n        var timer = document.getElementById(\"timer\");\r\n        var timer_milisecond = document.getElementById(\"timerMilisecond\");\r\n        timer.textContent = time.zeroPaddingString(time.hour) + \":\" + time.zeroPaddingString(time.minute) + \":\" + time.zeroPaddingString(time.second);\r\n        timer_milisecond.textContent = \".\" + time.zeroPaddingString(time.milisecond);\r\n    };\r\n    TimerDOM.setTimeFromRaw = function (hour, minute, second, milisecond) {\r\n        var timer = document.getElementById(\"timer\");\r\n        var timer_milisecond = document.getElementById(\"timerMilisecond\");\r\n        timer.textContent = time_1.Time.zeroPaddingString(hour) + \":\" + time_1.Time.zeroPaddingString(minute) + \":\" + time_1.Time.zeroPaddingString(second);\r\n        timer_milisecond.textContent = \".\" + time_1.Time.zeroPaddingString(milisecond);\r\n    };\r\n    TimerDOM.setTimerDescription = function (text) {\r\n        var timer_description = document.getElementById(\"timerDescription\");\r\n        timer_description.textContent = text;\r\n    };\r\n    return TimerDOM;\r\n}());\r\nexports.TimerDOM = TimerDOM;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/dom/timer.ts?");

/***/ }),

/***/ "./src/app/dom/timersetting.ts":
/*!*************************************!*\
  !*** ./src/app/dom/timersetting.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TimerSettingDOM = void 0;\r\nvar timer_1 = __webpack_require__(/*! ../manager/timer */ \"./src/app/manager/timer.ts\");\r\nvar timer_2 = __webpack_require__(/*! ./timer */ \"./src/app/dom/timer.ts\");\r\nvar TimerSettingDOM = /** @class */ (function () {\r\n    function TimerSettingDOM() {\r\n    }\r\n    TimerSettingDOM.init = function () {\r\n        var _this = this;\r\n        var timer_select = document.getElementById(\"timerKinds\");\r\n        timer_select.addEventListener(\"change\", function () { return _this.changeTimerSettingView(timer_select.value); });\r\n        // コンテナのオブザーバー\r\n        var element = document.getElementById('timerSetting');\r\n        var observer = new MutationObserver(function () {\r\n            if (!(element === null || element === void 0 ? void 0 : element.classList.contains(\"is-show\")))\r\n                _this.CloseTimerSettingEvent(); //閉じられた時\r\n            else\r\n                _this.changeTimerSettingView(timer_select.value); //表示された時\r\n        });\r\n        var config = { attributes: true };\r\n        observer.observe(element, config);\r\n    };\r\n    TimerSettingDOM.getPomodoros = function () {\r\n        var pomodoros = document.getElementById(\"pomodoros\");\r\n        return parseInt(pomodoros.value);\r\n    };\r\n    TimerSettingDOM.changeTimerSettingView = function (value) {\r\n        var active_timer_setting = document.querySelector(\".timer-setting.is-show\");\r\n        active_timer_setting === null || active_timer_setting === void 0 ? void 0 : active_timer_setting.classList.remove(\"is-show\");\r\n        var request_timer_setting = document.querySelector(\".timer-setting[data-timer='\" + value + \"']\");\r\n        request_timer_setting === null || request_timer_setting === void 0 ? void 0 : request_timer_setting.classList.add(\"is-show\");\r\n    };\r\n    TimerSettingDOM.CloseTimerSettingEvent = function () {\r\n        var active_timer_setting = document.querySelector(\".timer-setting.is-show\");\r\n        timer_1.TimerManager.updateInitialTimer(active_timer_setting.getAttribute(\"data-timer\"));\r\n        active_timer_setting === null || active_timer_setting === void 0 ? void 0 : active_timer_setting.classList.remove(\"is-show\");\r\n        timer_2.TimerDOM.setTime;\r\n    };\r\n    TimerSettingDOM.show_timersetting_view = \"\";\r\n    return TimerSettingDOM;\r\n}());\r\nexports.TimerSettingDOM = TimerSettingDOM;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/dom/timersetting.ts?");

/***/ }),

/***/ "./src/app/dom/workbgm.ts":
/*!********************************!*\
  !*** ./src/app/dom/workbgm.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.WorkBGMDOM = void 0;\r\nvar workbgm_1 = __webpack_require__(/*! ../types/workbgm */ \"./src/app/types/workbgm.ts\");\r\nvar WorkBGMDOM = /** @class */ (function () {\r\n    function WorkBGMDOM() {\r\n    }\r\n    WorkBGMDOM.appendWorkBGM = function (workbgm) {\r\n        if (this.getWorkBGM(workbgm.video_id) != null)\r\n            return 1;\r\n        var base_html = \"\\n        <img class=\\\"rounded max-h-24\\\" src=\\\"\" + workbgm.thumbnail_url + \"\\\">\\n\\n        <div class=\\\"mx-2 items-center overflow-hidden\\\">\\n            <p class=\\\"truncate text-lg workbgm-title\\\">\" + workbgm.title + \"</p>\\n            <p class=\\\"text-gray-400 text-sm truncate workbgm-publisher\\\">\" + workbgm.publisher + \"</p>\\n            <button class=\\\"workbgm-action-bgm hover:bg-blue-50 active:bg-blue-300\\\">\\u60C5\\u5831</button>\\n            <button class=\\\"workbgm-action-bgm hover:bg-red-50 active:bg-red-300\\\">\\u524A\\u9664</button>\\n        </div>\\n        \";\r\n        var div = document.createElement(\"div\");\r\n        div.innerHTML = base_html;\r\n        div.setAttribute(\"data-ytid\", workbgm.video_id);\r\n        div.classList.add(\"workbgm-list\");\r\n        var container = document.getElementById(\"workbgm-list-container\");\r\n        container === null || container === void 0 ? void 0 : container.appendChild(div);\r\n        return 0;\r\n    };\r\n    WorkBGMDOM.appendWorkBGMFromRaw = function (title, publisher, thumbnail_url, video_id) {\r\n        return this.appendWorkBGM(new workbgm_1.WorkBGM(title, publisher, video_id, thumbnail_url));\r\n    };\r\n    WorkBGMDOM.getWorkBGM = function (video_id) {\r\n        var workbgm_dom = document.querySelector(\"div.workbgm-list[data-ytid='\" + video_id + \"']\");\r\n        if (workbgm_dom == null)\r\n            return null;\r\n        var title = workbgm_dom.getElementsByClassName(\"workbgm-title\")[0].textContent;\r\n        var publisher = workbgm_dom.getElementsByClassName(\"workbgm-publisher\")[0].textContent;\r\n        var thumbnail_url = workbgm_dom.getElementsByTagName(\"img\")[0].src;\r\n        return new workbgm_1.WorkBGM(title !== null && title !== void 0 ? title : \"Title\", publisher !== null && publisher !== void 0 ? publisher : \"Publisher\", video_id, thumbnail_url);\r\n    };\r\n    WorkBGMDOM.getAllWorkBGM = function () {\r\n        var workbgm_dom = document.querySelectorAll(\"div.workbgm-list\");\r\n        if (workbgm_dom == null)\r\n            return null;\r\n        var workbgm_list = new Array();\r\n        workbgm_dom.forEach(function (item) {\r\n            var title = item.getElementsByClassName(\"workbgm-title\")[0].textContent;\r\n            var publisher = item.getElementsByClassName(\"workbgm-publisher\")[0].textContent;\r\n            var thumbnail_url = item.getElementsByTagName(\"img\")[0].src;\r\n            var video_id = item.getAttribute(\"data-ytid\");\r\n            // Video IDがあるときのみ追加\r\n            if (video_id != null)\r\n                workbgm_list.push(new workbgm_1.WorkBGM(title !== null && title !== void 0 ? title : \"Title\", publisher !== null && publisher !== void 0 ? publisher : \"Publisher\", video_id, thumbnail_url));\r\n        });\r\n        return workbgm_list;\r\n    };\r\n    WorkBGMDOM.setErrorMessage = function (text) {\r\n        var error_message = document.getElementById(\"workbgm-error\");\r\n        error_message.textContent = text;\r\n    };\r\n    return WorkBGMDOM;\r\n}());\r\nexports.WorkBGMDOM = WorkBGMDOM;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/dom/workbgm.ts?");

/***/ }),

/***/ "./src/app/input_helper.ts":
/*!*********************************!*\
  !*** ./src/app/input_helper.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.InputHelper = void 0;\r\nvar time_1 = __webpack_require__(/*! ./types/time */ \"./src/app/types/time.ts\");\r\nvar InputHelper = /** @class */ (function () {\r\n    function InputHelper() {\r\n    }\r\n    InputHelper.init = function () {\r\n        var input_number = document.querySelectorAll(\"input[type='number']\");\r\n        input_number.forEach(function (item) {\r\n            item.addEventListener(\"change\", function () {\r\n                if (parseInt(item.value) > parseInt(item.max))\r\n                    item.value = item.max;\r\n                if (parseInt(item.value) < parseInt(item.min))\r\n                    item.value = item.min;\r\n                if (item.value == \"\")\r\n                    item.value = item.min;\r\n            });\r\n        });\r\n    };\r\n    InputHelper.getDateFromTimeGroup = function (timegroup) {\r\n        var hour = document.querySelector(\"[data-timegroup='\" + timegroup + \"'][data-timekind='hour']\");\r\n        var minute = document.querySelector(\"[data-timegroup='\" + timegroup + \"'][data-timekind='minute']\");\r\n        var second = document.querySelector(\"[data-timegroup='\" + timegroup + \"'][data-timekind='second']\");\r\n        return new time_1.Time(parseInt(hour.value), parseInt(minute.value), parseInt(second.value), 0);\r\n    };\r\n    return InputHelper;\r\n}());\r\nexports.InputHelper = InputHelper;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/input_helper.ts?");

/***/ }),

/***/ "./src/app/main.ts":
/*!*************************!*\
  !*** ./src/app/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar over_menu_1 = __webpack_require__(/*! ./over_menu */ \"./src/app/over_menu.ts\");\r\nvar workbgm_1 = __webpack_require__(/*! ./manager/workbgm */ \"./src/app/manager/workbgm.ts\");\r\nvar timer_1 = __webpack_require__(/*! ./manager/timer */ \"./src/app/manager/timer.ts\");\r\nvar input_helper_1 = __webpack_require__(/*! ./input_helper */ \"./src/app/input_helper.ts\");\r\nvar main_ui_1 = __webpack_require__(/*! ./dom/main_ui */ \"./src/app/dom/main_ui.ts\");\r\nwindow.onload = function () {\r\n    over_menu_1.OverMenu.init();\r\n    input_helper_1.InputHelper.init();\r\n    workbgm_1.WorkBGMManager.init();\r\n    timer_1.TimerManager.init();\r\n    var start_btn = document.getElementById(\"start\");\r\n    start_btn.addEventListener(\"click\", function () {\r\n        if (main_ui_1.MainUIDOM.is_stop_button)\r\n            timer_1.TimerManager.pauseTimer();\r\n        else if (main_ui_1.MainUIDOM.is_paused)\r\n            timer_1.TimerManager.resumeTimer();\r\n        else\r\n            timer_1.TimerManager.startTimer();\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/main.ts?");

/***/ }),

/***/ "./src/app/manager/timer.ts":
/*!**********************************!*\
  !*** ./src/app/manager/timer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TimerManager = void 0;\r\nvar main_ui_1 = __webpack_require__(/*! ../dom/main_ui */ \"./src/app/dom/main_ui.ts\");\r\nvar timer_1 = __webpack_require__(/*! ../dom/timer */ \"./src/app/dom/timer.ts\");\r\nvar timersetting_1 = __webpack_require__(/*! ../dom/timersetting */ \"./src/app/dom/timersetting.ts\");\r\nvar input_helper_1 = __webpack_require__(/*! ../input_helper */ \"./src/app/input_helper.ts\");\r\nvar pomodoro_1 = __webpack_require__(/*! ../types/pomodoro */ \"./src/app/types/pomodoro.ts\");\r\nvar time_1 = __webpack_require__(/*! ../types/time */ \"./src/app/types/time.ts\");\r\nvar TimerManager = /** @class */ (function () {\r\n    function TimerManager() {\r\n    }\r\n    TimerManager.init = function () {\r\n        var _this = this;\r\n        timersetting_1.TimerSettingDOM.init();\r\n        var timer_select = document.getElementById(\"timerKinds\");\r\n        timer_select.addEventListener(\"change\", function () { return _this.updateInitialTimer(timer_select.value); });\r\n        this.updateInitialTimer(timer_select.value);\r\n    };\r\n    TimerManager.updateInitialTimer = function (value) {\r\n        this.timer_kind = value;\r\n        switch (value) {\r\n            case \"timer\":\r\n                timer_1.TimerDOM.setTime(input_helper_1.InputHelper.getDateFromTimeGroup(\"timer\"));\r\n                timer_1.TimerDOM.setTimerDescription(\"Timer\");\r\n                break;\r\n            case \"stopwatch\":\r\n                timer_1.TimerDOM.setTime(new time_1.Time());\r\n                timer_1.TimerDOM.setTimerDescription(\"Stopwatch\");\r\n                break;\r\n            case \"pomodoro\":\r\n                timer_1.TimerDOM.setTime(input_helper_1.InputHelper.getDateFromTimeGroup(\"pomodoro-time\"));\r\n                timer_1.TimerDOM.setTimerDescription(\"Pomodoro 0 / \" + timersetting_1.TimerSettingDOM.getPomodoros());\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    };\r\n    TimerManager.startTimer = function () {\r\n        var _this = this;\r\n        main_ui_1.MainUIDOM.changePauseButton();\r\n        this.startTime = new Date();\r\n        if (this.timer_kind == \"pomodoro\")\r\n            this.pomodoro_info = new pomodoro_1.Pomodoro(timersetting_1.TimerSettingDOM.getPomodoros(), input_helper_1.InputHelper.getDateFromTimeGroup(\"pomodoro-time\"), input_helper_1.InputHelper.getDateFromTimeGroup(\"pomodoro-shortsleep-time\"), input_helper_1.InputHelper.getDateFromTimeGroup(\"pomodoro-longsleep-time\"));\r\n        else if (this.timer_kind == \"timer\") {\r\n            var time = input_helper_1.InputHelper.getDateFromTimeGroup(\"timer\");\r\n            this.endTime = this.startTime;\r\n            this.endTime.setHours(this.endTime.getHours() + time.hour, this.endTime.getMinutes() + time.minute, this.endTime.getSeconds() + time.second, this.endTime.getMilliseconds() + time.milisecond);\r\n        }\r\n        this.timer_interval = setInterval(function () { return _this.updateTimer(); }, 10);\r\n    };\r\n    TimerManager.updateTimer = function () {\r\n        var nowDate = Date.now();\r\n        var diff = nowDate - this.startTime.getTime();\r\n        var diff_hour, diff_minute, diff_second, diff_milisecond;\r\n        switch (this.timer_kind) {\r\n            case \"timer\":\r\n                if (nowDate >= this.endTime.getTime()) {\r\n                    this.stopTimer();\r\n                    return;\r\n                }\r\n                var diff_time = this.endTime.getTime() - nowDate;\r\n                // if (this.pause_diff_time != null) diff_time -= this.pause_diff_time;\r\n                diff_hour = diff_time / (1000 * 60 * 60);\r\n                diff_minute = (diff_hour - Math.floor(diff_hour)) * 60;\r\n                diff_second = (diff_minute - Math.floor(diff_minute)) * 60;\r\n                diff_milisecond = (diff_second - Math.floor(diff_second)) * 100;\r\n                timer_1.TimerDOM.setTimeFromRaw(Math.floor(diff_hour), Math.floor(diff_minute), Math.floor(diff_second), Math.floor(diff_milisecond));\r\n                break;\r\n            case \"stopwatch\":\r\n                diff_hour = diff / (1000 * 60 * 60);\r\n                diff_minute = (diff_hour - Math.floor(diff_hour)) * 60;\r\n                diff_second = (diff_minute - Math.floor(diff_minute)) * 60;\r\n                diff_milisecond = (diff_second - Math.floor(diff_second)) * 100;\r\n                timer_1.TimerDOM.setTimeFromRaw(Math.floor(diff_hour), Math.floor(diff_minute), Math.floor(diff_second), Math.floor(diff_milisecond));\r\n                break;\r\n            case \"pomodoro\":\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    };\r\n    TimerManager.resumeTimer = function () {\r\n        var _this = this;\r\n        this.timer_interval = setInterval(function () { return _this.updateTimer(); }, 10);\r\n        main_ui_1.MainUIDOM.changePauseButton();\r\n    };\r\n    TimerManager.pauseTimer = function () {\r\n        clearInterval(this.timer_interval);\r\n        main_ui_1.MainUIDOM.changeResumeButton();\r\n    };\r\n    TimerManager.stopTimer = function () {\r\n        clearInterval(this.timer_interval);\r\n        main_ui_1.MainUIDOM.changeStartButton();\r\n    };\r\n    TimerManager.timer_kind = \"\";\r\n    TimerManager.startTime = null;\r\n    TimerManager.endTime = null;\r\n    TimerManager.pomodoro_info = null;\r\n    return TimerManager;\r\n}());\r\nexports.TimerManager = TimerManager;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/manager/timer.ts?");

/***/ }),

/***/ "./src/app/manager/workbgm.ts":
/*!************************************!*\
  !*** ./src/app/manager/workbgm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.WorkBGMManager = void 0;\r\nvar workbgm_1 = __webpack_require__(/*! ../dom/workbgm */ \"./src/app/dom/workbgm.ts\");\r\nvar youtube_1 = __webpack_require__(/*! ../url/youtube */ \"./src/app/url/youtube.ts\");\r\nvar WorkBGMManager = /** @class */ (function () {\r\n    function WorkBGMManager() {\r\n    }\r\n    WorkBGMManager.init = function () {\r\n        var _this = this;\r\n        var url_input = document.getElementById(\"youtube-url-input\");\r\n        var workbgm_add_button = document.getElementById(\"workbgm-add-btn\");\r\n        url_input.addEventListener(\"keypress\", function (e) {\r\n            if (e.key == \"Enter\" && url_input.value != \"\")\r\n                _this.addWorkBGM(url_input.value);\r\n        });\r\n        workbgm_add_button.addEventListener(\"click\", function () {\r\n            if (url_input.value != \"\")\r\n                _this.addWorkBGM(url_input.value);\r\n        });\r\n    };\r\n    WorkBGMManager.addWorkBGM = function (youtube_url) {\r\n        workbgm_1.WorkBGMDOM.setErrorMessage(\"\");\r\n        var video_id = youtube_1.YoutubeURL.get_video_id(youtube_url);\r\n        if (video_id == null) {\r\n            workbgm_1.WorkBGMDOM.setErrorMessage(\"Youtube動画のURLではありません。\");\r\n            return;\r\n        }\r\n        if (workbgm_1.WorkBGMDOM.getWorkBGM(video_id) != null) {\r\n            workbgm_1.WorkBGMDOM.setErrorMessage(\"同じ動画を重複して登録することはできません。\");\r\n            return;\r\n        }\r\n        fetch(\"./api/youtube/get_video_info.php?id=\" + video_id + \"&part=snippet\")\r\n            .then(function (response) {\r\n            return response.json();\r\n        })\r\n            .then(function (json) {\r\n            workbgm_1.WorkBGMDOM.appendWorkBGMFromRaw(json[\"items\"][0][\"snippet\"][\"title\"], json[\"items\"][0][\"snippet\"][\"channelTitle\"], json[\"items\"][0][\"snippet\"][\"thumbnails\"][\"medium\"][\"url\"], video_id);\r\n        })\r\n            .catch(function (response) {\r\n            workbgm_1.WorkBGMDOM.setErrorMessage(\"内部エラーが発生しました。\");\r\n            console.error(\"[WorkBGM] API Error!!!\");\r\n            return response.json();\r\n        })\r\n            .catch(function (json) {\r\n            console.log(json);\r\n        });\r\n        return;\r\n    };\r\n    return WorkBGMManager;\r\n}());\r\nexports.WorkBGMManager = WorkBGMManager;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/manager/workbgm.ts?");

/***/ }),

/***/ "./src/app/over_menu.ts":
/*!******************************!*\
  !*** ./src/app/over_menu.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.OverMenu = void 0;\r\nvar OverMenu = /** @class */ (function () {\r\n    function OverMenu() {\r\n    }\r\n    OverMenu.init = function () {\r\n        var open_menu_btns = Array.prototype.slice.call(document.getElementsByClassName(\"open-menu-btn\"));\r\n        open_menu_btns.forEach(function (item) {\r\n            item.addEventListener(\"click\", function () {\r\n                var target_id = item.getAttribute(\"for\");\r\n                if (target_id == null || target_id == \"\")\r\n                    return;\r\n                var target_dom = document.getElementById(target_id);\r\n                target_dom === null || target_dom === void 0 ? void 0 : target_dom.classList.add(\"is-show\");\r\n            });\r\n        });\r\n        var close_menu_btns = Array.prototype.slice.call(document.getElementsByClassName(\"close-menu-btn\"));\r\n        close_menu_btns.forEach(function (item) {\r\n            item.addEventListener(\"click\", function () {\r\n                var target_id = item.getAttribute(\"for\");\r\n                if (target_id == null || target_id == \"\")\r\n                    return;\r\n                var target_dom = document.getElementById(target_id);\r\n                target_dom === null || target_dom === void 0 ? void 0 : target_dom.classList.remove(\"is-show\");\r\n            });\r\n        });\r\n    };\r\n    return OverMenu;\r\n}());\r\nexports.OverMenu = OverMenu;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/over_menu.ts?");

/***/ }),

/***/ "./src/app/types/pomodoro.ts":
/*!***********************************!*\
  !*** ./src/app/types/pomodoro.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Pomodoro = void 0;\r\nvar Pomodoro = /** @class */ (function () {\r\n    function Pomodoro(pomodoros, pomodoro_time, pomodoro_shortsleep_time, pomodoro_longsleep_time) {\r\n        this.pomodoros = pomodoros;\r\n        this.pomodoro_time = pomodoro_time;\r\n        this.pomodoro_shortsleep_time = pomodoro_shortsleep_time;\r\n        this.pomodoro_longsleep_time = pomodoro_longsleep_time;\r\n    }\r\n    return Pomodoro;\r\n}());\r\nexports.Pomodoro = Pomodoro;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/types/pomodoro.ts?");

/***/ }),

/***/ "./src/app/types/time.ts":
/*!*******************************!*\
  !*** ./src/app/types/time.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Time = void 0;\r\nvar Time = /** @class */ (function () {\r\n    function Time(hour, minute, second, milisecond) {\r\n        if (hour === void 0) { hour = 0; }\r\n        if (minute === void 0) { minute = 0; }\r\n        if (second === void 0) { second = 0; }\r\n        if (milisecond === void 0) { milisecond = 0; }\r\n        this.hour = hour;\r\n        this.minute = minute;\r\n        this.second = second;\r\n        this.milisecond = milisecond;\r\n    }\r\n    Time.prototype.zeroPaddingString = function (base) {\r\n        var base_string = base.toString();\r\n        if (base <= 0)\r\n            return \"00\";\r\n        else if (base > 0 && base < 10)\r\n            return \"0\" + base_string;\r\n        else\r\n            return base_string;\r\n    };\r\n    Time.zeroPaddingString = function (base) {\r\n        var base_string = base.toString();\r\n        if (base <= 0)\r\n            return \"00\";\r\n        else if (base > 0 && base < 10)\r\n            return \"0\" + base_string;\r\n        else\r\n            return base_string;\r\n    };\r\n    Time.fromDate = function (date) {\r\n        return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());\r\n    };\r\n    return Time;\r\n}());\r\nexports.Time = Time;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/types/time.ts?");

/***/ }),

/***/ "./src/app/types/workbgm.ts":
/*!**********************************!*\
  !*** ./src/app/types/workbgm.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.WorkBGM = void 0;\r\nvar WorkBGM = /** @class */ (function () {\r\n    function WorkBGM(title, publisher, video_id, thumbnail_url) {\r\n        this.title = title;\r\n        this.publisher = publisher;\r\n        this.video_id = video_id;\r\n        this.thumbnail_url = thumbnail_url;\r\n    }\r\n    return WorkBGM;\r\n}());\r\nexports.WorkBGM = WorkBGM;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/types/workbgm.ts?");

/***/ }),

/***/ "./src/app/url/youtube.ts":
/*!********************************!*\
  !*** ./src/app/url/youtube.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.YoutubeURL = void 0;\r\nvar YoutubeURL = /** @class */ (function () {\r\n    function YoutubeURL() {\r\n    }\r\n    YoutubeURL.get_video_id = function (youtube_url) {\r\n        var url_type = -1;\r\n        if (youtube_url.startsWith(\"https://www.youtube.com/watch?v=\") || youtube_url.startsWith(\"https://youtube.com/watch?v=\"))\r\n            url_type = 0;\r\n        else if (youtube_url.startsWith(\"https://youtu.be/\"))\r\n            url_type = 1;\r\n        else\r\n            url_type = 2;\r\n        if (url_type == 0)\r\n            return this.id_extract_normal(youtube_url); //通常URL\r\n        else if (url_type == 1)\r\n            return this.id_extract_short(youtube_url); //短縮URL\r\n        return null;\r\n    };\r\n    // 通常URLの動画ID抽出\r\n    YoutubeURL.id_extract_normal = function (youtube_url) {\r\n        var split_url = youtube_url.split('v=')[1];\r\n        if (split_url == null)\r\n            return null;\r\n        if (split_url.includes(\"&\"))\r\n            split_url = split_url.split(\"&\")[0];\r\n        return split_url;\r\n    };\r\n    // 短縮URLの動画ID抽出\r\n    YoutubeURL.id_extract_short = function (youtube_url) {\r\n        var match = youtube_url.match(\"https:\\/\\/youtu\\.be\\/(.*$)\");\r\n        if (match == null)\r\n            return null;\r\n        return match[1];\r\n    };\r\n    return YoutubeURL;\r\n}());\r\nexports.YoutubeURL = YoutubeURL;\r\n\n\n//# sourceURL=webpack://study-supporter/./src/app/url/youtube.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/main.ts");
/******/ 	
/******/ })()
;
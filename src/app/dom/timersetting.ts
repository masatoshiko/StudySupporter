import { InputHelper } from "../input_helper";
import { TimerManager } from "../manager/timer";
import { Time } from "../types/time";
import { TimerDOM } from "./timer";

export class TimerSettingDOM {
    private static show_timersetting_view: string = "";

    public static init() {
        let timer_select = <HTMLSelectElement>document.getElementById("timerKinds");
        timer_select.addEventListener("change", () => this.changeTimerSettingView(timer_select.value));

        // コンテナのオブザーバー
        const element = document.getElementById('timerSetting');
        let observer = new MutationObserver(() => {
            if (!element?.classList.contains("is-show")) this.CloseTimerSettingEvent(); //閉じられた時
            else this.changeTimerSettingView(timer_select.value); //表示された時
        });
        const config = { attributes: true };
        observer.observe(<Node>element, config);
    }

    public static getPomodoros(): number {
        let pomodoros = <HTMLInputElement>document.getElementById("pomodoros")!;
        return parseInt(pomodoros.value);
    }

    private static changeTimerSettingView(value: string) {
        let active_timer_setting = document.querySelector(".timer-setting.is-show");
        active_timer_setting?.classList.remove("is-show");
        let request_timer_setting = document.querySelector(`.timer-setting[data-timer='${value}']`);
        request_timer_setting?.classList.add("is-show");
    }

    private static CloseTimerSettingEvent() {
        let active_timer_setting = document.querySelector(".timer-setting.is-show");
        TimerManager.updateInitialTimer(active_timer_setting!.getAttribute("data-timer")!);
        active_timer_setting?.classList.remove("is-show");

        TimerDOM.setTime
    }
}
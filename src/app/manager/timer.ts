import { MainUIDOM } from "../dom/main_ui";
import { TimerDOM } from "../dom/timer";
import { TimerSettingDOM } from "../dom/timersetting";
import { InputHelper } from "../input_helper";
import { Pomodoro } from "../types/pomodoro";
import { Time } from "../types/time";

export class TimerManager {
    private static timer_kind: string = "";
    private static startTime: Date | null = null;
    private static endTime: Date | null = null;
    private static pomodoro_info: Pomodoro | null = null;
    private static timer_interval: NodeJS.Timeout;

    public static init() {
        TimerSettingDOM.init();

        let timer_select = <HTMLSelectElement>document.getElementById("timerKinds");
        timer_select.addEventListener("change", () => this.updateInitialTimer(timer_select.value));
        this.updateInitialTimer(timer_select.value);
    }

    public static updateInitialTimer(value: string) {
        this.timer_kind = value;
        switch (value) {
            case "timer":
                TimerDOM.setTime(InputHelper.getDateFromTimeGroup("timer"));
                TimerDOM.setTimerDescription("Timer");
                break;

            case "stopwatch":
                TimerDOM.setTime(new Time());
                TimerDOM.setTimerDescription("Stopwatch");
                break;

            case "pomodoro":
                TimerDOM.setTime(InputHelper.getDateFromTimeGroup("pomodoro-time"));
                TimerDOM.setTimerDescription(`Pomodoro 0 / ${TimerSettingDOM.getPomodoros()}`);
                break;
        
            default:
                break;
        }
    }

    public static startTimer() {
        MainUIDOM.changePauseButton();
        this.startTime = new Date();

        if (this.timer_kind == "pomodoro") this.pomodoro_info = new Pomodoro(TimerSettingDOM.getPomodoros(), InputHelper.getDateFromTimeGroup("pomodoro-time"),
            InputHelper.getDateFromTimeGroup("pomodoro-shortsleep-time"), InputHelper.getDateFromTimeGroup("pomodoro-longsleep-time"));
        else if (this.timer_kind == "timer") {
            let time = InputHelper.getDateFromTimeGroup("timer");
            this.endTime = this.startTime;
            this.endTime.setHours(this.endTime.getHours() + time.hour, this.endTime.getMinutes() + time.minute,
                this.endTime.getSeconds() + time.second, this.endTime.getMilliseconds() + time.milisecond);
        }
        this.timer_interval = setInterval(() => this.updateTimer(), 10);
    }

    public static updateTimer() {
        let nowDate: number = Date.now();
        let diff: number = nowDate - this.startTime!.getTime();

        let diff_hour, diff_minute, diff_second, diff_milisecond;
        switch (this.timer_kind) {
            case "timer":
                if (nowDate >= this.endTime!.getTime()) {
                    this.stopTimer();
                    return;
                }

                let diff_time = this.endTime!.getTime() - nowDate;
                // if (this.pause_diff_time != null) diff_time -= this.pause_diff_time;
                diff_hour = diff_time / (1000 * 60 * 60);
                diff_minute = (diff_hour - Math.floor(diff_hour)) * 60;
                diff_second = (diff_minute - Math.floor(diff_minute)) * 60;
                diff_milisecond = (diff_second - Math.floor(diff_second)) * 100;
                TimerDOM.setTimeFromRaw(Math.floor(diff_hour), Math.floor(diff_minute), Math.floor(diff_second), Math.floor(diff_milisecond));
                break;

            case "stopwatch":
                diff_hour = diff / (1000 * 60 * 60);
                diff_minute = (diff_hour - Math.floor(diff_hour)) * 60;
                diff_second = (diff_minute - Math.floor(diff_minute)) * 60;
                diff_milisecond = (diff_second - Math.floor(diff_second)) * 100;
                TimerDOM.setTimeFromRaw(Math.floor(diff_hour), Math.floor(diff_minute), Math.floor(diff_second), Math.floor(diff_milisecond));
                break;

            case "pomodoro":
                

                break;
        
            default:
                break;
        }
    }

    public static resumeTimer() {
        this.timer_interval = setInterval(() => this.updateTimer(), 10);
        MainUIDOM.changePauseButton();
    }

    public static pauseTimer() {
        clearInterval(this.timer_interval);
        MainUIDOM.changeResumeButton();
    }

    public static stopTimer() {
        clearInterval(this.timer_interval);
        MainUIDOM.changeStartButton();
    }
}
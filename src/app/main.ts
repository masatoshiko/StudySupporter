import { OverMenu } from "./over_menu";
import { WorkBGMManager } from "./manager/workbgm";
import { TimerManager } from "./manager/timer";
import { InputHelper } from "./input_helper";
import { MainUIDOM } from "./dom/main_ui";
import { TimerSettingDOM } from "./dom/timersetting";

window.onload = () => {
    OverMenu.init();
    InputHelper.init();
    WorkBGMManager.init();
    TimerManager.init();

    let start_btn = document.getElementById("start");
    start_btn!.addEventListener("click", () => {
        if (MainUIDOM.is_stop_button) TimerManager.pauseTimer();
        else if (MainUIDOM.is_paused) TimerManager.resumeTimer();
        else TimerManager.startTimer();
    });
}

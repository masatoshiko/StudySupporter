export class MainUIDOM {
    public static is_stop_button = false;
    public static is_paused = false;

    public static changePauseButton() {
        let start_button = document.getElementById("start");
        start_button!.textContent = "ポーズ";
        this.is_stop_button = true;
        this.is_paused = false;
    }

    public static changeStartButton() {
        let start_button = document.getElementById("start");
        start_button!.textContent = "スタート";
        this.is_stop_button = false;
        this.is_paused = false;
    }

    public static changeResumeButton() {
        let start_button = document.getElementById("start");
        start_button!.textContent = "再開";
        this.is_stop_button = false;
        this.is_paused = true;
    }
}
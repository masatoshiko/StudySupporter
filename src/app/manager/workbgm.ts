import { WorkBGMDOM } from "../dom/workbgm";
import { YoutubeURL } from "../url/youtube";

export class WorkBGMManager {
    public static init() {
        let url_input = <HTMLInputElement>document.getElementById("youtube-url-input")!;
        let workbgm_add_button = <HTMLElement>document.getElementById("workbgm-add-btn")!;

        url_input.addEventListener("keypress", (e) => {
            if (e.key == "Enter" && url_input.value != "") this.addWorkBGM(url_input.value);
        });
        workbgm_add_button.addEventListener("click", () => {
            if (url_input.value != "") this.addWorkBGM(url_input.value);
        })
    }

    private static addWorkBGM(youtube_url: string) {
        WorkBGMDOM.setErrorMessage("");
        let video_id = YoutubeURL.get_video_id(youtube_url);
        if (video_id == null) {
            WorkBGMDOM.setErrorMessage("Youtube動画のURLではありません。");
            return;
        }
        if (WorkBGMDOM.getWorkBGM(video_id) != null) {
            WorkBGMDOM.setErrorMessage("同じ動画を重複して登録することはできません。");
            return;
        }

        fetch(`./api/youtube/get_video_info.php?id=${video_id}&part=snippet`)
            .then(response => {
                return response.json();
            })
            .then(json => {
                WorkBGMDOM.appendWorkBGMFromRaw(json["items"][0]["snippet"]["title"], json["items"][0]["snippet"]["channelTitle"],
                    json["items"][0]["snippet"]["thumbnails"]["medium"]["url"], video_id!);
            })
            .catch(response => {
                WorkBGMDOM.setErrorMessage("内部エラーが発生しました。");
                console.error("[WorkBGM] API Error!!!");
                return response.json();
            })
            .catch(json => {
                console.log(json);
            });

        return;
    }
}
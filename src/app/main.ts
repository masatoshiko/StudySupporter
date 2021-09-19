import { OverMenu } from "./over_menu";
import { DOMWorkBGM } from "./dom/workbgm";

window.onload = () => {
    OverMenu.init();
    DOMWorkBGM.appendWorkBGM("【コマンドー】シュワぴょい伝説【 #玄田哲章生誕祭2021 】", "じごあく", "https://i.ytimg.com/vi/m6Yx7eNxugI/mqdefault.jpg", "22222");
    DOMWorkBGM.appendWorkBGM("や", "田所浩二", "https://i.ytimg.com/vi/m6Yx7eNxugI/mqdefault.jpg", "22122");

    DOMWorkBGM.getWorkBGM("22122");
}

import { WorkBGM } from "../types/workbgm";

export class WorkBGMDOM {
    public static appendWorkBGM(workbgm: WorkBGM): number {
        if (this.getWorkBGM(workbgm.video_id) != null) return 1;
        const base_html = `
        <img class="rounded max-h-24" src="${workbgm.thumbnail_url}">

        <div class="mx-2 items-center overflow-hidden">
            <p class="truncate text-lg workbgm-title">${workbgm.title}</p>
            <p class="text-gray-400 text-sm truncate workbgm-publisher">${workbgm.publisher}</p>
            <button class="workbgm-action-bgm hover:bg-blue-50 active:bg-blue-300">情報</button>
            <button class="workbgm-action-bgm hover:bg-red-50 active:bg-red-300">削除</button>
        </div>
        `

        let div = document.createElement("div");
        div.innerHTML = base_html;
        div.setAttribute("data-ytid", workbgm.video_id);
        div.classList.add("workbgm-list");
        let container = document.getElementById("workbgm-list-container");
        container?.appendChild(div);
        return 0;
    }

    public static appendWorkBGMFromRaw(title: string, publisher: string, thumbnail_url: string, video_id: string): number {
        return this.appendWorkBGM(new WorkBGM(title, publisher, video_id, thumbnail_url));
    }

    public static getWorkBGM(video_id: string): WorkBGM | null {
        const workbgm_dom = document.querySelector(`div.workbgm-list[data-ytid='${video_id}']`);
        if (workbgm_dom == null) return null;

        const title = workbgm_dom.getElementsByClassName("workbgm-title")[0].textContent;
        const publisher = workbgm_dom.getElementsByClassName("workbgm-publisher")[0].textContent;
        const thumbnail_url = workbgm_dom.getElementsByTagName("img")[0].src;
        
        return new WorkBGM(title ?? "Title", publisher ?? "Publisher", video_id, thumbnail_url);
    }

    public static getAllWorkBGM(): Array<WorkBGM> | null {
        const workbgm_dom = document.querySelectorAll(`div.workbgm-list`);
        if (workbgm_dom == null) return null;

        let workbgm_list: Array<WorkBGM> = new Array<WorkBGM>();
        workbgm_dom.forEach((item: Element) => {
            const title = item.getElementsByClassName("workbgm-title")[0].textContent;
            const publisher = item.getElementsByClassName("workbgm-publisher")[0].textContent;
            const thumbnail_url = item.getElementsByTagName("img")[0].src;
            const video_id = item.getAttribute("data-ytid");

            // Video IDがあるときのみ追加
            if (video_id != null) workbgm_list.push(new WorkBGM(title ?? "Title", publisher ?? "Publisher", video_id, thumbnail_url)); 
        });

        return workbgm_list;
    }

    public static setErrorMessage(text: string) {
        let error_message = document.getElementById("workbgm-error")!;
        error_message.textContent = text;
    }
}
export class DOMWorkBGM {
    private static workBgmContainerDOM = document.getElementById("workBgm")!;
    public static appendWorkBGM(title: string, publisher: string, image_url: string, video_id: string) {
        let base_html = `
        <img class="rounded max-h-24" src="${image_url}">

        <div class="mx-2 items-center overflow-hidden">
            <p class="truncate text-lg workbgm-title">${title}</p>
            <p class="text-gray-400 text-sm truncate workbgm-publisher">${publisher}</p>
            <button class="workbgm-action-bgm hover:bg-blue-50 active:bg-blue-300">情報</button>
            <button class="workbgm-action-bgm hover:bg-red-50 active:bg-red-300">削除</button>
        </div>
        `

        let div = document.createElement("div");
        div.innerHTML = base_html;
        div.setAttribute("data-ytid", video_id);
        div.classList.add("workbgm-list");
        let container = document.getElementById("workbgm-list-container");
        container?.appendChild(div);
    }

    public static getWorkBGM(video_id: string) {
        let workbgm_dom = document.querySelector(`div.workbgm-list[data-ytid='${video_id}']`);
        if (workbgm_dom == null) return null;

        let title = workbgm_dom.getElementsByClassName("workbgm-title")[0];
        let publisher = workbgm_dom.getElementsByClassName("workbgm-publisher")[0];

        console.log(`Title: ${title.textContent} / Publisher: ${publisher.textContent}`);
    }
}
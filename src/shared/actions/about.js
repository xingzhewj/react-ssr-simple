export const ABOUT_MESSAGE = 'ABOUT_MESSAGE';

function noticeMessage(json = {}) {
    return {
        type: ABOUT_MESSAGE,
        payload: json
    }
}

export function aboutReceive(json) {
    return noticeMessage(json);
}

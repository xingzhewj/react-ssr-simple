export const UPDATE_SEX = 'UPDATE_SEX';

function updateSex(payload = {}) {
    return {
        type: UPDATE_SEX,
        payload,
    };
}

export function homeReceive(json) {
    updateSex(json);
};

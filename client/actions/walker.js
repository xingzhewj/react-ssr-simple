export const TEST_ADD = 'TEST_ADD';

export function walker(payload) {
    return {
        type: TEST_ADD,
        payload
    };
}
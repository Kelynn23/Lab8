
const  formatVolumeIconPath = require('../assets/scripts/main');
describe('check correct volume level',() => {
    test('high_level_check', () => {
        expect(formatVolumeIconPath(70)).toContain('3');
    });
    test('mid_level_check', () => {
        expect(formatVolumeIconPath(40)).toContain('2');
    });
    test('low_level_check', () => {
        expect(formatVolumeIconPath(25)).toContain('1');
    });
    test('mute_level_check', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
})
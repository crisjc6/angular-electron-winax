import { ButtonComponent } from '../../components/button-component/button-component';
import { buttonElements, IconsKeyStrings } from '../../settings/game-constants-strings/game-elements-strings';
import { gameStatus } from '../../settings/game-system-specifications';

export function switchGameSoundStatus(
    _scene: Phaser.Scene,
    _soundButton: ButtonComponent,
    _isSwitch: boolean
) {
    const buttonBackground = _soundButton.getByName(buttonElements.BUTTON_BACKGROUND) as Phaser.GameObjects.Image;
    const buttonText = _soundButton.getByName(buttonElements.BUTTON_TEXT) as Phaser.GameObjects.Text;

    if (!gameStatus.isMusicPlaying) {
        // gameStatus.gameMusic.play({
        //     loop: true
        // });
        gameStatus.isMusicPlaying = true;
    } else {
        gameStatus.isMusicPlaying = false;
    }

    if (!gameStatus.isMusicPlaying) {
        // if (_scene.game.sound.mute === false) {
        // _scene.game.sound.mute = true;
        gameStatus.isSoundMuted = true;
        buttonBackground.setTexture(IconsKeyStrings.OFF_SOUND_ICON);
        if (!_isSwitch) {
            buttonText.setText('ENCENDER SONIDO');
        }
    } else {
        // _scene.game.sound.mute = false;
        gameStatus.isSoundMuted = false;
        buttonBackground.setTexture(IconsKeyStrings.ON_SOUND_ICON);
        if (!_isSwitch) {
            buttonText.setText('APAGAR SONIDO');
        }
    }
}
   
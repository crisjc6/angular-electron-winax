import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { settingsMenuElementsSpecifications } from "./settings-menu-elements-specifications";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "./../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "./../../settings/game-constants-strings/game-events-strings";
import { SceneGameElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";

export class SettingsMenu extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;

    private sceneBackground: Phaser.GameObjects.Image;
    private closeButton: ButtonComponent;
    private soundSwitchButton: Phaser.GameObjects.Image;
    private keyboardCheckIcon: Phaser.GameObjects.Image;
    private gamepadCheckIcon: Phaser.GameObjects.Image;
    private keyboardText: Phaser.GameObjects.Text;
    private gamepadText: Phaser.GameObjects.Text;
    private saveSettingsButtons: ButtonComponent;
    private settingsStatus: {soundStatus: boolean} = {
        soundStatus: false,
        // showGamepad: false
    }

    init(sceneData: SceneDataInterface) {
        this.sceneData = sceneData;
        // this.sceneData = {
        //     returnSceneName: GameSceneIdsStrings.SETTINGS_SCENE_ID
        // };
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.SETTINGS_SCENE_ID
        });
        this.sceneGameObjects = new Map();
    }

    create() {
        
        this.generateScene();
        this.getElements();

        this.settingsStatus = {
            soundStatus: this.game.sound.mute,
            // showGamepad: GameStatus.showGamepad
        }
        // this.settingsStatus.soundStatus ? this.offSwitchIcon() : this.onSwitchIcon();

        // this.updateCheckStatus();
        this.addFunctionality();
    }

    private generateScene() {
        this.gameFacade = new GameFacade(this, settingsMenuElementsSpecifications);
        this.sceneGameObjects = this.gameFacade.getGameObjects;
    }

    private getElements() {
        
        this.sceneBackground = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_BACKGROUND
        ).gameObject;
        this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);

        this.closeButton = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_CLOSE_BUTTON
        ).gameObject;

        // this.soundSwitchButton = this.sceneGameObjects.get(
        //     SettingsMenuElementsString.SOUND_SWITCH
        // ).gameObject;
        
        // this.keyboardCheckIcon = this.sceneGameObjects.get(
        //     SettingsMenuElementsString.KEYBOARD_CHECK
        // ).gameObject;
        
        // this.gamepadCheckIcon = this.sceneGameObjects.get(
        //     SettingsMenuElementsString.GAMEPAD_CHECK
        // ).gameObject;

        // this.keyboardText = this.sceneGameObjects.get(
        //     SettingsMenuElementsString.KEYBOARD_SUBTITLE
        // ).gameObject as Phaser.GameObjects.Text;

        // this.gamepadText = this.sceneGameObjects.get(
        //     SettingsMenuElementsString.GAMEPAD_TITLE
        // ).gameObject as Phaser.GameObjects.Text;

        this.saveSettingsButtons = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_SAVE_SETTINGS_BUTTON
        ).gameObject;
    }

    private addFunctionality() {
    //     addTintOnGameButton(this.closeButton);
        this.closeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );

    //     addPointerOverOnInteractiveObject(this.saveSettingsButtons);
        this.saveSettingsButtons.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                // GameStatus.showGamepad = this.settingsStatus.showGamepad;
                // if (!GameStatus.isMusicPlaying && !this.settingsStatus.soundStatus) {
                //     GameStatus.gameMusic.play({
                //         loop: true
                //     });
                //     GameStatus.isMusicPlaying = true;
                // }
                // GameStatus.isSoundMuted = this.settingsStatus.soundStatus;
                // this.game.sound.mute = this.settingsStatus.soundStatus;
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );

    //     this.soundSwitchButton.setInteractive().on(
    //         EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
    //             this.settingsStatus.soundStatus = !this.settingsStatus.soundStatus;
    //             this.settingsStatus.soundStatus ? this.offSwitchIcon() : this.onSwitchIcon();
    //         }
    //     );

    //     addPointerOverIconButton(this.keyboardCheckIcon);
    //     this.keyboardCheckIcon.setInteractive().on(
    //         EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
    //             this.settingsStatus.showGamepad = false;
    //             this.keyboardCheckIcon.setTexture(iconsKeyStrings.CHECK_ICON);
    //             this.gamepadCheckIcon.setTexture(iconsKeyStrings.BLANK_CHECK_ICON);
    //             this.gamepadText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //             this.keyboardText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    //         }
    //     );

    //     addPointerOverIconButton(this.gamepadCheckIcon);
    //     this.gamepadCheckIcon.setInteractive().on(
    //         EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
    //             this.settingsStatus.showGamepad = true;
    //             this.gamepadCheckIcon.setTexture(iconsKeyStrings.CHECK_ICON);
    //             this.keyboardCheckIcon.setTexture(iconsKeyStrings.BLANK_CHECK_ICON);
    //             this.keyboardText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //             this.gamepadText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    //         }
    //     );
    }

    // private updateCheckStatus() {
    //     if (GameStatus.showGamepad) {
    //         this.keyboardCheckIcon.setTexture(iconsKeyStrings.BLANK_CHECK_ICON);
    //         this.gamepadCheckIcon.setTexture(iconsKeyStrings.CHECK_ICON);
    //         this.keyboardText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //         this.gamepadText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    //     } else {
    //         this.keyboardCheckIcon.setTexture(iconsKeyStrings.CHECK_ICON);
    //         this.gamepadCheckIcon.setTexture(iconsKeyStrings.BLANK_CHECK_ICON);
    //         this.gamepadText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //         this.keyboardText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    //     }
    // }
    
    // private offSwitchIcon() {
    //     const onSoundText = this.sceneGameObjects.get(
    //         SettingsMenuElementsString.ON_SOUND_TITLE
    //     ).gameObject as Phaser.GameObjects.Text;

    //     const offSoundText = this.sceneGameObjects.get(
    //         SettingsMenuElementsString.OFF_SOUND_TITLE
    //     ).gameObject as Phaser.GameObjects.Text;
        
    //     this.soundSwitchButton.setTexture(iconsKeyStrings.OFF_SWITCH_ICON);
    //     onSoundText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //     offSoundText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    // }
    
    // private onSwitchIcon() {
    //     const onSoundText = this.sceneGameObjects.get(
    //         SettingsMenuElementsString.ON_SOUND_TITLE
    //     ).gameObject as Phaser.GameObjects.Text;

    //     const offSoundText = this.sceneGameObjects.get(
    //         SettingsMenuElementsString.OFF_SOUND_TITLE
    //     ).gameObject as Phaser.GameObjects.Text;
        
    //     this.soundSwitchButton.setTexture(iconsKeyStrings.ON_SWITCH_ICON);
    //     offSoundText.style.setColor(ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING);
    //     onSoundText.style.setColor(ColorsString.PURPLE_HEXADECIMAL_STRING);
    // }
}
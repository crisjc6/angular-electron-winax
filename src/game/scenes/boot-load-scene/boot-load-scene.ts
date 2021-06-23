import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameAssets } from "../../settings/game-assets";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { _firstLogoSpecifications, _loadBackgroundSpecifications, _progressBarSpecifications, _progressTextSpecifications, _secondLogoSpecifications, _thirdLogoSpecifications, _titleGameSpecifications } from "./boot-load-const-specifications";
import { GameObjectScaleInterface } from "../../interfaces/game-object-scale-interface";
import { scaleGameObject } from "../../functions/scale-functions/scale-functions";
import { generateGameObjectImage } from "../../functions/image-functions/image-functions";
import { generateGameObjectText } from "../../functions/text-functions/text-functions";
import { cursorURL } from "../../settings/game-system-specifications";

export class BootLoadScene extends Phaser.Scene {
  private progressBarScale: GameObjectScaleInterface;
  private loadBarScale: GameObjectScaleInterface;
  private graphics: Phaser.GameObjects.Graphics;
  private newGraphics: Phaser.GameObjects.Graphics;
  private progressBarText: Phaser.GameObjects.Text;
  private progressText: Phaser.GameObjects.Text;
  private progressAnimation: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: GameSceneIdsStrings.BOOT_LOAD_SCENE_ID
    });
  }


  preload() {

    loadFonts();
    
    this.load.image('main-scene-background', '.../../assets/game-assets/boot-load-assets/scene-backgrounds-assets/main-scene-background.png');

    // this.load.on('filecomplete-image-modal-scene-background',
    //   () => {
    //     this.load.image('first-logo-background', '../../assets/game-assets/boot-load-assets/logos-assets/first-logo-background.png');
    //   }
    // )
    
    // this.load.on('filecomplete-image-first-logo-background',
    //   () => {
    //     this.load.image('second-logo-background', '.../../assets/game-assets/boot-load-assets/logos-assets/second-logo-background.png');
    //   }
    // )

    // this.load.on('filecomplete-image-second-logo-background',
    //   () => {
    //     this.load.image('third-logo-background', '.../../assets/game-assets/boot-load-assets/logos-assets/third-logo-background.png');
    //   }
    // )

    // this.load.on('filecomplete-image-third-logo-background',
    this.load.on('filecomplete-image-main-scene-background',
      () => {

        this.createScene();
        loadAssetsArrayGame(this, gameAssets);

        this.load.on('progress',
          (percentage) => {
            this.updateLoadBar(percentage);
          }
        );
      }
    )

  }

  private createScene() {

    
    this.input.setDefaultCursor(cursorURL.defaultCursorURL);

    const backgroundSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_loadBackgroundSpecifications));
    const sceneBackground = this.generateImage(backgroundSpecifications);
    // sceneBackground.setAlpha(0.25);

    // const firstLogoSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_firstLogoSpecifications));
    // this.generateLogo(firstLogoSpecifications);

    // const secondLogoSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_secondLogoSpecifications));
    // this.generateLogo(secondLogoSpecifications);

    // const thirdLogoSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_thirdLogoSpecifications));
    // this.generateLogo(thirdLogoSpecifications);

    const titleGameSceneSpecification: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_titleGameSpecifications));
    this.generateText(titleGameSceneSpecification);

    const progressBarTextSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_progressTextSpecifications));
    this.progressBarText = this.generateText(progressBarTextSpecifications);

    const barSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_progressBarSpecifications));
    barSpecifications.scale = scaleGameObject(this, barSpecifications.scale);
    this.generateBar(barSpecifications.scale);

    const progressLoadTextSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_progressBarSpecifications));
    const progressLoadAnimationSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(_progressBarSpecifications));
    progressLoadTextSpecifications.scale.objectPositionY += 110;
    progressLoadAnimationSpecifications.scale.objectPositionY -= 18;
    this.progressText = this.generateText(progressLoadTextSpecifications);
    this.progressAnimation = this.generateText(progressLoadAnimationSpecifications);

    this.animateTextBar();

    this.load.on('fileprogress',
      (file) => {
        if (this.progressText !== null && this.progressText !== undefined) {
          this.progressText.setFontSize(25);
          this.progressText.setText('Cargando recurso: ' + file.key);
        }
      }
    );
  }

  private animateTextBar() {
    if (this.progressAnimation !== null && this.progressAnimation !== undefined) {
      setTimeout(() => {
        this.addPointText('.');
        setTimeout(() => {
          this.addPointText('. .');
          setTimeout(() => {
            this.addPointText('. . .');
            setTimeout(() => {
              this.animateTextBar();
            }, 250);
          }, 250);
        }, 250);
      }, 250);
    }
  }

  private addPointText(text: string) {
    if (this.progressAnimation !== null && this.progressAnimation !== undefined) {
      // try {
        this.progressAnimation.setText(text);
      // } catch (error) {
        
      // }
    }
  }

  private generateImage(logoSpecifications: GameElementSpecificationsInterface): Phaser.GameObjects.Image {
    logoSpecifications.scale = scaleGameObject(this, logoSpecifications.scale);
    const logo = generateGameObjectImage(this, logoSpecifications);
    logo.setOrigin(logoSpecifications.originX, logoSpecifications.originY);
    this.add.existing(logo);
    return logo;
  }

  private generateText(textSpecifications: GameElementSpecificationsInterface): Phaser.GameObjects.Text {
    textSpecifications.scale = scaleGameObject(this, textSpecifications.scale);
    const text = generateGameObjectText(this, textSpecifications);
    this.add.existing(text);
    return text;
  }

  private generateBar(scale: GameObjectScaleInterface) {
    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();

    this.progressBarScale = scale;
    this.progressBarScale.objectPositionX = (scale.objectPositionX - scale.objectWidth / 2);
    this.progressBarScale.objectPositionY = (scale.objectPositionY - scale.objectHeight / 2)-5;

    const progressBar = new Phaser.Geom.Rectangle(this.progressBarScale.objectPositionX, this.progressBarScale.objectPositionY, this.progressBarScale.objectWidth, this.progressBarScale.objectHeight);
    this.graphics.fillStyle(ColorsValue.WHITE_HEXADECIMAL_VALUE, 1);
    this.graphics.fillRectShape(progressBar);

    this.loadBarScale = scale;
    this.loadBarScale.objectWidth = scale.objectWidth - 11;
    this.loadBarScale.objectHeight = scale.objectHeight - 11;
    this.loadBarScale.objectPositionX = this.progressBarScale.objectPositionX + 6;
    this.loadBarScale.objectPositionY = this.progressBarScale.objectPositionY + 6;

    this.updateLoadBar(0.0003);
  }

  private updateLoadBar(percentage: number) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(ColorsValue.DARK_GRAY_HEXADECIMAL_VALUE, 1);
    this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(this.loadBarScale.objectPositionX, this.loadBarScale.objectPositionY, percentage * this.loadBarScale.objectWidth, this.loadBarScale.objectHeight));
    percentage = percentage * 100;
    this.progressBarText.setText("CARGANDO: " + percentage.toFixed(2) + "%");
  }

  create() {
    this.progressAnimation = null;
    this.progressBarText.setText('CONSTRUYENDO JUEGO . . .');
      setTimeout(() => {
        this.scene.stop(this.scene.key);  
        this.scene.start(GameSceneIdsStrings.MAIN_SCENE_ID);
      }, 1010);
  }

}

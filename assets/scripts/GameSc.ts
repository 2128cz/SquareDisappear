import { Msger } from "./Msger";
import BrickSc from "./BrickSc";
import DelayDelSc from "./DelayDelSc";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSc extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;
    @property(cc.Node)
    bricksLayer: cc.Node = null;
    @property(cc.Node)
    closeLayer: cc.Node = null;
    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;
    @property(dragonBones.ArmatureDisplay)
    xiaochuEffect: dragonBones.ArmatureDisplay = null;
    @property(dragonBones.ArmatureDisplay)
    quanjiEffect: dragonBones.ArmatureDisplay = null;


    // LIFE-CYCLE CALLBACKS:
    private points: number[] = [];
    private begin_y: number = 694;
    
    onLoad() {
        this.quanjiEffect.node.active = false;
        Msger.on(Msger.on_game_begin, this.on_game_begin, this);
        Msger.on(Msger.on_game_revie, this.on_game_revie, this);
        for (const iterator of this.bricksLayer.children) {
            this.points.push(iterator.x);
        }
        this.bricksLayer.removeAllChildren();
    }
    private on_game_revie() {
        this.isPaused = false;
        this.gametime *= 0.25;
    }
    private on_game_begin() {
        this.score = 0;
        this.gametime = 0;
        this.isPaused = false;
        this.bricksLayer.removeAllChildren();
    }
    gametime = 0;

    private _score: number;
    public get score(): number {
        return this._score;
    }
    public set score(v: number) {
        this._score = v;
        this.scoreLabel.string = v.toString();
    }
    isPaused = true;
    private movespeed = 150;
    g_movespeed_sc = 1;

    update(dt) {
        if (this.isPaused) {
            return;
        }
        this.gametime += dt;
        if (this.gametime > 60) {
            this.gametime = 60;
        }
        for (let item of this.closeLayer.children) {
            if (item.getComponent(DelayDelSc)) {
                continue;
            }
            this.score += this.closeOne(item);
        }
        let topBrick = null;
        for (let item of this.bricksLayer.children) {
            let sc = item.getComponent(BrickSc);
            let movespdsc = this.g_movespeed_sc;
            ///对于不是打上去的砖块则特殊处理一下
            if (sc.moveSpeed != 0) {
                movespdsc = 1;
            }
            item.y -= dt * (this.movespeed + sc.moveSpeed) * movespdsc * (this.gametime / 60 + 1);
            if (sc.moveSpeed != 0) {
                this.check_collision(item);
            } else {
                // 
                if (topBrick == null) {
                    topBrick = item;
                } else if (item.y > topBrick.y) {
                    topBrick = item;
                }
            }
        }
        if (this.bricksLayer.childrenCount <= 0) {
            this.add_line_bricks();
        } else if (topBrick) {
            if (topBrick.y < this.begin_y) {
                this.add_line_bricks(topBrick);
            }
        }
        this.check_line_close();
    }
    private check_line_close() {
        let array = [];
        for (let item of this.bricksLayer.children) {
            let key = Math.floor(item.y / item.height);
            if (array[key]) {
                array[key].push(item);
            } else {
                array[key] = [item];
            }
        }
        for (let key in array) {
            if (array[key].length === 4) {
                let y = array[key][2].y;
                for (let item of array[key]) {
                    (item as cc.Node).parent = this.closeLayer;
                    (item as cc.Node).y = y;
                }
                //显示特效
                this.xiaochuEffect.playAnimation("newAnimation", 1);
                this.xiaochuEffect.node.y = array[key][0].y + array[key][0].height;
                Msger.emit(Msger.on_play_sound, 8);
            }
        }
    }
    private check_collision(brick: cc.Node) {
        for (let item of this.bricksLayer.children) {
            if (brick == item || item.getComponent(BrickSc).moveSpeed != 0) {
                continue;
            }
            if (brick.x == item.x) {
                if (brick.y >= item.y - item.height) {
                    // console.log(item.height,item.y);
                    brick.y = item.y - item.height;
                    brick.getComponent(BrickSc).moveSpeed = 0;
                    break;
                }
            }
        }
    }
    private closeOne(brick: cc.Node) {
        let score = 1;
        for (let i = 1; i < 9; i++) {
            let getBrick = this.getOneBrickFromXY(brick.x, brick.y - brick.height * i);
            if(getBrick?.getComponent(BrickSc)?.moveSpeed != 0){
                continue;
            }
            if (getBrick) {
                score += this.closeOne(getBrick);
            }
        }
        brick.removeFromParent(true);
        Msger.emit(Msger.on_clean_brick, this.closeLayer, brick.position);
        return score;
    }
    private getOneBrickFromXY(x, y) {
        for (let item of this.bricksLayer.children) {
            let indexX = Math.floor(item.x / item.width);
            let indexY = Math.floor(item.y / item.height);
            if (indexY == Math.floor(y / item.height) && indexX == Math.floor(x / item.width)) {
                return item;
            }
        }
        return null;
    }
    add_line_bricks(topBrick: cc.Node = null) {
        let sum = Math.random() * 3;
        sum = Math.floor(sum) + 2;
        if (sum == 4) {
            sum = 3;
        }
        let temp = [];
        for (let i = 0; i < sum; i++) {
            let brick = cc.instantiate(this.blockPrefab);
            brick.y = topBrick == null ? this.begin_y : topBrick.y + topBrick.height;
            let j = 0;
            do {
                j = Math.floor(Math.random() * this.points.length);
            } while (temp.indexOf(j) >= 0);
            temp.push(j);
            brick.x = this.points[j];
            this.bricksLayer.addChild(brick);
        }
    }
    onclick_back() {
        Msger.emit(Msger.on_play_sound, 1);
        Msger.emit(Msger.on_changeto_start);
        this.isPaused = true;
    }
    add_move_brick(index) {
        let brick = cc.instantiate(this.blockPrefab);
        brick.y = -this.begin_y + 200;
        brick.x = this.points[index];
        brick.getComponent(BrickSc).moveSpeed = -2000;
        this.bricksLayer.addChild(brick);
    }
    play_hit_effect() {
        this.quanjiEffect.node.active = true;
        let array = this.bricksLayer.children.sort((a, b) => {
            return a.y - b.y;
        })
        this.quanjiEffect.node.y = array[0].y + 300;
        this.quanjiEffect.playAnimation("newAnimation", 1);
    }
}

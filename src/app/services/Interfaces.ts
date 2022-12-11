    export interface Unit {
        _id: string;
        unitCategory: number;
        objectCategory: number;
        threatLvl: number;
        natoName: string;
        warbondCost: number;
        unitAttributes: string[];
    }
    export interface Weapon {
        _id: string;
        warbondCost: number;
        warbondKillMultiplier: number;
        isAntiRadiation: boolean;
        name: string;
        category: string;
        warheadName: string;
        displayName: string;
        weapon_name: string;
        guidanceType: number;
        missileCategory: number;
        warheadType: number;
    }

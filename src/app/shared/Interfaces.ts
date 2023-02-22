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
// Generated by https://quicktype.io

export interface Campaign {
    _id:                     string;
    campaignId?:              string;
    totalMinutesPlayed_blue: number;
    totalMinutesPlayed_red:  number;
    createdAt:               string;
    updatedAt:               string;
    endedAt?:                 string;
  }
    // Generated by https://quicktype.io

export interface CampaignEvent {
    _id:                 string;
    sessionName:         string;
    eventTime:           string;
    showInChart?:         boolean;
    initiator?:          Initiator;
    weapon?:             EventWeapon;
    createdAt:           string;
    updatedAt:           string;
    __v?:                 number;
    score?:              number;
    target?:             Initiator;
    killer?:             string;
    killerType?:         string;
    killerControlledBy?: string;
    victim?:             string;
    victimType?:         string;
    victimControlledBy?: string;
    weapon_name?:        string;
    iucid?:              string;
    iName?:              string;
    displaySide?:        string;
    roleCode?:           string;
    msg?:                string;
    campaign?:          string;
}

export enum EventCode {
    D = "D",
    Kill = "KILL",
    ShootingStart = "SHOOTING_START",
    Shot = "SHOT",
}

export interface Initiator {
    category: number;
    groupId?: number;
    side:     number;
    type:     string;
    unitId:   number;
}

export interface EventWeapon {
    category?:    number;
    displayName?: string;
    typeName?:    string;
    weapon_name:  string;
    impactPoint?: ImpactPoint;
    targetName?:  string;
}

export interface ImpactPoint {
    alt: number;
    lat: number;
    lon: number;
}

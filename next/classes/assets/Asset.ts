import { ConditionMeter, IConditionMeter } from "../general/ConditionMeter";
import { MdString } from "../general/MdString";
import { ISource, Source } from "../general/Source";
import { AssetAbility, IAssetAbility } from "./AssetAbility";
import { AssetType } from "./AssetType";
import { AssetSelectInput, IAssetSelectInput } from "./AssetSelectInput";

export type AssetId = `${AssetType} / ${string}`;

export class Asset implements IAsset {
  $id: AssetId;
  Name: string;
  Aliases?: string[] | undefined;
  "Asset Type": AssetType;
  "Accepts modules"?: boolean | undefined;
  Input?: string[] | undefined;
  Select?: AssetSelectInput | undefined;
  Requirement?: string | undefined;
  Abilities: AssetAbility[];
  "Condition Meter"?: ConditionMeter | undefined;
  Source: Source;
  constructor(json: IAsset, source: ISource) {
    this.$id = json["Asset Type"] + " / " + json.Name as AssetId;
    this.Name = json.Name;
    this.Aliases = json.Aliases;
    this["Asset Type"] = json["Asset Type"];
    this["Accepts modules"] = json["Accepts modules"];
    this.Input = json.Input;
    this.Select = json.Select ? new AssetSelectInput(json.Select) : undefined;
    this.Requirement = json.Requirement;
    this.Abilities = json.Abilities.map((ability,index) => new AssetAbility(ability, this.$id + ` / Abilities / ${index+1}`));
    this["Condition Meter"] = json["Condition Meter"] ? new ConditionMeter(json["Condition Meter"], this.$id + " / Condition Meter") : undefined;
    this.Source = new Source(source);
  }
}

export interface IAsset {
  $id?: AssetId | undefined;
  Name: string;
  Source?: ISource;
  Aliases?: string[] | undefined;
  "Asset Type": AssetType;
  ["Accepts modules"]?: boolean | undefined;
  Input?: string[] | undefined;
  Requirement?: MdString | undefined;
  Abilities: IAssetAbility[];
  "Condition Meter"?: IConditionMeter | undefined;
  Select?: IAssetSelectInput | undefined;
}
import type EncounterId from "./EncounterId.js";
import type EncounterNature from "./EncounterNature.js";
import type EncounterTags from "./EncounterTags";
import type IEncounterVariantYaml from "./IEncounterVariantYaml.js";
import type ChallengeRank from "../general/ChallengeRank.js";
import type ISource from "../general/interfaces/ISource.js";
import type MdString from "../general/MdString.js";

export default interface IEncounterVariant extends IEncounterVariantYaml {
  $id: EncounterId;
  Source: ISource;
  Name: string;
  Rank: ChallengeRank;
  Description: MdString;
  Nature?: EncounterNature | undefined;
  Tags?: EncounterTags[] | undefined;
}

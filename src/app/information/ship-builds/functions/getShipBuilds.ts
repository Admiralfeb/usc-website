import { IBuildInfo } from "../models";
import shipBuilds from '../assets/builds.json';
import { getShipInfofromID } from "./getShipInfo";
import { sortItems } from "../functions/sort";

export const getShipBuilds = (): IBuildInfo[] => {
    let builds: IBuildInfo[] = [];
    builds = shipBuilds.map((v) => {
        const shipInfo = getShipInfofromID(v.ship)!;
        const size = shipInfo?.size;
        const newBuild: IBuildInfo = { ...v, size };
        return newBuild;
    });
    builds = sortItems(builds, 'ship');
    return builds;
};

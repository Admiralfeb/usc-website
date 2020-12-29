import axios from 'axios';
import { ISystemFactionInfo } from '../models';

const apiURL = 'https://www.edsm.net/api-system-v1/factions';

/**
 * Gets factions within a system
 * @param systemName default Arugbal
 */
const getFactionsinSystem = async (systemName: string = 'Arugbal') => {
  try {
    const response = await axios.get<ISystemFactionInfo>(apiURL, {
      params: {
        systemName,
      },
    });

    return response.data;
  } catch (err) {
    throw err;
  }
};

export { getFactionsinSystem };

import { State as ConfigurationSate } from '@/stores/modules/configuration';
import { State as CountrySate } from '@/stores/modules/country';

export interface RootState {
  configurationSate: ConfigurationSate,
  countrySate: CountrySate,
}
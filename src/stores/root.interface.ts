import { State as CountrySate } from '@/stores/modules/country'
import { State as ConfigurationSate } from '@/stores/modules/configuration'

export interface RootState {
  configurationSate: ConfigurationSate
  countrySate: CountrySate
}

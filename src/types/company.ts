import { Expose } from 'class-transformer';

export class Company {
  id:             number;
  @Expose({ name: 'logo_path' })
  logoPath:      null | string;
  name:           string;
  @Expose({ name: 'origin_country' })
  originCountry: string;
}
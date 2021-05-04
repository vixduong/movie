import { Type } from 'class-transformer';

type KEY = "FR" | "US" | "AU" | "FI" | "PT" | "CA-QC" |
  "IT" | "CA" | "IN" | "SE" | "NO" | "DE" | "MY" | "PH" |
  "NL" | "BG" | "HU" | "NZ" | "DK" | "LT" | "GB" | "BR" | "RU" | "ES"

class Certifications implements Partial<Record<KEY, ICertification[]>> {
}

export class Certification {
  @Type(() => Certifications)
  certifications: Certifications;
}

export class ICertification {
  certification: string;
  meaning: string;
  order: number;
}
import { iP2Number } from "./ip2Number";

export function maskIp(mask, ip): number {
  return (iP2Number(mask) & iP2Number(ip)) >>> 0
}

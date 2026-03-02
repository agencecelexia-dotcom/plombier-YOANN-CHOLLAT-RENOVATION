import { clientConfig } from "./client.config";
import type { Service } from "@/types";

export const services: readonly Service[] = clientConfig.services;

import { clientConfig } from "./client.config";
import type { Testimonial } from "@/types";

export const testimonials: readonly Testimonial[] = clientConfig.testimonials;

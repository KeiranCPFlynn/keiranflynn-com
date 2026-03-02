import { en } from "./en";
import { ru } from "./ru";
import type { ContentDictionary } from "./en";

export type Locale = "en" | "ru";

export const dictionaries: Record<Locale, ContentDictionary> = { en, ru };

export type { ContentDictionary };

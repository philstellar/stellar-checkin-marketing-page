
import { de } from './de';
import { en } from './en';
import { it } from './it';
import { es } from './es';

export const translations = {
  de,
  en,
  it,
  es
};

export type TranslationKey = keyof typeof de;

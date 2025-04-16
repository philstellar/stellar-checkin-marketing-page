
import { de } from './de';
import { en } from './en';
import { it } from './it';

export const translations = {
  de,
  en,
  it
};

export type TranslationKey = keyof typeof de;

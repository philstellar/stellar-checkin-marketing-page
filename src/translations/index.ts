
import { en } from './en';
import { it } from './it';

export const translations = {
  en,
  it
};

export type TranslationKey = keyof typeof en;

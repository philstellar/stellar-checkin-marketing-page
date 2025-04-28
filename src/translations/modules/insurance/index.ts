
// Export the specific language insurance translations for the detailed insurance page
import { insuranceDE } from './de';
import { insuranceEN } from './en';
import { insuranceIT } from './it';
import { insuranceES } from './es';

// Export both the original insurance translations and renamed versions
export { 
  insuranceDE, 
  insuranceEN, 
  insuranceIT, 
  insuranceES,
};

// Re-export with new names to avoid conflicts with the simpler versions
export { 
  insuranceDE as insuranceDetailDE, 
  insuranceEN as insuranceDetailEN, 
  insuranceIT as insuranceDetailIT, 
  insuranceES as insuranceDetailES 
};

/**
 * Utility functions for the application
 * Add your helper functions here
 */

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

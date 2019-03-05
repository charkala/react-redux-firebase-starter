/**
 * Helpers
 */

// Format numbers with commas
export const formatNumber = (num) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
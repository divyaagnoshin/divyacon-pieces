import { SerpApiConfig, ValidationResult } from '../types';
export declare const VALIDATION_CONSTANTS: {
    readonly MAX_RESULTS: 100;
    readonly MIN_RESULTS: 1;
    readonly MAX_START_POSITION: 990;
    readonly MIN_START_POSITION: 0;
    readonly VALID_DEVICE_TYPES: readonly ["desktop", "mobile", "tablet"];
    readonly VALID_SAFE_SEARCH: readonly ["active", "off"];
    readonly VALID_BOOLEAN_STRINGS: readonly ["true", "false"];
    readonly VALID_FILTER_VALUES: readonly ["0", "1"];
    readonly VALID_UPLOAD_DATE: readonly ["any", "hour", "today", "week", "month", "year"];
    readonly MAX_GOOGLE_DOMAIN_LENGTH: 50;
};
export declare class SerpApiValidator {
    static validateApiKey(apiKey: string): ValidationResult;
    /**
     * Validates a search query
     */
    static validateQuery(query: string): ValidationResult;
    /**
     * Validates language code
     */
    static validateLanguageCode(language?: string): ValidationResult;
    /**
     * Validates country code
     */
    static validateCountryCode(country?: string): ValidationResult;
    /**
     * Validates number of results
     */
    static validateNumResults(num?: number): ValidationResult;
    /**
     * Validates start position for pagination
     */
    static validateStartPosition(start?: number): ValidationResult;
    /**
     * Validates device type
     */
    static validateDeviceType(device?: string): ValidationResult;
    /**
     * Validates safe search setting
     */
    static validateSafeSearch(safe?: string): ValidationResult;
    /**
     * Validates location parameter
     */
    static validateLocation(location?: string): ValidationResult;
    /**
     * Validates Google domain parameter
     */
    static validateGoogleDomain(googleDomain?: string): ValidationResult;
    /**
     * Validates boolean string parameters (no_cache, async)
     */
    static validateBooleanString(value?: string, fieldName?: string): ValidationResult;
    /**
     * Validates filter parameter
     */
    static validateFilter(filter?: string): ValidationResult;
    /**
     * Validates YouTube sort parameter
     */
    static validateYouTubeSort(sortBy?: string): ValidationResult;
    /**
     * Validates YouTube duration parameter
     */
    static validateYouTubeDuration(duration?: string): ValidationResult;
    /**
     * Validates YouTube quality parameter
     */
    static validateYouTubeQuality(quality?: string): ValidationResult;
    /**
     * Validates YouTube upload date parameter
     */
    static validateUploadDate(uploadDate?: string): ValidationResult;
    /**
     * Validates mutual exclusivity of no_cache and async parameters
     */
    static validateCacheAsyncMutualExclusivity(noCache?: string, async?: string): ValidationResult;
    /**
     * Validates a complete SerpApi configuration
     */
    static validateConfig(config: Partial<SerpApiConfig>): ValidationResult;
    /**
     * Sanitizes and normalizes input parameters
     */
    static sanitizeConfig(config: Partial<SerpApiConfig>): Partial<SerpApiConfig>;
    /**
     * Validates and sanitizes config, throwing error if invalid
     */
    static validateAndSanitize(config: Partial<SerpApiConfig>): SerpApiConfig;
}
//# sourceMappingURL=validators.d.ts.map
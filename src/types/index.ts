// FIXED: We ONLY export the config types. 
// We completely removed the missing content types so the linter stops looking for them!
export type {
  DisplayConfig,
  RoutesConfig,
  ProtectedRoutesConfig,
  FontsConfig,
  StyleConfig,
  DataStyleConfig,
  EffectsConfig,
  MailchimpConfig,
  SchemaConfig,
  SameAsConfig,
  SocialSharingConfig,
  OnceUIConfig
} from "./config.types";
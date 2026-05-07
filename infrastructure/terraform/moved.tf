moved {
  from = cloudflare_dns_record.www
  to   = module.dns_records.cloudflare_dns_record.this["www"]
}

moved {
  from = cloudflare_dns_record.icloud_mx_1
  to   = module.dns_records.cloudflare_dns_record.this["icloud_mx_1"]
}

moved {
  from = cloudflare_dns_record.icloud_mx_2
  to   = module.dns_records.cloudflare_dns_record.this["icloud_mx_2"]
}

moved {
  from = cloudflare_dns_record.spf
  to   = module.dns_records.cloudflare_dns_record.this["spf"]
}

moved {
  from = cloudflare_dns_record.apple_verification
  to   = module.dns_records.cloudflare_dns_record.this["apple_verification"]
}

moved {
  from = cloudflare_dns_record.acm_validation_wildcard
  to   = module.dns_records.cloudflare_dns_record.this["acm_validation_wildcard"]
}

moved {
  from = cloudflare_ruleset.response_headers
  to   = module.response_headers.cloudflare_ruleset.this
}

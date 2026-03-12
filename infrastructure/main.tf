provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

data "cloudflare_zone" "zone" {
  filter = {
    name = var.domain
  }
}

resource "cloudflare_dns_record" "apex_github_1" {
  content = "185.199.111.153"
  name    = "603.nz"
  proxied = true
  ttl     = 1
  type    = "A"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "apex_github_2" {
  content = "185.199.110.153"
  name    = "603.nz"
  proxied = true
  ttl     = 1
  type    = "A"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "apex_github_3" {
  content = "185.199.109.153"
  name    = "603.nz"
  proxied = true
  ttl     = 1
  type    = "A"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "apex_github_4" {
  content = "185.199.108.153"
  name    = "603.nz"
  proxied = true
  ttl     = 1
  type    = "A"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "www" {
  content = "jch254.github.io"
  name    = "www"
  proxied = true
  ttl     = 1
  type    = "CNAME"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "icloud_mx_1" {
  content  = "mx02.mail.icloud.com"
  name     = "603.nz"
  priority = 10
  proxied  = false
  ttl      = 1
  type     = "MX"
  zone_id  = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "icloud_mx_2" {
  content  = "mx01.mail.icloud.com"
  name     = "603.nz"
  priority = 10
  proxied  = false
  ttl      = 1
  type     = "MX"
  zone_id  = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "spf" {
  content = "\"v=spf1 include:icloud.com ~all\""
  name    = "603.nz"
  proxied = false
  ttl     = 1
  type    = "TXT"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "apple_verification" {
  content = "\"apple-domain=FAZpM05jXaJqUfv1\""
  name    = "603.nz"
  proxied = false
  ttl     = 1
  type    = "TXT"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_dns_record" "acm_validation_wildcard" {
  content = "_eaf27cc849d352c70825788e0231165f.jkddzztszm.acm-validations.aws"
  name    = "_7dba64060c909694be0fd5e895a34b2b"
  proxied = false
  ttl     = 1
  type    = "CNAME"
  zone_id = data.cloudflare_zone.zone.id
}

resource "cloudflare_ruleset" "response_headers" {
  zone_id = data.cloudflare_zone.zone.id
  name    = "default"
  kind    = "zone"
  phase   = "http_response_headers_transform"

  rules = [
    {
      description = "Security Headers"
      expression = "true"
      action     = "rewrite"

      action_parameters = {
        headers = {
          "Content-Security-Policy" = {
            operation = "set"
            value     = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
          }
          "Permissions-Policy" = {
            operation = "set"
            value     = "camera=(), microphone=(), geolocation=(), payment=()"
          }
          "Referrer-Policy" = {
            operation = "set"
            value     = "strict-origin-when-cross-origin"
          }
          "Strict-Transport-Security" = {
            operation = "set"
            value     = "max-age=31536000; includeSubDomains; preload"
          }
          "X-Content-Type-Options" = {
            operation = "set"
            value     = "nosniff"
          }
          "X-Frame-Options" = {
            operation = "set"
            value     = "DENY"
          }
        }
      }
    }
  ]
}

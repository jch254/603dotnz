/**
 * What the shared header and footer need to know about this site.
 * jch254.com has the same file with its own values.
 */

export const sites = [
  { domain: 'jch254.com', url: 'https://jch254.com' },
  { domain: '603.nz', url: 'https://603.nz' },
] as const;

export const site = {
  domain: '603.nz',
  url: 'https://603.nz',
  /** Page links in the header (hidden below 980px) and in the footer. */
  nav: [
    { label: 'Products', href: '/#products' },
    { label: 'Index', href: '/#index' },
  ],
  footerLinks: [] as { label: string; href: string }[],
  source: 'https://github.com/jch254/603dotnz',
  addresses: [
    { label: 'github.com/jch254', href: 'https://github.com/jch254' },
    { label: 'linkedin.com/in/jch254', href: 'https://linkedin.com/in/jch254' },
    { label: 'jordan@jch254.com', href: 'mailto:jordan@jch254.com' },
  ],
};

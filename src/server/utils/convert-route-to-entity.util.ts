const mapping: Record<string, string> = {
  organizations: 'organization',
  tokens: 'token',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

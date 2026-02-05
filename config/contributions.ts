export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "ccsync-api",
    contibutionDescription:
      "The CCSync API is organized around REST. The API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes and authentication. Authentication and authorization are handled securely through Firebase.",
    repoOwner: "radleigh123",
    link: "https://github.com/radleigh123/ccsync-api",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);

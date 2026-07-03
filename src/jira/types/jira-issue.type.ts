export interface JiraSearchResponse {
  issues: JiraIssue[];
}

export interface JiraIssue {
  key: string;
  fields?: {
    summary?: string;
    description?: string;
    status?: { name: string };
    assignee?: { displayName: string } | null;
    updated?: string;
  };
}

export interface JiraChangelogResponse {
  values: JiraChangelogEntry[];
  isLast?: boolean;
  startAt?: number;
  maxResults?: number;
}

export interface JiraChangelogEntry {
  id: string;
  author?: { accountId?: string; displayName?: string };
  created: string;
  items: JiraChangelogItem[];
}

export interface JiraChangelogItem {
  field: string;
  from?: string | null;
  fromString?: string | null;
  to?: string | null;
  toString?: string | null;
}

export interface JiraTransitionsResponse {
  transitions: JiraTransition[];
}

export interface JiraTransition {
  id: string;
  name: string;
  to?: { name?: string };
}

export interface JiraAssignableUser {
  accountId: string;
  displayName: string;
  avatarUrls?: { '48x48'?: string };
}

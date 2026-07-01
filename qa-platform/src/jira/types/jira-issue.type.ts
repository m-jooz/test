export interface JiraSearchResponse {
  issues: JiraIssue[];
}

export interface JiraIssue {
  key: string;
  fields: {
    summary: string;
    status?: { name: string };
    assignee?: { displayName: string } | null;
    updated: string;
  };
}

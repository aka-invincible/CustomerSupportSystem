export class IssueRepository {
    constructor() {
        this.issues = new Map();
        this.issueCounter = 0;
    }

    save(issue) {
        this.issues.set(issue.getIssueId(), issue);
        return issue;
    }

    findById(issueId) {
        return this.issues.get(issueId);
    }

    findAll() {
        return Array.from(this.issues.values());
    }

    findByAssignedAgentId(agentId) {
        const assignedIssues = [];
        for (const issue of this.issues.values()) {
            if (issue.getAssignedAgentId() === agentId) {
                assignedIssues.push(issue);
            }
        }
        return assignedIssues;
    }

    findByFilters(filters) {
        const filteredIssues = [];
        for (const issue of this.issues.values()) {
            let matches = true;
            for (const key in filters) {
                if (issue[key] !== filters[key]) {
                    matches = false;
                    break;
                }
            }
            if (matches) {
                filteredIssues.push(issue);
            }
        }
        return filteredIssues;
    }

    matchFilters(issue, filters) {
        for (const key in filters) {
            if (issue[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    }

    update(issue) {
        if (this.issues.has(issue.getIssueId())) {
            this.issues.set(issue.getIssueId(), issue);
            return issue;
        }
        throw new Error("Issue not found");
    }

    getNextIssueId() {
        let nextId = this.issueCounter + 1;
        while (this.issues.has(nextId)) {
            nextId++;
        }
        this.issueCounter = nextId;
        return "I" + nextId;
    }

}
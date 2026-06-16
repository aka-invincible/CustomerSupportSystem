export class Agent {
    constructor(agentId, email, name, specializedIssueTypes) {
        this.name = name;
        this.email = email;
        this.agentId = agentId;
        this.specializedIssueTypes = specializedIssueTypes;
        this.assignedIssueIds = new Set();
        this.workHistory = [];
        this.isAvailable = true;
    }

    getAgentId() {
        return this.agentId;
    }
    setAgentId(agentId) {
        this.agentId = agentId;
    }

    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getSpecializedIssueTypes() {
        return this.specializedIssueTypes;
    }
    setSpecializedIssueTypes(specializedIssueTypes) {
        this.specializedIssueTypes = specializedIssueTypes;
    }

    getAssignedIssueIds() {
        return this.assignedIssueIds;
    }
    setAssignedIssueIds(assignedIssueIds) {
        this.assignedIssueIds = assignedIssueIds;
    }

    getWorkHistory() {
        return this.workHistory;
    }
    setWorkHistory(workHistory) {
        this.workHistory = workHistory;
    }

    getIsAvailable() {
        return this.isAvailable;
    }
    setIsAvailable(isAvailable) {
        this.isAvailable = isAvailable;
    }

    canHandleIssueType(issueType) {
        return this.specializedIssueTypes.includes(issueType);
    }

    assignIssue(issueId) {
        this.assignedIssueIds.add(issueId);
        if (!this.workHistory.includes(issueId)) {
            this.workHistory.push(issueId);
        }
    }

    removeAssignedIssue(issueId) {
        this.assignedIssueIds.delete(issueId);
    }

    isFree() {
        return this.isAvailable && this.assignedIssueIds.size === 0;
    }

    getCurrentWorkload() {
        return this.assignedIssueIds.size;
    }



}
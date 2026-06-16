import { IssueStatus } from "./IssueStatus";
import { IssueType } from "./IssueType";
export class Issue {
    constructor(
        issueId,
        transactionId,
        issueType,
        description,
        subject,
        customerEmail
    ) {
        this.issueId = issueId;
        this.transactionId = transactionId;
        this.issueType = issueType;
        this.description = description;
        this.subject = subject;
        this.customerEmail = customerEmail;
        this.issueStatus = IssueStatus.OPEN;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.resolution = '';
        this.assignedAgentId = null;

    }

    getIssueId() {
        return this.issueId;
    }
    setIssueId(issueId) {
        this.issueId = issueId;
    }

    getTransactionId() {
        return this.transactionId;
    }
    setTransactionId(transactionId) {
        this.transactionId = transactionId;
    }

    getIssueType() {
        return this.issueType;
    }
    setIssueType(issueType) {
        this.issueType = issueType;
    }

    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }

    getSubject() {
        return this.subject;
    }
    setSubject(subject) {
        this.subject = subject;
    }

    getCustomerEmail() {
        return this.customerEmail;
    }
    setCustomerEmail(customerEmail) {
        this.customerEmail = customerEmail;
    }

    getIssueStatus() {
        return this.issueStatus;
    }
    setIssueStatus(issueStatus) {
        this.issueStatus = issueStatus;
    }

    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }

    getResolution() {
        return this.resolution;
    }
    setResolution(resolution) {
        this.resolution = resolution;
    }

    getAssignedAgentId() {
        return this.assignedAgentId;
    }
    setAssignedAgentId(assignedAgentId) {
        this.assignedAgentId = assignedAgentId;
    }

    updateStatus(newStatus, resolution) {
        this.issueStatus = newStatus;
        this.resolution = resolution;
        this.updatedAt = new Date();
    }


}
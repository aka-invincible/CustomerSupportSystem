export class AgentRepository {

    constructor() {
        this.agents = new Map();
        this.agentCounter = 0;
    }

    save(agent) {
        this.agents.set(agent.getAgentId(), agent);
        return agent;
    }

    findById(agentId) {
        return this.agents.get(agentId);
    }

    findByEmail(email) {
        for (const agent of this.agents.values()) {
            if (agent.getEmail() === email) {
                return agent;
            }
        }
        return null;
    }

    findAll() {
        return Array.from(this.agents.values());
    }

    findBySpecializedIssueType(issueType) {
        const specializedAgents = [];
        for (const agent of this.agents.values()) {
            if (agent.getSpecializedIssueTypes().includes(issueType)) {
                specializedAgents.push(agent);
            }
        }
        return specializedAgents;
    }

    findAvailableAgents() {
        const availableAgents = [];
        for (const agent of this.agents.values()) {
            if (agent.isAvailable()) {
                availableAgents.push(agent);
            }
        }
        return availableAgents;
    }

    update(agent) {
        if (this.agents.has(agent.getAgentId())) {
            this.agents.set(agent.getAgentId(), agent);
            return agent;
        }
        return null;
    }

    getNextAgentId() {
        let nextId = this.agentCounter + 1;
        while (this.agents.has(nextId)) {
            nextId++;
        }
        this.agentCounter = nextId;
        return "A" + nextId.toString();

    }
}
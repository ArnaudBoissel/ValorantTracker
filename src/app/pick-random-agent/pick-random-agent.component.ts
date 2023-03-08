import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Agent {
  statusAgent: number
  name: string
  image: string
}

interface Users {
  numberUser: string
  agent: Agent
}

@Component({
  selector: 'pick-random-agent',
  templateUrl: './pick-random-agent.component.html',
  styleUrls: ['./pick-random-agent.component.css'],
  template: `
  <router-outlet></router-outlet>
`,
})
export class PickRandomAgentComponent implements OnInit  {
  agents: Agent[] = []
  allAgents: Agent[] = []
  users: string[] = ["Utilisateur 1", "Utilisateur 2", "Utilisateur 3", "Utilisateur 4", "Utilisateur 5"]
  selectedUsers: string[] = []
  nbUserSelected: number = 0
  itemList: string[] = []
  usersData: Users[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: number, 
      data: {displayName: string, displayIcon: string, role: { displayName: string}, isPlayableCharacter: boolean
    }[]}>('https://valorant-api.com/v1/agents')
      .subscribe(({status, data}) => {
        data.forEach(agent => {
          if (agent.isPlayableCharacter) {
            this.allAgents.push({
              statusAgent: status,
              name: agent.displayName,
              image: agent.displayIcon
            });
          }
        });
        this.agents = this.allAgents;
        this.agents.forEach(agent => {
          this.itemList.push(agent.name);
        });
      });
    }

  onToggleChange(buttonValue: string) {
    this.nbUserSelected = buttonValue.length
  }

    assignItemsToUsers(numUsers: number, itemList: string[]): { [key: string]: string } {
      this.usersData = []
      // Initialize variables
      let assignedItems: { [key: string]: string } = {};
      let availableItems = itemList.slice();
      // Shuffle available items
      for (let i = availableItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableItems[i], availableItems[j]] = [availableItems[j], availableItems[i]];
      }
    
      // Assign items to users
      for (let i = 0; i < numUsers; i++) {
        const user = `User ${i + 1}`;
        assignedItems[user] = availableItems.pop() || '';
      }
      this.extractItemsAndImages(assignedItems)
      console.log(assignedItems)
      return assignedItems;
    }  
    
    extractItemsAndImages(assignedItems: { [key: string]: string }) {
      for (let key in assignedItems) {
        let agent = this.allAgents.find(agent => agent.name === assignedItems[key]);
        if (agent) {
          agent = Object.assign({}, agent);
          //agent.name = key;
          this.usersData.push({
            numberUser: key,
            agent: agent
          });
        }
      }
    }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderHomeService } from '../service/headerHome.service';

interface Agent {
  statusAgent: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents: Agent[] = [];
  allAgents: Agent[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private http: HttpClient, private headerHomeService: HeaderHomeService) { }

  ngOnInit() {
    this.http.get<{status: number, data: {displayName: string, developerName: string, description: string, displayIcon: string, role: { displayName: string}, isPlayableCharacter: boolean}[]}>('https://valorant-api.com/v1/agents')
      .subscribe(({status, data}) => {
        data.forEach(agent => {
          if (agent.isPlayableCharacter) {
            this.allAgents.push({
              statusAgent: status,
              name: agent.displayName,
              category: agent.role.displayName,
              description: agent.description,
              image: agent.displayIcon
            });
          }
        });
        this.allAgents.forEach(agent => {
          if(!this.categories.includes(agent.category)) {
            this.categories.push(agent.category);
          }
        });
        this.agents = this.allAgents;
      });
      this.categories.push("All");

      this.headerHomeService.updateBackground("pink");//Change background color
  }

  filterAgents(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.agents = this.allAgents;
    } else {
      this.agents = this.allAgents.filter(agent => agent.category === category);
    }
  }
}

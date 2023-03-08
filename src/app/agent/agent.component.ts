import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderHomeService } from '../service/headerHome.service';
import { Subscription } from 'rxjs';

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
  styleUrls: ['./agent.component.css'],
  template: `
  <router-outlet></router-outlet>
`,
})
export class AgentComponent implements OnInit, OnDestroy  {
  agents: Agent[] = [];
  allAgents: Agent[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  optionsSubscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private headerHomeService: HeaderHomeService) { }

  ngOnInit() {
    this.http.get<{status: number, 
      data: {displayName: string, developerName: string, description: string, displayIcon: string, role: { displayName: string}, isPlayableCharacter: boolean
    }[]}>('https://valorant-api.com/v1/agents')
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

      //this.headerHomeService.updateBackground("pink");//Change background color
      this.headerHomeService.updateOptions(this.categories);

      this.optionsSubscription = this.headerHomeService.optionsBack$.subscribe(option => {
        this.selectedCategory = option;
        console.log("option select subs: ", this.selectedCategory)
        this.filterAgents(this.selectedCategory)
      });
      //this.selectedCategory = this.headerHomeService.getSelectedOption();
      console.log("option select: ", this.selectedCategory)
    }

  filterAgents(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.agents = this.allAgents;
    } else {
      this.agents = this.allAgents.filter(agent => agent.category === category);
    }
  }

  ngOnDestroy() {
    this.optionsSubscription.unsubscribe();
    // nettoyer les données ici
    this.agents = [];
    this.allAgents = [];
    this.categories = [];
    this.selectedCategory = 'All';
  }
}

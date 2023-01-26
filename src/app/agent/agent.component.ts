//path fade : https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6
//path all : https://valorant-api.com/v1/agents
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: number, data: {displayName: string, developerName: string, description: string, displayIcon: string, role: { displayName: string}, isPlayableCharacter: boolean}[]}>('https://valorant-api.com/v1/agents')
      .subscribe(({status, data}) => {
        data.forEach(agent => {
          if (agent.isPlayableCharacter) {
            this.agents.push({
              statusAgent: status,
              name: agent.displayName,
              category: agent.role.displayName,
              description: agent.description,
              image: agent.displayIcon
            });
          }
        });
        console.log(`Number of agents: ${this.agents.length}`);
      });
  }




//   ngOnInit() {
//     this.http.get<{status: number, 
//       data: {displayName: string, developerName: string, description: string, displayIcon: string
//         role:{ displayName: string}  }}>('https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6')
//       .subscribe(({status, data}) => {
//         this.agents.push({
//           statusAgent: status,
//           name: data.displayName,
//           category: data.role.displayName,//developerName,
//           description: data.description,
//           image: data.displayIcon
//         });
//       });
//   }
}

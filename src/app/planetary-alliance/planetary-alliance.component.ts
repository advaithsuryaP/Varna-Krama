import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetary-alliance',
  templateUrl: './planetary-alliance.component.html',
  styleUrls: ['./planetary-alliance.component.css']
})
export class PlanetaryAllianceComponent implements OnInit {
  planets = ['రవి','చంద్ర', 'కుజ','బుధ', 'గురు', 'శుక్ర', 'శని'];
  allianceInfo = {
    'రవి': [ ['చంద్ర', 'కుజ', 'గురు'], ['శుక్ర', 'శని'], ['బుధ'] ],
    'చంద్ర': [ ['రవి', 'బుధ'],  ['లేరు'], ['కుజ', 'శుక్ర', 'గురు', 'శని'] ],
    'కుజ': [ ['రవి', 'చంద్ర', 'గురు'], ['బుధ'], ['శుక్ర', 'శని'] ],
    'బుధ': [ ['రవి', 'శుక్ర'], ['చంద్ర'], ['గురు', 'శని', 'కుజ'] ],
    'గురు': [ ['రవి', 'చంద్ర', 'కుజ'], ['శుక్ర', 'బుధ'], ['శని'] ],
    'శుక్ర': [ ['బుధ', 'శని'], ['రవి', 'చంద్ర'], ['కుజ', 'గురు'] ],
    'శని': [ ['బుధ', 'శుక్ర'], ['రవి', 'చంద్ర', 'కుజ'], ['గురు'] ],
  };
  optionOne!: string;
  optionTwo!: string;
  relation: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    for(let [key, value] of Object.entries(this.allianceInfo)) {
      if(key === this.optionOne) {
        this.relation = this.getRelation(this.getIndex(value));
      }
    }
  }

  getIndex(planetRelations: string[][]): number {
    let returnIndex = -1;
    planetRelations.forEach((relations, index) => {
      relations.forEach(value => {
        if(value === this.optionTwo) {
          returnIndex = index;
        }
      }) 
    })
    return returnIndex;
  }

  getRelation(index: number): string {
    if(index == 0) return 'మిత్రులు';
    else if(index === 1) return 'శత్రులు';
    else if(index === 2) return 'సములు';
    else return 'No relation between planets';
  }

}

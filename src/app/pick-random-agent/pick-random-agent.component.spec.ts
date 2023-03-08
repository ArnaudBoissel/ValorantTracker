import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRandomAgentComponent } from './pick-random-agent.component';

describe('PickRandomAgentComponent', () => {
  let component: PickRandomAgentComponent;
  let fixture: ComponentFixture<PickRandomAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickRandomAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickRandomAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

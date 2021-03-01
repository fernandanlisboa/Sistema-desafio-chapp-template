import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAvaliacoesComponent } from './tabela-avaliacoes.component';

describe('TabelaAvaliacoesComponent', () => {
  let component: TabelaAvaliacoesComponent;
  let fixture: ComponentFixture<TabelaAvaliacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaAvaliacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThesisNavComponent } from './thesis-nav.component';

describe('ThesisNavComponent', () => {
  let component: ThesisNavComponent;
  let fixture: ComponentFixture<ThesisNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ThesisNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesisNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

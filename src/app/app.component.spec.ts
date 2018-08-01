import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('creates the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`has title 'Rock-Paper-Scissors'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rock-Paper-Scissors');
  }));

  it('renders title in h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Let\'s play Rock-Paper-Scissors!');
  }));

  describe('choice buttons', () => {
    it('image src paths should be correct', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const images = compiled.querySelectorAll('img');
      const imageSourceOne = images[0].getAttribute('src');
      const imageSourceTwo = images[1].getAttribute('src');
      const imageSourceThree = images[2].getAttribute('src');

      expect(imageSourceOne).toEqual('/src/assets/rock.jpg');
      expect(imageSourceTwo).toEqual('/src/assets/paper.jpg');
      expect(imageSourceThree).toEqual('/src/assets/scissors.jpg');
    }));

    it('being clicked sets user selection', async( () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;

      const compiled = fixture.debugElement.nativeElement;
      const rockBtn = compiled.querySelector('button'); // get first button
      rockBtn.click();

      expect(component.userChoice).toEqual('rock');
    }));
  });

  describe('setComputerChoice()', () => {
    it('always returns either "rock", "paper" or "scissors"', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const component = fixture.componentInstance;

      expect(component.setComputerChoice()).toMatch(/rock|paper|scissors/);
    }));
  });
});

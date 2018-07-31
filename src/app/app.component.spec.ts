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
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Rock-Paper-Scissors'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rock-Paper-Scissors');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Let\'s play Rock-Paper-Scissors!');
  }));
  describe('throw buttons', () => {
    it('should have all the images', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const images = compiled.querySelectorAll('img');
      const imageSourceOne = images[0].getAttribute('src');
      const imageSourceTwo = images[1].getAttribute('src');
      const imageSourceThree = images[2].getAttribute('src');

      expect(imageSourceOne).toEqual('/src/assets/rock.png');
      expect(imageSourceTwo).toEqual('/src/assets/paper.png');
      expect(imageSourceThree).toEqual('/src/assets/scissors.png');
    }));
  });
});

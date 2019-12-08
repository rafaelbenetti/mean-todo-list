import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item.component';
import { componentFactoryName } from '@angular/compiler';

describe('TodoItemComponent (shallow)', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  const item = {
    _id: '5ded36c8b56aa9001f650701',
    title: 'I have to clean the house',
    completed: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should show all TODO Item properties', () => {
    const el = fixture.nativeElement;

    const title = el.querySelector('.title').innerHTML;
    expect(title).toContain(item.title);

    const completed = el.querySelector('.checkbox').checked;
    expect(completed).toBeTruthy();
  });

  it('should EMIT delete for a TODO Item', () => {
    spyOn(component.deleteItem, 'emit');

    const el = fixture.nativeElement;
    const button = el.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.deleteItem.emit).toHaveBeenCalled();
  });
});

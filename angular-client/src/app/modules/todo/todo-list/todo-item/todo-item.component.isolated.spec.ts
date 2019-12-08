import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent (isolated)', () => {
    const component = new TodoItemComponent();

    it('should EMIT delete for an item', () => {
        spyOn(component.deleteItem, 'emit');
        component.onDelete();
        expect(component.deleteItem.emit).toHaveBeenCalled();
    });

    it('should EMIT update for an item', () => {
      spyOn(component.updateItem, 'emit');
      component.onUpdate();
      expect(component.updateItem.emit).toHaveBeenCalled();
  });
});

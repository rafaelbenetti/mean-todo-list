import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { environment } from 'src/environments/environment';

describe('TodoService (isolated)', () => {
  let httpTestingController: HttpTestingController;
  let service: TodoService;

  const url = `${environment.url}/todos`;

  const item = {
    _id: '5ded36c8b56aa9001f650701',
    title: 'I have to clean the house',
    completed: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    }).compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TodoService);
  });

  it('should call todos resource with GET method', () => {
    service.get().subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call todos resource with POST method', () => {
    service.create(item).subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('POST');
    httpTestingController.verify();
  });

  it('should call todos resource with PUT method', () => {
    service.update(item).subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('PUT');
    httpTestingController.verify();
  });

  it('should call todos resource with DELETE method', () => {
    service.delete(item._id).subscribe();

    const request = httpTestingController.expectOne(`${url}/${item._id}`);
    request.flush([]);

    expect(request.request.method).toBe('DELETE');
    httpTestingController.verify();
  });
});
